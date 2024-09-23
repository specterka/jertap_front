import React from "react";
import { Tab, Tabs } from "react-bootstrap";

import { CommonLoginForm } from "@/components";

import { AUTH_PROVIDERS } from "@/constants/keywords";
import { PROVIDERS_TABS } from "@/constants/attributes";
import { useTabs } from "@/hooks";
import { useTranslate } from "@/locales";

const LoginForm = (props) => {
  // Hooks
  const { currentTab, onChangeTab } = useTabs(AUTH_PROVIDERS.MOBILE_NUMBER);
  const { t } = useTranslate();

  return (
    <>
      <h2>{t("auth.business.login.form.heading")}</h2>
      <Tabs
        activeKey={currentTab}
        defaultActiveKey={currentTab}
        id="uncontrolled-tab-example"
        className="mb-3"
        onSelect={(key) => onChangeTab(key)}
      >
        {PROVIDERS_TABS.map(({ eventKey, title }) => (
          <Tab eventKey={eventKey} key={eventKey} title={title}>
            <CommonLoginForm provider={eventKey} onChangeTab={onChangeTab}{...props} />
          </Tab>
        ))}
      </Tabs>
    </>
  );
};

export default LoginForm;
