import { useEffect } from 'react';
import { z } from 'zod';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { experienceSchema, ExperienceSchema } from '@/lib/schemas';
import { RootState } from '@/store/store';
import { setSmartProfileSectionKey, setSmartProfileStep } from '@/store/features/smartProfileSlice';
import { PROFILE_SECTIONS } from '@/common/consts';
import { useUpsertSmartProfileMutation } from '@/store/services/api/smartProfile';
import { JobExperience } from '@/store/types/smartProfile';

export const useStep3Modal = (isOpen: boolean) => {
  const dispatch = useDispatch();
  const experience = useSelector((state: RootState) => state.smartProfile.experience);

  const [upsertSmartProfile, { isLoading: isUpserting }] = useUpsertSmartProfileMutation();

  const today = new Date().toISOString().split('T')[0];

  const { control, handleSubmit, reset, formState: { errors } } = useForm<{ experience: ExperienceSchema }>({
    resolver: zodResolver(z.object({ experience: z.array(experienceSchema) })),
    defaultValues: {
      experience: experience?.length > 0 ? experience : [{
        company: "",
        roleTag: "",
        startDate: today,
        endDate: today,
        isCurrent: false,
        description: "",
      }]
    },
  });

  useEffect(() => {
    if (!isOpen) {
      reset({
        experience: experience?.length > 0 ? experience : [{
          company: "",
          roleTag: "",
          startDate: today,
          endDate: today,
          isCurrent: false,
          description: "",
        }]
      });
    }
  }, [isOpen, reset, experience, today]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  });

  const addExperience = () => {
    append({
      company: "",
      roleTag: "",
      startDate: today,
      endDate: today,
      isCurrent: false,
      description: "",
    });
  };

  const onSubmit = async (stepData: JobExperience[], close: () => void) => {
    await upsertSmartProfile({ stepData, section: PROFILE_SECTIONS.EXPERIENCE });
    dispatch(setSmartProfileSectionKey({ key: PROFILE_SECTIONS.EXPERIENCE, value: stepData }));
    dispatch(setSmartProfileStep(4));
    close();
  };

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    fields,
    addExperience,
    removeExperience: remove,
    isUpserting,
  };
};
