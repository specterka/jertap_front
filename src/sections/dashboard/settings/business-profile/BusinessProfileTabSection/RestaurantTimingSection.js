import { BusinessTimingList } from "@/components";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { useMetaData, useToaster } from "@/hooks";
import { useTranslate } from "@/locales";
import { API_ROUTER } from "@/services/apiRouter";
import { axiosPatch } from "@/services/axiosHelper";
import { fTime } from "@/utils/formatTime";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const RestaurantTimingSection = () => {
  // States
  const [timings, setTimings] = useState([]);

  // Hooks
  const { businessId } = useParams();
  const [businessTimings, isFetching, fetchTimings] = useMetaData(
    API_ROUTER.GET_BUSINESS_TIMINGS(businessId)
  );
  const { toaster } = useToaster();
  const { t } = useTranslate();

  // Effects
  useEffect(() => {
    if (businessTimings && businessTimings.length > 0) {
      setTimings(businessTimings);
    } else setTimings([]);
  }, [businessTimings]);

  // Handlers
  const onChangeTimings = (index, key, value) => {
    let clonedTimings = [...timings];
    clonedTimings[index] = { ...clonedTimings[index], [key]: value };
    setTimings(clonedTimings);
  };

  const onUpdate = async (timingId) => {
    try {
      const selected = timings.find((item) => item.id === timingId);
      if (!timingId || !selected)
        return toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
      const payload = {
        from_hour:
          typeof selected?.from_hour === "string"
            ? selected?.from_hour
            : fTime(selected?.from_hour),
        to_hour:
          typeof selected?.to_hour === "string"
            ? selected?.to_hour
            : fTime(selected?.to_hour),
      };
      const res = await axiosPatch(
        API_ROUTER.UPDATE_BUSINESS_TIMING(businessId, timingId),
        payload
      );
      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(
          TOAST_ALERTS.BUSINESS_TIMING_UPDATE_SUCCESS,
          TOAST_TYPES.SUCCESS
        );
        fetchTimings();
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  return (
    <div className="profile-block-common">
      <div className="profile-block-common-inner">
        <div className="basic-details-block">
          <h3 className="basic-title">
            {t(
              "dashboard.business.settings.businessProfile.tabs.restaurantTiming.label"
            )}
          </h3>
          <div className="basic-details-block-form">
            <div className="details-block-table">
              <BusinessTimingList
                isLoading={isFetching}
                timings={timings}
                onChangeTimings={onChangeTimings}
                onUpdate={onUpdate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantTimingSection;
