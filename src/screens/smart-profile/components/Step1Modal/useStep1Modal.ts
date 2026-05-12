import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { basicsSchema, BasicsSchema } from '@/lib/schemas';
import { RootState } from '@/store/store';
import { setProfileData, setProfileStep } from '@/store/features/smatProfileSlice';
import { PROFILE_SECTIONS } from '@/common/consts';

export const useStep1Modal = () => {
  const dispatch = useDispatch();
  const basics = useSelector((state: RootState) => state.smartProfile.basics);

  const { control, handleSubmit, formState: { errors } } = useForm<BasicsSchema>({
    resolver: zodResolver(basicsSchema),
    defaultValues: basics,
  });

  const onSubmit = (data: BasicsSchema, close: () => void) => {
    dispatch(setProfileData({ key: PROFILE_SECTIONS.BASICS, value: data }));
    dispatch(setProfileStep(2));
    close();
  };

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
  };
};
