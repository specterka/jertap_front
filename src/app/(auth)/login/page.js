"use client";

import Link from "next/link";
import React from "react";
import { LoginMain } from "../../../styles/auth.style";
import { Logo } from "@/assets/svgs";
import { useAuth } from "@/hooks";
import { USER_TYPES } from "@/constants/keywords";
import { PATH_DASHBOARD } from "@/routes/paths";
import dynamic from "next/dynamic";
import { ConfirmationDialog, GoogleButton, Loader } from "@/components";

const LoginPage = () => {
  // Hooks
  const { isLoading } = useAuth();

  if (isLoading) return <Loader isFullScreen />;

  return (
    <>
      <LoginMain>
        <AuthInfoSection
          mainHeading="Welcome Back !"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
          isSocialLogin
        />
        <div className="login-right">
          <div className="login-right-inner">
            <div className="login-right-inner-link">
              <Link href={PATH_DASHBOARD.root}>
                <Logo />
              </Link>
              <LoginForm type={USER_TYPES.VISITOR} />
              <div className="social-login-btn">
                <GoogleButton />
              </div>
            </div>
          </div>
        </div>
      </LoginMain>
      <ConfirmationDialog />
    </>
  );
};

export default LoginPage;

const LoginForm = dynamic(
  () => import("../../../sections/auth/login/LoginForm"),
  { ssr: false }
);

const AuthInfoSection = dynamic(
  () => import("../../../components/auth/AuthInfoSection"),
  {
    ssr: false,
  }
);
