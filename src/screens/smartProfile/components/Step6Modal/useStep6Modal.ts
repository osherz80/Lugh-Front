import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactSchema } from '@/lib/schemas';
import { RootState } from '@/store/store';
import { setSmartProfileSectionKey, setSmartProfileStep } from '@/store/features/smartProfileSlice';
import { PROFILE_SECTIONS } from '@/common/consts';
import { useUpsertSmartProfileMutation } from '@/store/services/api/smartProfile';
import { Contact } from '@/store/types/smartProfile';

export const useStep6Modal = (isOpen: boolean) => {
  const dispatch = useDispatch();
  const contact = useSelector((state: RootState) => state.smartProfile.contact);

  const [upsertSmartProfile, { isLoading: isUpserting }] = useUpsertSmartProfileMutation();
  const { control, handleSubmit, reset, formState: { errors } } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: contact,
  });

  useEffect(() => {
    if (!isOpen) {
      reset(contact);
    }
  }, [isOpen, reset, contact]);

  const onSubmit = async (stepData: Contact, close: () => void) => {
    await upsertSmartProfile({ stepData, section: PROFILE_SECTIONS.CONTACT });
    dispatch(setSmartProfileSectionKey({ key: PROFILE_SECTIONS.CONTACT, value: stepData }));
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
