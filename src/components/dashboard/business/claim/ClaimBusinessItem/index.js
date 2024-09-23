import React from "react";
import { useTranslate } from "@/locales";

const ClaimBusinessItem = ({
  business,
  onClaim = () => {},
  isClaiming = false,
}) => {
  const { t } = useTranslate();

  return (
    <div className="claim-inner-list-block">
      <div className="claim-inner-list-block-profile">
        <img
          src={business?.profile_image || "/images/profile-img.png"}
          alt={`${business?.name}-image`}
        />
        <div className="claim-inner-content">
          <h4>{business?.name}</h4>
          <p>{business?.address}</p>
        </div>
      </div>
      <button
        type="submit"
        className="common-btn btn btn-primary"
        onClick={() => onClaim(business.id)}
        disabled={isClaiming}
      >
        {isClaiming && isClaiming === business.id
          ? t("dashboard.business.claim_item.button.submitting")
          : t("dashboard.business.claim_item.button.claim")}
      </button>
    </div>
  );
};

export default ClaimBusinessItem;
