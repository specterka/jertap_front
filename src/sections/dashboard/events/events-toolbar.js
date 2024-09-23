import SearchInput from "@/components/shared/inputs/SearchInput";
import React from "react";
import { useTranslate } from "@/locales";

const EventsToolbar = ({ onSearchMenu = () => {} }) => {
  const { t } = useTranslate();

  return (
    <div className="d-flex align-items-center justify-content-between mb-5">
      <h3>{t("dashboard.business.listing.listing_tools.greetings.heading")}</h3>
      <div className="d-flex justify-content-center align-items-center gap-3">
        <SearchInput placeholder="Search...." onSearch={onSearchMenu} />
      </div>
    </div>
  );
};

export default EventsToolbar;
