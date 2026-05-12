import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { experienceSchema, ExperienceSchema } from '@/lib/schemas';
import { RootState } from '@/store/store';
import { setProfileData, setProfileStep } from '@/store/features/smartProfileSlice';
import { PROFILE_SECTIONS } from '@/common/consts';

export const useStep3Modal = (isOpen: boolean) => {
  const dispatch = useDispatch();
  const experience = useSelector((state: RootState) => state.smartProfile.experience);

  const today = new Date().toISOString().split('T')[0];

  const { control, handleSubmit, reset, formState: { errors } } = useForm<ExperienceSchema>({
    resolver: zodResolver(experienceSchema),
    defaultValues: {
      experience: experience.length > 0 ? experience : [{
        id: Math.random().toString(36).substring(7),
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
        experience: experience.length > 0 ? experience : [{
          id: Math.random().toString(36).substring(7),
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
      id: Math.random().toString(36).substring(7),
      company: "",
      roleTag: "",
      startDate: today,
      endDate: today,
      isCurrent: false,
      description: "",
    });
  };

  const onSubmit = (data: ExperienceSchema, close: () => void) => {
    dispatch(setProfileData({ key: PROFILE_SECTIONS.EXPERIENCE, value: data.experience }));
    dispatch(setProfileStep(4));
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
  };
};
