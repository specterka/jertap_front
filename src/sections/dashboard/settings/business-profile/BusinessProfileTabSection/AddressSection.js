import { BusinessAddressForm, Loader } from "@/components";
import { useMetaData } from "@/hooks";
import { useTranslate } from "@/locales";
import { API_ROUTER } from "@/services/apiRouter";
import { useParams } from "next/navigation";
import React from "react";

const AddressSection = () => {
  // States
  const { businessId } = useParams();
  const [businessDetails, isFetching, fetchBusinessDetail] = useMetaData(
    API_ROUTER.GET_BUSINESS_ADDRESS(businessId)
  );
  const { t } = useTranslate();
  return (
    <div className="profile-block-common">
      <div className="profile-block-common-inner">
        <div className="basic-details-block">
          <h3 className="basic-title">
            {t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.label"
            )}
          </h3>
          <div className="basic-details-block-form">
            {isFetching ? (
              <Loader />
            ) : (
              <BusinessAddressForm
                address={businessDetails}
                fetchAddress={fetchBusinessDetail}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressSection;
