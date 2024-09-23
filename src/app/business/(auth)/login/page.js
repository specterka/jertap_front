"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import { Logo } from "@/assets/svgs";
import { LoginMain } from "@/styles/auth.style";
import { USER_TYPES } from "@/constants/keywords";
import { PATH_BUSINESS, PATH_DASHBOARD } from "@/routes/paths";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useTranslate } from "@/locales";

const BusinessLoginPage = () => {
  // States
  const [currentTab, onChangeTab] = useState(0);
  const [userDetails, setUserDetails] = useState(null);

  // Hooks
  const { replace } = useRouter();
  const { t } = useTranslate();

  // Handlers
  const onLogin = () => {
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
          <>
            <LoginForm
              type={USER_TYPES.BUSINESS_OWNER}
              onSuccessLogin={onLogin}
              setUserDetails={setUserDetails}
            />
          </>
        );
      case 1:
        return (
          <>
            <OtpVerificationForm
              onVerifySuccess={onVerifySuccess}
              userDetails={userDetails}
              type={USER_TYPES.BUSINESS_OWNER}
              setUserDetails={setUserDetails}
            />
          </>
        );
      default:
        return null;
    }
  }, [currentTab, onChangeTab, onLogin, onVerifySuccess, USER_TYPES]);

  const renderAuthInfoSection = useMemo(() => {
    switch (currentTab) {
      case 0:
        return (
          <AuthInfoSection
            mainHeading={t("auth.business.login.greetings.heading")}
            description={t("auth.business.login.greetings.description")}
          />
        );
      case 1:
        return (
          <AuthInfoSection
            mainHeading={t("auth.business.login.greetings.heading")}
            description={t("auth.business.login.greetings.description")}
          />
        );
    }
  }, [currentTab, t]);

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

export default BusinessLoginPage;

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

const LoginForm = dynamic(
  () => import("../../../../sections/auth/login/LoginForm"),
  { ssr: false }
);
