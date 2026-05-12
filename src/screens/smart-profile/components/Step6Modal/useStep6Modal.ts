import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactSchema } from '@/lib/schemas';
import { RootState } from '@/store/store';
import { setProfileData } from '@/store/features/smartProfileSlice';
import { PROFILE_SECTIONS } from '@/common/consts';

export const useStep6Modal = (isOpen: boolean) => {
  const dispatch = useDispatch();
  const contact = useSelector((state: RootState) => state.smartProfile.contact);

  const { control, handleSubmit, reset, formState: { errors } } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: contact,
  });

  useEffect(() => {
    if (!isOpen) {
      reset(contact);
    }
  }, [isOpen, reset, contact]);

  const onSubmit = (data: ContactSchema, close: () => void) => {
    dispatch(setProfileData({ key: PROFILE_SECTIONS.CONTACT, value: data }));
    // Final step logic - usually closing or navigating to result
    close();
  };

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
  };
};
