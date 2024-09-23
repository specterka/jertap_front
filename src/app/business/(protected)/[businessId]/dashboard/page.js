"use client";

import { useMemo, useState } from "react";
import { useAuth, useMetaData } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import { BussenessDetail } from "@/styles/dashboard-index.style";
import React from "react";
import { Row, Col } from "react-bootstrap";

import {
  BusinessDashboardCategoryCountIcon,
  BusinessDashboardMenuItemCountIcon,
} from "@/assets/svgs";

import BusinessCountCard from "@/components/dashboard/business/BusinessCountCard";
import dynamic from "next/dynamic";
import AddBusinessCategory from "@/components/dashboard/business/AddBusinessCategory";
import { AddUpdateMenuModal, Loader } from "@/components";
import { useParams } from "next/navigation";
import Link from "next/link";
import { PATH_BUSINESS } from "@/routes/paths";
import { TOAST_ALERTS, TOAST_TYPES, USER_TYPES } from "@/constants/keywords";
import { useToaster } from "@/hooks";
import { axiosPatch } from "@/services/axiosHelper";
import { useTranslate } from "@/locales";

const BusinessReviewsGraph = dynamic(
  () =>
    import(
      "../../../../../components/dashboard/business/BusinessRatingReviewGraph"
    ),
  {
    ssr: false,
    loading: "Loading...",
  }
);

const BUSINESS_STATUS = [
  {
    label: "Open",
    value: true,
  },
  {
    label: "Close",
    value: false,
  },
];

const BusinessDashboard = () => {
  // States
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
  const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);

  // Hooks
  const { t } = useTranslate();
  const { businessId } = useParams();
  const { toaster } = useToaster();

  const [categoryCounts, isCountLoading, fetchCounts] = useMetaData(
    API_ROUTER.GET_BUSINESS_CATEGORY_COUNT(businessId)
  );
  const [businessDetails, isFetching, fetchBusinessDetail] = useMetaData(
    API_ROUTER.GET_PROFILE_BASIC_DETAILS(businessId)
  );

  const { user } = useAuth();

  const onAddedCategory = async () => {
    await fetchCounts();
  };

  const onAddCategory = () => setIsAddCategoryOpen(true);

  const onAddMenu = () => {
    setIsAddMenuOpen(true);
  };

  const COUNT_ITEMS = useMemo(() => {
    return [
      {
        icon: <BusinessDashboardCategoryCountIcon />,
        title: "Category Count",
        dataCount: categoryCounts?.category_count || 0,
        actionHandler: onAddCategory,
      },
      {
        icon: <BusinessDashboardMenuItemCountIcon />,
        title: "Menu Item Count",
        dataCount: categoryCounts?.menu_item_count || 0,
        actionHandler: onAddMenu,
      },
    ];
  }, [onAddCategory, categoryCounts, onAddMenu]);

  // Render Methods
  const renderAddUpdateCategory = useMemo(
    () => (
      <AddBusinessCategory
        isOpen={isAddCategoryOpen}
        onClose={() => setIsAddCategoryOpen(false)}
        onAddedCategory={onAddedCategory}
      />
    ),
    [isAddCategoryOpen, onAddedCategory]
  );

  const renderAddMenu = useMemo(
    () => (
      <AddUpdateMenuModal
        isOpen={isAddMenuOpen}
        onClose={() => setIsAddMenuOpen(false)}
        fetchData={onAddedCategory}
      />
    ),
    [isAddMenuOpen, setIsAddMenuOpen, onAddedCategory]
  );

  const onChangeStatus = async () => {
    try {
      const res = await axiosPatch(
        API_ROUTER.UPDATE_BASIC_DETAILS(businessId),
        { is_disabled: !businessDetails.is_disabled }
      );

      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(
          TOAST_ALERTS.BUSINESS_STATUS_UPDATE_SUCCESS,
          TOAST_TYPES.SUCCESS
        );
        await fetchBusinessDetail();
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  const renderBusinessStatus = useMemo(
    () => (
      <div className="switch-block-dashboard-inner">
        {BUSINESS_STATUS.map((status) => (
          <button
            className={
              businessDetails?.is_disabled === status.value ? "" : "active"
            }
            key={status.value}
            onClick={() =>
              businessDetails?.is_disabled === status.value
                ? onChangeStatus()
                : null
            }
          >
            {status.label}
          </button>
        ))}
      </div>
    ),
    [businessDetails]
  );

  if (isCountLoading || isFetching) return <Loader isFullScreen />;

  return (
    <>
      <BussenessDetail>
        <div className="jt-tital">
          <h1>{t("dashboard.business.dashboard.greetings.heading")} </h1>
          <div className="switch-block-dashboard">
            {renderBusinessStatus}
            {[USER_TYPES.BUSINESS_OWNER].includes(user?.role) ? (
              <Link href={PATH_BUSINESS.business.root} className="common-btn">
                {t("dashboard.business.dashboard.links.switch_business")}
              </Link>
            ) : null}
          </div>
        </div>
        <Row>
          {COUNT_ITEMS?.map((item, index) => (
            <BusinessCountCard {...item} key={index} />
          ))}
        </Row>
        <Row>
          <Col lg="6">
            <div className="switch-block"></div>
          </Col>
        </Row>
        <div className="jt-graf">
          <h4>{t("dashboard.business.dashboard.cards.graph.heading")}</h4>
          <div className="jt-graf-main">
            <BusinessReviewsGraph />
          </div>
        </div>
      </BussenessDetail>
      {renderAddUpdateCategory}
      {renderAddMenu}
    </>
  );
};

export default BusinessDashboard;
