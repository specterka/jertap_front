import SearchInput from "@/components/shared/inputs/SearchInput";
import React from "react";
import { useTranslate } from "@/locales";

const PromotionsToolbar = ({ onSearch = () => {} }) => {
  // Hooks
  const { t } = useTranslate();

  return (
    <div className="d-flex align-items-center justify-content-between mb-5">
      <h3>{t("dashboard.business.promotions.list.heading")}</h3>
      <div className="d-flex justify-content-center align-items-center gap-3">
        <SearchInput
          placeholder={t("dashboard.business.promotions.list.search")}
          onSearch={onSearch}
        />
      </div>
    </div>
  );
};

export default PromotionsToolbar;
