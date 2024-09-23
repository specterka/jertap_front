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

const CuisinesForm = ({
  fetchCuisines,
  options,
  fetchBusinessCuisines,
  cuisines,
}) => {
  const defaultValues = useMemo(
    () => ({
      cuisine: "",
    }),
    []
  );

  const { t } = useTranslate();
  const { currentLang } = useLocales();
  const formSchema = useMemo(() => {
    return yup.object().shape({
      cuisine: yup
        .string()
        .required(
          t(
            "dashboard.business.settings.businessProfile.tabs.cuisines.form.fields.cuisine.errors.required"
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

  const onAddService = async ({ cuisine }) => {
    try {
      const res = await axiosPost(API_ROUTER.ADD_BUSINESS_CUISINE(businessId), {
        cuisine,
      });
      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(
          TOAST_ALERTS.BUSINESS_CUISINE_CREATE_SUCCESS,
          TOAST_TYPES.SUCCESS
        );
        reset({ ...defaultValues });
        fetchCuisines();
        fetchBusinessCuisines();
      }
    } catch (error) {}
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onAddService)}>
      <div className="form-group full-width-block">
        <label>
          {t(
            "dashboard.business.settings.businessProfile.tabs.cuisines.form.title"
          )}
        </label>
        <RHFSelectInput
          name="cuisine"
          disabled={cuisines && cuisines.length >= 5}
        >
          <option value={""}>
            {t(
              "dashboard.business.settings.businessProfile.tabs.cuisines.form.fields.cuisine.select"
            )}
          </option>
          {options &&
            options.length > 0 &&
            options?.map((item, index) => (
              <option value={item?.id?.toString()} key={index}>
                {getTranslatedData(currentLang, item, "cuisines")}
              </option>
            ))}
        </RHFSelectInput>
      </div>
      <div className="button-add-center">
        {cuisines && cuisines.length < 5 ? (
          <Button
            className="btn btn-common-btn"
            type="submit"
            disabled={isSubmitting}
          >
            {t(
              "dashboard.business.settings.businessProfile.tabs.cuisines.form.button.add"
            )}
          </Button>
        ) : null}
      </div>
    </FormProvider>
  );
};

export default CuisinesForm;
