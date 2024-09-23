"use client";

import Link from "next/link";
import React, { useState } from "react";
import { LoginMain } from "../../../styles/auth.style";
import "bootstrap/dist/css/bootstrap.min.css";
import { Logo } from "@/assets/svgs";
import { PATH_DASHBOARD } from "@/routes/paths";
import dynamic from "next/dynamic";
import { GoogleButton } from "@/components";

const ForgotPage = () => {
  // States
  const [code, setCode] = useState(null);

  return (
    <LoginMain>
      <AuthInfoSection
        mainHeading={`${code ? "Reset" : "Forgot"} Password`}
        description={
          code
            ? `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.`
            : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        }
      />

      <div className="login-right">
        <div className="login-right-inner">
          <div className="login-right-inner-link">
            <Link href={PATH_DASHBOARD.root}>
              <Logo />
            </Link>
            <h2>{`${code ? "Reset" : "Forgot"} Password`}</h2>
            {code ? (
              <ResetPasswordForm setCode={setCode} />
            ) : (
              <ForgotPasswordForm setCode={setCode} />
            )}
          </div>
        </div>
      </div>
    </LoginMain>
  );
};

export default ForgotPage;

const AuthInfoSection = dynamic(
  () => import("../../../components/auth/AuthInfoSection"),
  {
    ssr: false,
  }
);

const ResetPasswordForm = dynamic(
  () => import("../../../components/auth/ResetPasswordForm"),
  {
    ssr: false,
  }
);

const ForgotPasswordForm = dynamic(
  () => import("../../../components/auth/ForgotPasswordForm"),
  {
    ssr: false,
  }
);
