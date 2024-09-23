import { useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import { API_ROUTER } from "@/services/apiRouter";
import { useToaster } from "@/hooks";
import { axiosDelete } from "@/services/axiosHelper";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { useParams } from "next/navigation";
import ConfirmationDialog from "@/components/shared/ConfirmationDialog";
import { useLocales, useTranslate } from "@/locales";
import { getTranslatedData } from "@/utils/helper";

const CuisinesList = ({ cuisines, fetchCuisines, fetchBusinessCuisines }) => {
  // States
  const [isConfirmation, setIsConfirmation] = useState(false);

  // Hooks
  const { businessId } = useParams();
  const { toaster } = useToaster();
  const { t } = useTranslate();
  const { currentLang } = useLocales();

  const onDeleteInitiate = (id) => {
    setIsConfirmation(id);
  };

  const onDeleteService = async () => {
    try {
      const res = await axiosDelete(
        API_ROUTER.DELETE_BUSINESS_CUISINE(businessId, isConfirmation)
      );
      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(
          TOAST_ALERTS.BUSINESS_CUISINE_DELETE_SUCCESS,
          TOAST_TYPES.SUCCESS
        );
        setIsConfirmation(false);
        fetchCuisines();
        fetchBusinessCuisines();
      }
    } catch (error) {}
  };

  const renderConfirmation = useMemo(() => {
    return (
      isConfirmation && (
        <ConfirmationDialog
          onClose={() => setIsConfirmation(false)}
          isOpen={isConfirmation}
          modalTitle={t(
            "dashboard.business.settings.businessProfile.tabs.cuisines.list.confirmation.title"
          )}
          onConfirm={onDeleteService}
          description={t(
            "dashboard.business.settings.businessProfile.tabs.cuisines.list.confirmation.description"
          )}
          onCancel={() => setIsConfirmation(false)}
        />
      )
    );
  }, [isConfirmation, onDeleteService, setIsConfirmation, t]);

  return (
    <>
      <div className="details-block-table">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>
                {t(
                  "dashboard.business.settings.businessProfile.tabs.cuisines.list.heading.amenities"
                )}
              </th>
              <th>
                {t(
                  "dashboard.business.settings.businessProfile.tabs.cuisines.list.heading.action"
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {cuisines?.length > 0 ? (
              cuisines.map((item, index) => (
                <tr key={index}>
                  <td>
                    {getTranslatedData(currentLang, item?.cuisine, "cuisines")}
                  </td>
                  <td>
                    <Button
                      variant="common-btn"
                      onClick={() => onDeleteInitiate(item?.id)}
                    >
                      {t(
                        "dashboard.business.settings.businessProfile.tabs.cuisines.list.button.remove"
                      )}
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">
                  {t(
                    "dashboard.business.settings.businessProfile.tabs.cuisines.list.emptyAmenities"
                  )}
                </td>
              </tr>
            )}
            {renderConfirmation}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CuisinesList;
