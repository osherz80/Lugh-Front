import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { personaSchema, PersonaSchema } from '@/lib/schemas';
import { RootState } from '@/store/store';
import { setSmartProfileData, setSmartProfileStep } from '@/store/features/smartProfileSlice';
import { PROFILE_SECTIONS } from '@/common/consts';
import { useUpsertSmartProfileMutation } from '@/store/services/api/smartProfile';

export const useStep5Modal = (isOpen: boolean) => {
  const dispatch = useDispatch();
  const persona = useSelector((state: RootState) => state.smartProfile.persona);
  const [upsertSmartProfile, { isLoading: isUpserting }] = useUpsertSmartProfileMutation();
  const { control, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm<PersonaSchema>({
    resolver: zodResolver(personaSchema),
    defaultValues: persona,
  });

  useEffect(() => {
    if (!isOpen) {
      reset(persona);
    }
  }, [isOpen, reset, persona]);

  const selectedStyles = watch("style") || [];
  const selectedStrengths = watch("strengths") || [];

  const toggleStyle = (style: string) => {
    const current = selectedStyles;
    const next = current.includes(style)
      ? current.filter(s => s !== style)
      : [...current, style];
    setValue("style", next, { shouldValidate: true });
  };

  const toggleStrength = (id: string) => {
    const current = selectedStrengths;
    if (current.includes(id)) {
      setValue("strengths", current.filter(s => s !== id), { shouldValidate: true });
    } else if (current.length < 3) {
      setValue("strengths", [...current, id], { shouldValidate: true });
    }
  };

  const onSubmit = async (data: PersonaSchema, close: () => void) => {
    await upsertSmartProfile({ ...data, section: PROFILE_SECTIONS.PERSONA });
    dispatch(setSmartProfileData({ key: PROFILE_SECTIONS.PERSONA, value: data }));
    dispatch(setSmartProfileStep(6));
    close();
  };

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    selectedStyles,
    selectedStrengths,
    toggleStyle,
    toggleStrength,
    isUpserting,
  };
};
