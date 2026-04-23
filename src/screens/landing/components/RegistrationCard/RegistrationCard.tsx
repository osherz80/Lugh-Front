"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRegistrationForm } from "./useRegistrationForm";
import { Input } from "@/components/shared/Input/Input";
import { Button } from "@/components/shared/Button/Button";
import { Divider } from "@/components/shared/Divider/Divider";
import { BrandIcon } from "@/components/shared/Icon/BrandIcon";
import { faGoogle, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useAppSelector } from "@/store/hooks";
import { useGoogleLogin } from "@/hooks/useGoogleLogin";

export const RegistrationCard = () => {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();
  const mode = useAppSelector((state) => state.app.mode);
  const { register, handleSubmit, errors, isSubmitting } = useRegistrationForm();
  const { loginWithGoogle, isLoading } = useGoogleLogin();

  const handleGoogleLogin = () => {
    loginWithGoogle();
  };

  return (
    <div className="w-full max-w-md bg-surface-lowest rounded-2xl shadow-lugh-blur px-10 py-8 flex flex-col gap-6 relative z-10 transition-all">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-zinc-900 tracking-[-0.04rem]">
          {isLogin ? "Welcome back" : "Create your workspace"}
        </h2>
        <p className="text-sm text-zinc-600">
          {isLogin ? "Access your elite talent network." : "Start building your elite talent network today."}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Input
          label="Work Email"
          type="email"
          placeholder="name@company.com"
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          error={errors.password?.message}
          {...register("password")}
        />
        {!isLogin && (
          <Input
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            error={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />
        )}

        {/* Toggle between login and signup */}
        <p className="text-sm text-zinc-600 px-1">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="underline font-medium text-zinc-900 hover:text-brand transition-colors cursor-pointer"
          >
            {isLogin ? "Sign up" : "Log in"}
          </button>
        </p>

        <div className="pt-2">
          <Button type="submit" variant="primary" fullWidth isLoading={isSubmitting}>
            {isSubmitting ? "Matching..." : (isLogin ? "Sign In" : "Start Matching")}
          </Button>
        </div>
      </form>

      {/* Social Login Separator */}
      <Divider label="Or continue with" />

      {/* Social Login Buttons */}
      <div className="flex gap-4">
        <Button
          variant="social"
          fullWidth
          aria-label="Continue with Google"
          onPress={handleGoogleLogin}
          isLoading={isLoading}
        >
          <BrandIcon icon={faGoogle} className="text-zinc-600 opacity-70" />
        </Button>
        <Button variant="social" fullWidth aria-label="Continue with LinkedIn">
          <BrandIcon icon={faLinkedinIn} className="text-[#0077B5]" />
        </Button>
        <Button variant="social" fullWidth aria-label="Continue with GitHub">
          <BrandIcon icon={faGithub} className="text-zinc-900" />
        </Button>
      </div>

      {/* Footer Micro-copy */}
      {!isLogin && (
        <p className="text-center text-xs text-zinc-500 pt-1">
          By joining, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
        </p>
      )}
    </div>
  );
};
