import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { basicsSchema, BasicsSchema } from '@/lib/schemas';
import { RootState } from '@/store/store';
import { setProfileData, setProfileStep } from '@/store/features/smartProfileSlice';
import { PROFILE_SECTIONS } from '@/common/consts';

export const useStep1Modal = (isOpen: boolean) => {
  const dispatch = useDispatch();
  const basics = useSelector((state: RootState) => state.smartProfile.basics);

  const { control, handleSubmit, reset, formState: { errors } } = useForm<BasicsSchema>({
    resolver: zodResolver(basicsSchema),
    defaultValues: basics,
  });

  useEffect(() => {
    if (!isOpen) {
      reset(basics);
    }
  }, [isOpen, reset, basics]);

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
