/** @format */
"use client";
import Link from "next/link";
import React from "react";
import { LoginMain } from "../../../styles/auth.style";
import { Logo } from "@/assets/svgs";
import { useAuth } from "@/hooks";
import { USER_TYPES } from "@/constants/keywords";
import dynamic from "next/dynamic";
import { GoogleButton, Loader } from "@/components";

const RegisterPage = () => {
  // Hooks
  const { isLoading } = useAuth();

  if (isLoading) return <Loader isFullScreen />;

  return (
    <LoginMain>
      <AuthInfoSection
        mainHeading="Welcome to Jertap!"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        isSocialLogin
      />
      <div className="login-right">
        <div className="login-right-inner">
          <div className="login-right-inner-link">
            <Link href={""}>
              <Logo />
            </Link>
            <RegisterForm type={USER_TYPES.VISITOR} />
            <div className="social-login-btn">
              <GoogleButton />
            </div>
          </div>
        </div>
      </div>
    </LoginMain>
  );
};

export default RegisterPage;

const RegisterForm = dynamic(
  () => import("../../../components/auth/RegisterForm"),
  {
    ssr: false,
  }
);

const AuthInfoSection = dynamic(
  () => import("../../../components/auth/AuthInfoSection"),
  {
    ssr: false,
  }
);
