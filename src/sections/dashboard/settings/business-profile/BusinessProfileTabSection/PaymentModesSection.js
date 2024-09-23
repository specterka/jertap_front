import React, { useMemo } from "react";
import { PaymentModesForm, PaymentModesListing } from "@/components/index";
import { useParams } from "next/navigation";
import { useMetaData } from "@/hooks";
import { Loader } from "@/components";
import { useTranslate } from "@/locales";
import { API_ROUTER } from "@/services/apiRouter";

const PaymentModesSection = () => {
  const { businessId } = useParams();

  const [
    businessPaymentMethods,
    isBusinessPaymentMethodsLoading,
    fetchBusinessPaymentMethods,
  ] = useMetaData(API_ROUTER.GET_BUSINESS_PAYMENT_METHODS(businessId));
  const [paymentMethods, isPaymentMethodsLoading, fetchPaymentMethods] =
    useMetaData(API_ROUTER.GET_ALL_PAYMENT_METHODS(businessId));

  const { t } = useTranslate();

  const UPDATED_METHODS = useMemo(() => {
    if (paymentMethods && paymentMethods?.length > 0) {
      return paymentMethods?.filter(({ is_added }) => !is_added);
    } else return [];
  }, [paymentMethods]);

  return (
    <div className="profile-block-common">
      <div className="profile-block-common-inner">
        <div className="basic-details-block">
          <div className="basic-details-button">
            <h3>
              {t(
                "dashboard.business.settings.businessProfile.tabs.paymentModes.label"
              )}
            </h3>
          </div>
          {isBusinessPaymentMethodsLoading || isPaymentMethodsLoading ? (
            <Loader />
          ) : (
            <div className="basic-details-block-form">
              <PaymentModesForm
                fetchBusinessPaymentMethods={fetchBusinessPaymentMethods}
                businessPaymentMethods={businessPaymentMethods}
                paymentMethods={UPDATED_METHODS}
                fetchPaymentMethods={fetchPaymentMethods}
              />
              <div className="details-block-table">
                <PaymentModesListing
                  fetchBusinessPaymentMethods={fetchBusinessPaymentMethods}
                  businessPaymentMethods={businessPaymentMethods}
                  paymentMethods={UPDATED_METHODS}
                  fetchPaymentMethods={fetchPaymentMethods}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentModesSection;
