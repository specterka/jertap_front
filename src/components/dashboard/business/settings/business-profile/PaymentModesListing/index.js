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

const PaymentModesListing = ({
  fetchPaymentMethods,
  fetchBusinessPaymentMethods,
  businessPaymentMethods,
}) => {
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
        API_ROUTER.DELETE_BUSINESS_PAYMENT_METHOD(businessId, isConfirmation)
      );
      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(
          TOAST_ALERTS.RESTAURANT_SERVICES_DELETE_SUCCESS,
          TOAST_TYPES.SUCCESS
        );
        setIsConfirmation(false);
        fetchPaymentMethods();
        fetchBusinessPaymentMethods();
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
            "dashboard.business.settings.businessProfile.tabs.paymentModes.list.confirmation.title"
          )}
          onConfirm={onDeleteService}
          description={t(
            "dashboard.business.settings.businessProfile.tabs.paymentModes.list.confirmation.description"
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
                  "dashboard.business.settings.businessProfile.tabs.paymentModes.list.heading.amenities"
                )}
              </th>
              <th>
                {t(
                  "dashboard.business.settings.businessProfile.tabs.paymentModes.list.heading.action"
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {businessPaymentMethods?.length > 0 ? (
              businessPaymentMethods.map((item, index) => (
                <tr key={index}>
                  <td>
                    {getTranslatedData(
                      currentLang,
                      item?.payment,
                      "payment_name"
                    )}
                  </td>
                  <td>
                    <Button
                      variant="common-btn"
                      onClick={() => onDeleteInitiate(item?.id)}
                    >
                      {t(
                        "dashboard.business.settings.businessProfile.tabs.paymentModes.list.button.remove"
                      )}
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">
                  {t(
                    "dashboard.business.settings.businessProfile.tabs.paymentModes.list.emptyAmenities"
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

export default PaymentModesListing;
