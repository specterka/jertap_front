import SearchInput from "@/components/shared/inputs/SearchInput";
import React from "react";
import { useTranslate } from "@/locales";
import Link from "next/link";

const ListingToolbar = ({
  onSearchMenu = () => {},
  setIsUploadMenuOpen = () => [],
}) => {
  const { t } = useTranslate();

  return (
    <div className="d-flex align-items-center justify-content-between flex-wrap mb-5">
      <h3>{t("dashboard.business.listing.listing_tools.greetings.heading")}</h3>
      <div className="d-flex justify-content-center align-items-center gap-3">
        <Link
          className="common-btn"
          href={""}
          onClick={() => setIsUploadMenuOpen(true)}
        >
          {t("dashboard.business.listing.listing_tools.button.update")}
        </Link>
        <SearchInput placeholder="Search...." onSearch={onSearchMenu} />
      </div>
    </div>
  );
};

export default ListingToolbar;
