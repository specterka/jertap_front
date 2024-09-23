"use client";

import { Logo } from "@/assets/svgs";
import {
  ACL,
  AddressDetailForm,
  AuthInfoSection,
  BasicDetailForm,
  ServicesAndAmenitiesForm,
  Stepper,
} from "@/components";
import { TOAST_ALERTS, TOAST_TYPES, USER_TYPES } from "@/constants/keywords";
import { useAuth, useTabs, useToaster } from "@/hooks";
import { PATH_BUSINESS, PATH_DASHBOARD } from "@/routes/paths";
import { API_ROUTER } from "@/services/apiRouter";
import { axiosPost } from "@/services/axiosHelper";
import { LoginMain } from "@/styles/auth.style";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import { useTranslate } from "@/locales";

const BUSINESS_STEPS = [
  {
    id: 1,
    label: (
      <>
        Basic<br></br> Detail
      </>
    ),
  },
  {
    id: 2,
    label: (
      <>
        Address<br></br> Detail
      </>
    ),
  },
  {
    id: 3,
    label: (
      <>
        Service &<br></br> Amenities
      </>
    ),
  },
];

const AddBusiness = () => {
  // States
  const [businessDetails, setBusinessDetails] = useState({});
  const [coveredSteps, setCoveredSteps] = useState([1]);

  // Hooks
  const { t } = useTranslate();
  const { currentTab, onChangeTab } = useTabs(1);
  const { toaster } = useToaster();
  const { replace } = useRouter();
  const { user } = useAuth();

  // Handles

  const addBusiness = async (formData) => {
    try {
      const payload = new FormData();
      Object.keys(formData).map((key) => {
        payload.append(
          key,
          key === "profile_image" ? formData.profile_image[0] : formData[key]
        );
      });
      const res = await axiosPost(
        API_ROUTER.CREATE_BUSINESS,
        payload,
        "multipart/form-data"
      );
      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }

      if (res.status) {
        toaster(TOAST_ALERTS.BUSINESS_CREATE_SUCCESS, TOAST_TYPES.SUCCESS, {
          position: "top-center",
        });
        setBusinessDetails(null);
        onChangeTab(1);
        replace(PATH_BUSINESS.business.root);
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  const onSave = (formData) => {
    setBusinessDetails((prev) => ({ ...prev, ...formData }));
    if (currentTab === 3) {
      return addBusiness({ ...businessDetails, ...formData });
    }
    if (currentTab < 3) {
      if (currentTab > 1) setCoveredSteps((prev) => [...prev, currentTab]);
      onChangeTab(currentTab + 1);
    }
  };

  // Render Methods
  const renderCurrentTab = useMemo(() => {
    switch (currentTab) {
      case 1:
        return (
          <BasicDetailForm onSave={onSave} businessDetails={businessDetails} />
        );
      case 2:
        return (
          <AddressDetailForm
            onSave={onSave}
            businessDetails={businessDetails}
          />
        );
      case 3:
        return (
          <ServicesAndAmenitiesForm
            onSave={onSave}
            businessDetails={businessDetails}
            setBusinessDetails={setBusinessDetails}
          />
        );

      default:
        return null;
    }
  }, [currentTab, onSave, businessDetails, setBusinessDetails]);

  const renderCurrentAuthSection = useMemo(() => {
    switch (currentTab) {
      case 1:
        return (
          <AuthInfoSection
            mainHeading={t("dashboard.business.basic_detail.greetings.heading")}
            description={t(
              "dashboard.business.basic_detail.greetings.description"
            )}
          />
        );
      case 2:
        return (
          <AuthInfoSection
            mainHeading={t(
              "dashboard.business.address_detail.greetings.heading"
            )}
            description={t(
              "dashboard.business.address_detail.greetings.description"
            )}
          />
        );
      case 3:
        return (
          <AuthInfoSection
            mainHeading={t(
              "dashboard.business.services_and_amenities.greetings.heading"
            )}
            description={t(
              "dashboard.business.services_and_amenities.greetings.description"
            )}
          />
        );
      default:
        return null;
    }
  }, [currentTab]);

  return (
    <ACL accessibleRoles={[USER_TYPES.BUSINESS_OWNER]} currentRole={user?.role}>
      <LoginMain className="deatails-step-block">
        {renderCurrentAuthSection}
        <div className="login-right">
          <div className="login-right-inner">
            <div className="login-right-inner-link">
              <Link href={PATH_DASHBOARD.root}>
                <Logo />
              </Link>
            </div>
            <div className="step-block-points">
              <Stepper
                steps={BUSINESS_STEPS}
                activeStep={currentTab}
                onChange={(step) => onChangeTab(step)}
                coveredSteps={coveredSteps}
              />
              <div className="login-right-inner-link">{renderCurrentTab}</div>
            </div>
          </div>
        </div>
      </LoginMain>
    </ACL>
  );
};

export default AddBusiness;
