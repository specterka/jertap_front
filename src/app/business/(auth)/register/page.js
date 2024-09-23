"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";

import { Logo } from "@/assets/svgs";
import { useAuth } from "@/hooks";
import { LoginMain } from "@/styles/auth.style";
import { PATH_BUSINESS, PATH_DASHBOARD } from "@/routes/paths";
import { USER_TYPES } from "@/constants/keywords";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { Loader } from "@/components";
import { useTranslate } from "@/locales";
import { decodeData } from "@/utils/jwt";

const BusinessRegisterPage = () => {
  // States
  const [currentTab, onChangeTab] = useState(0);
  const [userDetails, setUserDetails] = useState(null);

  // Hooks
  const { isLoading } = useAuth();
  const { replace } = useRouter();
  const { t } = useTranslate();
  const params = useSearchParams();

  // Handlers
  const onRegister = () => {
    onChangeTab(currentTab + 1);
  };

  const onVerifySuccess = () => {
    onChangeTab(0);
    replace(PATH_BUSINESS.business.root);
  };

  // Render Methods
  const renderCurrentTabForm = useMemo(() => {
    switch (currentTab) {
      case 0:
        return (
          <RegisterForm
            type={USER_TYPES.BUSINESS_OWNER}
            onSuccessRegister={onRegister}
            setUserDetails={setUserDetails}
            user={{
              email: params.get("email") ? decodeData(params.get("email")) : "",
            }}
          />
        );
      case 1:
        return (
          <OtpVerificationForm
            onVerifySuccess={onVerifySuccess}
            userDetails={userDetails}
            type={USER_TYPES.BUSINESS_OWNER}
            setUserDetails={setUserDetails}
          />
        );

      default:
        return null;
    }
  }, [
    currentTab,
    onChangeTab,
    onRegister,
    onVerifySuccess,
    t,
    params,
    decodeData,
  ]);

  const renderAuthInfoSection = useMemo(() => {
    switch (currentTab) {
      case 0:
        return (
          <AuthInfoSection
            mainHeading={t("auth.business.register.greetings.heading")}
            description={t("auth.business.register.greetings.description")}
          />
        );
      case 1:
        return (
          <AuthInfoSection
            mainHeading={t("auth.business.register.greetings.heading")}
            description={t("auth.business.register.greetings.description")}
          />
        );
    }
  }, [currentTab, t]);

  if (isLoading) return <Loader isFullScreen />;

  return (
    <LoginMain>
      {renderAuthInfoSection}
      <div className="login-right">
        <div className="login-right-inner">
          <div className="login-right-inner-link">
            <Link href={PATH_DASHBOARD.root}>
              <Logo />
            </Link>
            {renderCurrentTabForm}
          </div>
        </div>
      </div>
    </LoginMain>
  );
};

export default BusinessRegisterPage;

const AuthInfoSection = dynamic(
  () => import("../../../../components/auth/AuthInfoSection"),
  {
    ssr: false,
  }
);

const OtpVerificationForm = dynamic(
  () => import("../../../../components/auth/OtpVerificationForm"),
  {
    ssr: false,
  }
);

const RegisterForm = dynamic(
  () => import("../../../../components/auth/RegisterForm"),
  { ssr: false }
);
