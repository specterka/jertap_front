import React, { useMemo, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import BasicSection from "./BasicSection";
import AmenitiesServiceSection from "./AmenitiesServiceSection";
import AddressSection from "./AddressSection";
import ManagerSection from "./ManagerSection";
import {
  AddressIcon,
  AmenitiesServiceIcon,
  BasicDetailIcon,
  ManagerIcon,
  ResturantDetailIcon,
} from "@/assets/svgs";
import RestaurantTimingSection from "./RestaurantTimingSection";
import { useAuth } from "@/hooks";
import { USER_TYPES } from "@/constants/keywords";
import { useTranslate } from "@/locales";
import CuisinesSection from "./CuisinesSection";
import PaymentModesSection from "./PaymentModesSection";

const BusinessProfileTabSection = () => {
  // States
  const [activeSection, setActiveSection] = useState(0);

  // Hooks
  const { user } = useAuth();
  const { t } = useTranslate();

  const TABS = useMemo(
    () =>
      [
        {
          id: 0,
          icon: <BasicDetailIcon />,
          title: t(
            "dashboard.business.settings.businessProfile.tabs.basicDetails.label"
          ),
          content: <BasicSection />,
          roles: [USER_TYPES.BUSINESS_OWNER, USER_TYPES.RESTAURANT_MANAGER],
        },
        {
          id: 2,
          icon: <AmenitiesServiceIcon />,
          title: t(
            "dashboard.business.settings.businessProfile.tabs.amenitiesServices.label"
          ),
          content: <AmenitiesServiceSection />,
          roles: [USER_TYPES.BUSINESS_OWNER, USER_TYPES.RESTAURANT_MANAGER],
        },
        {
          id: 6,
          icon: <AmenitiesServiceIcon />,
          title: t(
            "dashboard.business.settings.businessProfile.tabs.cuisines.label"
          ),
          content: <CuisinesSection />,
          roles: [USER_TYPES.BUSINESS_OWNER, USER_TYPES.RESTAURANT_MANAGER],
        },
        {
          id: 7,
          icon: <AddressIcon />,
          title: t(
            "dashboard.business.settings.businessProfile.tabs.paymentModes.label"
          ),
          content: <PaymentModesSection />,
          roles: [USER_TYPES.BUSINESS_OWNER, USER_TYPES.RESTAURANT_MANAGER],
        },
        {
          id: 3,
          icon: <AddressIcon />,
          title: t(
            "dashboard.business.settings.businessProfile.tabs.addressDetail.label"
          ),
          content: <AddressSection />,
          roles: [USER_TYPES.BUSINESS_OWNER, USER_TYPES.RESTAURANT_MANAGER],
        },
        {
          id: 4,
          icon: <ResturantDetailIcon />,
          title: t(
            "dashboard.business.settings.businessProfile.tabs.restaurantTiming.label"
          ),
          content: <RestaurantTimingSection />,
          roles: [USER_TYPES.BUSINESS_OWNER, USER_TYPES.RESTAURANT_MANAGER],
        },
        {
          id: 5,
          icon: <ManagerIcon />,
          title: t(
            "dashboard.business.settings.businessProfile.tabs.manager.label"
          ),
          content: <ManagerSection />,
          roles: [USER_TYPES.BUSINESS_OWNER],
        },
      ].filter(({ roles }) => roles.includes(user?.role)),
    [user?.role, t]
  );

  return (
    <div className="profile-tabs-block">
      <Tabs
        selectedIndex={activeSection}
        onSelect={(index) => setActiveSection(index)}
      >
        <TabList>
          {TABS?.map((tab) => (
            <Tab key={tab.id}>
              <div className="tabs-block-profile">
                {tab.icon}
                <p>{tab.title}</p>
              </div>
            </Tab>
          ))}
        </TabList>
        {TABS?.map((tab) => (
          <TabPanel key={tab.id}>{tab.content}</TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default BusinessProfileTabSection;
