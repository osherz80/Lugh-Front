import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { educationSchema, EducationSchema } from '@/lib/schemas';
import { RootState } from '@/store/store';
import { setProfileData, setProfileStep } from '@/store/features/smartProfileSlice';
import { PROFILE_SECTIONS } from '@/common/consts';

export const useStep4Modal = (isOpen: boolean) => {
  const dispatch = useDispatch();
  const education = useSelector((state: RootState) => state.smartProfile.education);

  const { control, handleSubmit, reset, formState: { errors } } = useForm<EducationSchema>({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      education: education.length > 0 ? education : [{
        institution: "",
        degree: "",
        startDate: "",
        endDate: "",
        isOngoing: false,
        description: "",
      }]
    },
  });

  useEffect(() => {
    if (!isOpen) {
      reset({
        education: education.length > 0 ? education : [{
          institution: "",
          degree: "",
          startDate: "",
          endDate: "",
          isOngoing: false,
          description: "",
        }]
      });
    }
  }, [isOpen, reset, education]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  const addEducation = () => {
    append({
      institution: "",
      degree: "",
      startDate: "",
      endDate: "",
      isOngoing: false,
      description: "",
    });
  };

  const onSubmit = (data: EducationSchema, close: () => void) => {
    dispatch(setProfileData({ key: PROFILE_SECTIONS.EDUCATION, value: data.education }));
    dispatch(setProfileStep(5));
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
  };
};
