import React, { useMemo, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { BasicDetailIcon } from "@/assets/svgs";
import ProfileBasicSection from "./ProfileBasicSection";
import { useTranslate } from "@/locales";

const ProfileTabSection = () => {
  // States
  const [activeSection, setActiveSection] = useState(0);
  const { t } = useTranslate();

  const TABS = useMemo(
    () => [
      {
        id: 0,
        icon: <BasicDetailIcon />,
        title: t("dashboard.business.settings.profile.tabs.userDetails.label"),
        content: <ProfileBasicSection />,
      },
    ],
    [t]
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

export default ProfileTabSection;
