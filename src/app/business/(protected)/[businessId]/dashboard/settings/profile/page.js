"use client";

import { useTranslate } from "@/locales";
import ProfileTabSection from "@/sections/dashboard/settings/profile/ProfileTabSection";
import { ProfileDetail } from "@/styles/profile.style";

const Profile = () => {
  const { t } = useTranslate();

  return (
    <ProfileDetail>
      <h1>{t("dashboard.business.settings.profile.pageTitle")}</h1>
      <ProfileTabSection />
    </ProfileDetail>
  );
};

export default Profile;
