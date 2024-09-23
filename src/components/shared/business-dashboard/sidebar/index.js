import { useSettings } from "@/hooks";
import { SideBarDetail } from "@/styles/sidebar.style";
import React, { useMemo } from "react";
import SidebarHeader from "./SidebarHeader";
import NavBar from "./NavBar";
import { PATH_BUSINESS } from "@/routes/paths";
import {
  SideBarAdvertisementIcon,
  SideBarCollaborationIcon,
  SideBarDashboardIcon,
  SideBarListingIcon,
  SideBarQaIcon,
  SideBarSettingsIcon,
  SideBarUserReviewIcon,
  SideBarPromotionIcon,
  SidebarEventIcon1,
} from "@/assets/svgs";
import { useTranslate } from "@/locales";

const BusinessDashboardSidebar = ({ businessId }) => {
  // Hooks
  const { isSideNavigationOpen } = useSettings();
  const { t } = useTranslate();

  const NAV_ITEMS = useMemo(
    () => [
      {
        id: "dashboard",
        label: t("dashboard.business.sidebar.menus.dashboard"),
        path: PATH_BUSINESS.dashboard(businessId),
        icon: <SideBarDashboardIcon />,
      },
      {
        id: "listings",
        label: t("dashboard.business.sidebar.menus.listings"),
        path: PATH_BUSINESS.listings(businessId),
        icon: <SideBarListingIcon />,
      },
      {
        id: "reviews",
        label: t("dashboard.business.sidebar.menus.userReviews"),
        path: PATH_BUSINESS.reviews.root(businessId),
        icon: <SideBarUserReviewIcon />,
      },
      {
        id: "advertisement",
        label: t("dashboard.business.sidebar.menus.advertisement"),
        path: PATH_BUSINESS.advertisement.root(businessId),
        icon: <SideBarAdvertisementIcon className="blue-icon" />,
      },
      {
        id: "collaboration",
        label: t("dashboard.business.sidebar.menus.collaboration"),
        path: PATH_BUSINESS.collaborations(businessId),
        icon: <SideBarCollaborationIcon className="blue-icon" />,
      },
      {
        id: "promotions",
        label: t("dashboard.business.sidebar.menus.promotions"),
        path: PATH_BUSINESS.promotions.root(businessId),
        icon: <SideBarPromotionIcon />,
      },
      {
        id: "events",
        label: t("dashboard.business.sidebar.menus.events"),
        path: PATH_BUSINESS.events.root(businessId),
        icon: <SidebarEventIcon1 className="blue-icon" />,
      },
      {
        id: "qapage",
        label: t("dashboard.business.sidebar.menus.qapage"),
        path: PATH_BUSINESS.qapage.root(businessId),
        icon: <SideBarQaIcon />,
      },
      {
        id: "settings",
        label: t("dashboard.business.sidebar.menus.settings"),
        path: PATH_BUSINESS.settings.root(businessId),
        icon: <SideBarSettingsIcon className="blue-icon" />,
        isSubMenu: true,
        children: [
          {
            id: "profile",
            label: t("dashboard.business.sidebar.menus.profile"),
            path: PATH_BUSINESS.settings.profile(businessId),
          },
          {
            id: "businessProfile",
            label: t("dashboard.business.sidebar.menus.businessProfile"),
            path: PATH_BUSINESS.settings.businessProfile(businessId),
          },
        ],
      },
    ],
    [t]
  );

  return (
    <SideBarDetail
      className={isSideNavigationOpen ? "side-open" : "side-close"}
    >
      <SidebarHeader />
      <div className="sidebar-menu">
        {isSideNavigationOpen ? (
          <h6 className={isSideNavigationOpen ? "side-close" : "side-close"}>
            {t("dashboard.business.sidebar.menuTitle")}
          </h6>
        ) : null}
        <NavBar navItems={NAV_ITEMS} />
      </div>
    </SideBarDetail>
  );
};

export default BusinessDashboardSidebar;
