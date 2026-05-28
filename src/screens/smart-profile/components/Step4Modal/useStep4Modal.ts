import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { educationSchema, EducationSchema } from '@/lib/schemas';
import { RootState } from '@/store/store';
import { setSmartProfileSectionKey, setSmartProfileStep } from '@/store/features/smartProfileSlice';
import { PROFILE_SECTIONS } from '@/common/consts';
import { useUpsertSmartProfileMutation } from '@/store/services/api/smartProfile';
import { Education } from '@/store/types/smartProfile';

export const useStep4Modal = (isOpen: boolean) => {
  const dispatch = useDispatch();
  const education = useSelector((state: RootState) => state.smartProfile.education);
  const [upsertSmartProfile, { isLoading: isUpserting }] = useUpsertSmartProfileMutation();

  const today = new Date().toISOString().split('T')[0];

  const { control, handleSubmit, reset, formState: { errors } } = useForm<EducationSchema>({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      education: education?.length > 0 ? education : [{
        institution: "",
        degree: "",
        startDate: today,
        endDate: today,
        isOngoing: false,
        description: "",
      }]
    },
  });

  useEffect(() => {
    if (!isOpen) {
      reset({
        education: education?.length > 0 ? education : [{
          institution: "",
          degree: "",
          startDate: today,
          endDate: today,
          isOngoing: false,
          description: "",
        }]
      });
    }
  }, [isOpen, reset, education, today]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  const addEducation = () => {
    append({
      institution: "",
      degree: "",
      startDate: today,
      endDate: today,
      isOngoing: false,
      description: "",
    });
  };

  const onSubmit = async (stepData: Education[], close: () => void) => {
    dispatch(setSmartProfileStep(5));
    dispatch(setSmartProfileSectionKey({ key: PROFILE_SECTIONS.EDUCATION, value: stepData }));
    await upsertSmartProfile({ stepData, section: PROFILE_SECTIONS.EDUCATION });
    close();
  };

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    fields,
    addEducation,
    removeEducation: remove,
    isUpserting,
  };
};
