"use client";

import {
  Button,
  CheckboxField,
  PasswordField,
  TextField,
} from "@aws-amplify/ui-react";
import Image from "next/image";
import React from "react";

const LoginPage: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center relative bg-white">
      {/* Left Section - Login Form */}
      <section className="flex flex-col w-2/5 max-w-[37.5rem] justify-center gap-4 px-[60px] py-4 self-stretch items-center relative">
        <Image
          className="w-[60.98px] h-[52.95px]"
          alt="Union Logo"
          src={"/img/union.svg"}
          width={61}
          height={53}
        />

        <h1 className="text-[#0d1a26] text-[32px] font-bold text-center leading-[48px]">
          Welcome back!
        </h1>

        <TextField
          label="Email"
          labelHidden={false}
          size="small"
          className="w-full"
        />
        <PasswordField label="Password" className="w-full" />

        <div className="flex justify-between w-full items-center">
          <CheckboxField
            label="Remember me"
            labelPosition="end"
            name="Keep session"
          />
          <Button size="small" variation="link">
            Forgot password
          </Button>
        </div>

        <Button size="small" variation="primary" className="w-full">
          Sign in
        </Button>

        <div className="flex flex-col items-center gap-2 w-full">
          <p className="text-colorsfontprimary text-base">
            Don&apos;t have an account?
          </p>
          <Button size="small" variation="link">
            Sign up
          </Button>
        </div>
      </section>

      {/* Right Section - Testimonial */}
      <section className="flex flex-col justify-center h-lvh gap-12 p-[60px] flex-1 bg-colorsbrandprimary-90 items-center">
        <blockquote className="text-colorsbrandprimary-10 text-[40px] font-semibold text-center leading-[60px]">
          We&apos;ve been using Amplify UI and it changed our lives!
        </blockquote>

        <div className="flex flex-col items-center gap-6">
          <Image
            className="w-24 h-24 object-cover rounded-full"
            alt="User Testimonial"
            src={"/img/user-testimonial.png"}
            width={96}
            height={96}
          />

          <div className="text-center">
            <p className="text-white text-xl font-semibold">Wesley Peck</p>
            <p className="text-white text-xl">Product Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
