import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { basicsSchema, BasicsSchema } from '@/lib/schemas';
import { RootState } from '@/store/store';
import { setSmartProfileData, setSmartProfileStep } from '@/store/features/smartProfileSlice';
import { PROFILE_SECTIONS } from '@/common/consts';
import { useUpsertSmartProfileMutation } from '@/store/services/api/smartProfile';


export const useStep1Modal = (isOpen: boolean) => {
  const dispatch = useDispatch();
  const { basics } = useSelector((state: RootState) => state.smartProfile);
  const [upsertSmartProfile, { isLoading: isUpserting }] = useUpsertSmartProfileMutation();

  const { control, handleSubmit, reset, formState: { errors } } = useForm<BasicsSchema>({
    resolver: zodResolver(basicsSchema),
    defaultValues: basics,
  });

  useEffect(() => {
    if (!isOpen) {
      reset(basics);
    }
  }, [isOpen, reset, basics]);

  const onSubmit = async (data: BasicsSchema, close: () => void) => {
    await upsertSmartProfile({ ...data, section: PROFILE_SECTIONS.BASICS });
    dispatch(setSmartProfileData({ key: PROFILE_SECTIONS.BASICS, value: data }));
    dispatch(setSmartProfileStep(2));
    close();
  };

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    isUpserting,
  };
};
