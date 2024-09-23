"use client";

import React from "react";
import { useTranslate } from "@/locales";
import { ProfileDetail } from "@/styles/profile.style";
import AdsRequestForm from "../ads-request-form";

const AdvertisementView = () => {
  // Hooks
  const { t } = useTranslate();

  return (
    <div className="profile-tabs-block">
      <ProfileDetail>
        <h1>{t("dashboard.business.advertisement.heading")}</h1>
        <div className="profile-block-common">
          <div className="profile-block-common-inner">
            <AdsRequestForm />
          </div>
        </div>
      </ProfileDetail>
    </div>
  );
};

export default AdvertisementView;
