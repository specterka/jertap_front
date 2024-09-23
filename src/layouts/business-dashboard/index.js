"use client";

import { React } from "react";
import { useMetaData, useSettings } from "@/hooks";
import BusinessDashboardHeader from "@/components/shared/business-dashboard/header";
import BusinessDashboardSidebar from "@/components/shared/business-dashboard/sidebar";
import { Loader } from "@/components";
import { API_ROUTER } from "@/services/apiRouter";
import { useParams, useRouter } from "next/navigation";
import { PATH_BUSINESS } from "@/routes/paths";
import { Button } from "react-bootstrap";

const BusinessDashboardLayout = ({ children }) => {
  // Hooks
  const { isSideNavigationOpen } = useSettings();
  const { businessId } = useParams();
  const { replace } = useRouter();

  const [businessDetails, isLoading] = useMetaData(
    API_ROUTER.GET_BUSINESS_DETAIL(businessId)
  );

  if (isLoading) return <Loader isFullScreen />;

  if (!businessDetails)
    return (
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h3 className="text-center">No Business Found with this details</h3>
        <Button onClick={() => replace(PATH_BUSINESS.business.root)}>
          Back to Business
        </Button>
      </div>
    );

  if (!businessDetails?.is_approved)
    return (
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h3 className="text-center">
          {businessDetails?.name} is not approved yet
        </h3>
        <Button onClick={() => replace(PATH_BUSINESS.business.root)}>
          Back to Business
        </Button>
      </div>
    );

  return (
    <div>
      <BusinessDashboardHeader businessId={businessId} />
      <BusinessDashboardSidebar businessId={businessId} />
      <div
        className={`page-index ${
          isSideNavigationOpen ? "side-open" : "side-close"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default BusinessDashboardLayout;
