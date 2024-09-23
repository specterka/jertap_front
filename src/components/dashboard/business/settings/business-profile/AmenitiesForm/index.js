import React, { useMemo } from "react";
import { Button } from "react-bootstrap";
import { API_ROUTER } from "@/services/apiRouter";
import { useParams } from "next/navigation";
import { useToaster } from "@/hooks";
import { axiosPost } from "@/services/axiosHelper";
import { FormProvider, RHFSelectInput } from "@/components/hook-form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { useLocales, useTranslate } from "@/locales";
import { getTranslatedData } from "@/utils/helper";

const AmenitiesListingForm = ({ fetchMenus, services, fetchService }) => {
  const defaultValues = useMemo(
    () => ({
      service: "",
    }),
    []
  );

  const { t } = useTranslate();
  const { currentLang } = useLocales();
  const formSchema = useMemo(() => {
    return yup.object().shape({
      service: yup
        .string()
        .required(
          t(
            "dashboard.business.settings.businessProfile.tabs.amenitiesServices.form.fields.service.errors.required"
          )
        ),
    });
  }, [t]);

  // Hooks
  const { businessId } = useParams();
  const { toaster } = useToaster();
  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  const onAddService = async ({ service }) => {
    try {
      const res = await axiosPost(
        API_ROUTER.ADD_RESTAURANT_SERVICES(businessId),
        {
          service,
        }
      );
      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(
          TOAST_ALERTS.RESTAURANT_SERVICES_CREATE_SUCCESS,
          TOAST_TYPES.SUCCESS
        );
        reset({ ...defaultValues });
        fetchMenus();
        fetchService();
      }
    } catch (error) {}
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onAddService)}>
      <div className="form-group full-width-block">
        <label>
          {t(
            "dashboard.business.settings.businessProfile.tabs.amenitiesServices.form.title"
          )}
        </label>
        <RHFSelectInput name="service">
          <option value={""}>
            {t(
              "dashboard.business.settings.businessProfile.tabs.amenitiesServices.form.fields.service.select"
            )}
          </option>
          {services &&
            services.length > 0 &&
            services?.map((item, index) => (
              <option value={item?.id?.toString()} key={index}>
                {getTranslatedData(currentLang, item, "service_name")}
              </option>
            ))}
        </RHFSelectInput>
      </div>
      <div className="button-add-center">
        <Button
          className="btn btn-common-btn"
          type="submit"
          disabled={isSubmitting}
        >
          {t(
            "dashboard.business.settings.businessProfile.tabs.amenitiesServices.form.button.add"
          )}
        </Button>
      </div>
    </FormProvider>
  );
};

export default AmenitiesListingForm;
