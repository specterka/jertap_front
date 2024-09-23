"use client";

import { useAuth, useMetaData } from "@/hooks";
import { PATH_BUSINESS } from "@/routes/paths";
import { API_ROUTER } from "@/services/apiRouter";
import { LoginMain } from "@/styles/auth.style";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button } from "react-bootstrap";
import { ACL, Loader, RestaurantCard } from "@/components";
import { USER_TYPES } from "@/constants/keywords";
import { useTranslate } from "@/locales";

const settings = {
  dots: false,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const BusinessList = () => {
  // Hooks
  const [businesses, isFetching, fetchBusinesses] = useMetaData(
    API_ROUTER.GET_OWNER_RESTAURANTS
  );
  const { t } = useTranslate();

  const { push } = useRouter();
  const { user } = useAuth();

  // Renders
  const renderActionButton = useMemo(() => {
    return (
      <div className="add-branch-button">
        <ACL
          accessibleRoles={[USER_TYPES.BUSINESS_OWNER]}
          currentRole={user?.role}
        >
          <Button
            className="common-btn"
            onClick={() => push(PATH_BUSINESS.business.claim)}
          >
            {t("dashboard.business.list.button.add_branch")}
          </Button>
        </ACL>
        <Button className="common-btn" onClick={() => fetchBusinesses()}>
          {t("dashboard.business.list.button.refresh")}
        </Button>
      </div>
    );
  }, [fetchBusinesses, push, PATH_BUSINESS]);

  return (
    <LoginMain>
      <div
        className={`add-select-branch ${
          businesses && businesses?.length > 0 ? "add-select-branch-slider" : ""
        }`}
      >
        <div className="add-select-branch-inner">
          {isFetching ? (
            <div className="d-flex justify-content-center align-items-center p-5">
              <Loader />
            </div>
          ) : businesses && businesses?.length > 0 ? (
            <>
              <h2>{t("dashboard.business.list.greetings.heading_1")}</h2>
              <div className="slick-slider-block">
                <Slider {...settings}>
                  {businesses?.map((business) => (
                    <RestaurantCard business={business} key={business?.id} />
                  ))}
                </Slider>
              </div>
            </>
          ) : (
            <>
              <h2>{t("dashboard.business.list.greetings.heading_2")}</h2>
              <p>{t("dashboard.business.list.greetings.description")}</p>
            </>
          )}
          {renderActionButton}
        </div>
      </div>
    </LoginMain>
  );
};

export default BusinessList;
