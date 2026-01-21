"use client";

import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/InputField";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      console.log("Sign in", data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1>Welcome back</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-5">
        <InputField
          name="email"
          label="email"
          placeholder="contact@email.com"
          register={register}
          error={errors.email}
          validation={{ required: "Email is required" }}
        />

        <InputField
          name="password"
          label="Password"
          placeholder="Enter your password"
          register={register}
          error={errors.password}
          validation={{ required: "password is required" }}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5 ">
          {isSubmitting ? "Singing In" : "Sign In"}
        </Button>

        <FooterLink
          text="Don't have an account?"
          linkText="Create an account"
          href="/sign-up"
        />
      </form>
    </>
  );
};

export default SignIn;
