"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRegisterMutation, useLoginMutation } from "@/store/services/api";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { setAuthSuccess } from "@/store/features/authSlice";
import { UserRes } from "@/app/common/types/general";

const registrationSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  confirmPassword: z.string().optional(),
}).refine((data) => !data.confirmPassword || data.confirmPassword === data.password, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;

export const useRegistrationForm = (isLogin: boolean) => {
  const [registerMutation] = useRegisterMutation();
  const [loginMutation] = useLoginMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.app.mode);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: RegistrationFormData) => {
    try {
      let response: UserRes;
      if (isLogin) {
        response = await loginMutation({
          email: data.email,
          password: data.password,
        }).unwrap();
      } else {
        response = await registerMutation({
          email: data.email,
          password: data.password,
        }).unwrap();
      }

      const { user, isAuth } = response;
      console.log(user, isAuth);
      dispatch(setAuthSuccess({ user, isAuth }));

      router.push(`/${mode}`);
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
  };
};
