import React, { useMemo } from "react";
import { CuisinesForm, CuisinesList } from "@/components/index";
import { API_ROUTER } from "@/services/apiRouter";
import { useParams } from "next/navigation";
import { useMetaData } from "@/hooks";
import { Loader } from "@/components";
import { useTranslate } from "@/locales";

const CuisinesSection = () => {
  // Hooks
  const { businessId } = useParams();

  const [cuisines, isCuisinesLoading, fetchCuisines] = useMetaData(
    API_ROUTER.GET_ALL_CUISINES(businessId)
  );

  const [businessCuisines, isBusinessCuisineLoading, fetchBusinessCuisines] =
    useMetaData(API_ROUTER.GET_BUSINESS_CUISINES(businessId));

  const { t } = useTranslate();

  const UPDATED_CUISINES = useMemo(() => {
    if (cuisines && cuisines?.length > 0) {
      return cuisines?.filter(({ is_added }) => !is_added);
    } else return [];
  }, [cuisines]);

  return (
    <div className="profile-block-common">
      <div className="profile-block-common-inner">
        <div className="basic-details-block">
          <div className="basic-details-button">
            <h3>
              {t(
                "dashboard.business.settings.businessProfile.tabs.cuisines.label"
              )}
            </h3>
          </div>
          {isCuisinesLoading || isBusinessCuisineLoading ? (
            <Loader />
          ) : (
            <div className="basic-details-block-form">
              <CuisinesForm
                fetchCuisines={fetchCuisines}
                cuisines={businessCuisines}
                options={UPDATED_CUISINES}
                fetchBusinessCuisines={fetchBusinessCuisines}
              />
              <div className="details-block-table">
                <CuisinesList
                  fetchCuisines={fetchCuisines}
                  cuisines={businessCuisines}
                  fetchBusinessCuisines={fetchBusinessCuisines}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CuisinesSection;
