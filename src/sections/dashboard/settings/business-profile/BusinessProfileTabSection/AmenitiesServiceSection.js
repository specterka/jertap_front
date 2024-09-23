import React, { useMemo } from "react";
import { AmenitiesListingForm, AmenitiesListing } from "@/components/index";
import { API_ROUTER } from "@/services/apiRouter";
import { useParams } from "next/navigation";
import { useMetaData } from "@/hooks";
import { Loader } from "@/components";
import { useTranslate } from "@/locales";

const AmenitiesServiceSection = () => {
  const { businessId } = useParams();

  const [menus, isMenuLoading, fetchMenus] = useMetaData(
    API_ROUTER.GET_RESTAURANT_SERVICES(businessId)
  );
  const [services, isServiceLoading, fetchService] = useMetaData(
    API_ROUTER.GET_ALL_RESTAURANT_SERVICES(businessId)
  );

  const { t } = useTranslate();

  const updatedServices = useMemo(() => {
    if (services && services?.length > 0) {
      return services?.filter(({ is_already_added }) => !is_already_added);
    } else return [];
  }, [services]);

  return (
    <div className="profile-block-common">
      <div className="profile-block-common-inner">
        <div className="basic-details-block">
          <div className="basic-details-button">
            <h3>
              {t(
                "dashboard.business.settings.businessProfile.tabs.amenitiesServices.label"
              )}
            </h3>
          </div>
          {isMenuLoading || isServiceLoading ? (
            <Loader />
          ) : (
            <div className="basic-details-block-form">
              <AmenitiesListingForm
                fetchMenus={fetchMenus}
                menus={menus}
                services={updatedServices}
                fetchService={fetchService}
              />
              <div className="details-block-table">
                <AmenitiesListing
                  fetchMenus={fetchMenus}
                  menus={menus}
                  services={updatedServices}
                  fetchService={fetchService}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesServiceSection;
