import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { personaSchema, PersonaSchema } from '@/lib/schemas';
import { RootState } from '@/store/store';
import { setProfileData, setProfileStep } from '@/store/features/smartProfileSlice';
import { PROFILE_SECTIONS } from '@/common/consts';

export const useStep5Modal = () => {
  const dispatch = useDispatch();
  const persona = useSelector((state: RootState) => state.smartProfile.persona);

  const { control, handleSubmit, setValue, watch, formState: { errors } } = useForm<PersonaSchema>({
    resolver: zodResolver(personaSchema),
    defaultValues: persona,
  });

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

  const onSubmit = (data: PersonaSchema, close: () => void) => {
    dispatch(setProfileData({ key: PROFILE_SECTIONS.PERSONA, value: data }));
    dispatch(setProfileStep(6));
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
  };
};
