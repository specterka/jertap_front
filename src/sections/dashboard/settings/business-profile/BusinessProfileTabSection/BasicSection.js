import {
  BusinessImageSection,
  BusinessProfileBasicDetailForm,
  Loader,
} from "@/components";
import { useMetaData } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import { useParams } from "next/navigation";
import React from "react";

const BasicSection = () => {
  // Hooks
  const { businessId } = useParams();
  const [businessDetails, isFetching, fetchBusinessDetail] = useMetaData(
    API_ROUTER.GET_PROFILE_BASIC_DETAILS(businessId)
  );

  return (
    <div className="profile-block-common">
      <div className="profile-block-common-inner">
        <BusinessImageSection
          fetchBusinessDetail={fetchBusinessDetail}
          images={businessDetails?.restaurant_images}
          isDetailLoading={isFetching}
        />
        {isFetching ? (
          <Loader />
        ) : (
          <BusinessProfileBasicDetailForm
            businessDetails={businessDetails}
            fetchData={fetchBusinessDetail}
          />
        )}
      </div>
    </div>
  );
};

export default BasicSection;
