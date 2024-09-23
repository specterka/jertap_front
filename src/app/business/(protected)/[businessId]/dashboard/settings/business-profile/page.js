"use client";

import { useTranslate } from "@/locales";
import BusinessProfileTabSection from "@/sections/dashboard/settings/business-profile/BusinessProfileTabSection";
import { ProfileDetail } from "@/styles/profile.style";

const BusinessProfile = () => {
  // Hooks
  const { t } = useTranslate();
  return (
    <ProfileDetail>
      <h1>{t("dashboard.business.settings.businessProfile.pageTitle")}</h1>
      <BusinessProfileTabSection />
    </ProfileDetail>
  );
};

export default BusinessProfile;
