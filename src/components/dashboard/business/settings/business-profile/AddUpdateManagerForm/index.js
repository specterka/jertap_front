import { Button } from "react-bootstrap";
import {
  FormProvider,
  RHFPhoneInput,
  RHFTextInput,
} from "@/components/hook-form";
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "next/navigation";
import { useToaster } from "@/hooks";
import { axiosPost } from "@/services/axiosHelper";
import { API_ROUTER } from "@/services/apiRouter";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { useTranslate } from "@/locales";

const AddUpdateManagerForm = ({ fetchManagers }) => {
  // Hook Form Config
  const defaultValues = useMemo(() => {
    return { email: "", username: "", mobile_number: "" };
  }, []);

  const { t } = useTranslate();

  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        email: yup
          .string()
          .required(
            t(
              "dashboard.business.settings.businessProfile.tabs.manager.list.manager.form.fields.email.errors.required"
            )
          )
          .email(
            t(
              "dashboard.business.settings.businessProfile.tabs.manager.list.manager.form.fields.email.errors.invalid"
            )
          )
          .trim(
            t(
              "dashboard.business.settings.businessProfile.tabs.manager.list.manager.form.fields.email.errors.invalid"
            )
          ),
        mobile_number: yup
          .string()
          .required(
            t(
              "dashboard.business.settings.businessProfile.tabs.manager.list.manager.form.fields.mobile_number.errors.required"
            )
          )
          .trim(
            t(
              "dashboard.business.settings.businessProfile.tabs.manager.list.manager.form.fields.mobile_number.errors.invalid"
            )
          )
          .matches(
            /^[\+]?([1-9]\d{0,2})[ .-\/]*(?:\d{7,14})([ .-\/]*|ext\d*)$/,
            t(
              "dashboard.business.settings.businessProfile.tabs.manager.list.manager.form.fields.mobile_number.errors.invalid"
            )
          ),
        username: yup
          .string()
          .trim(
            t(
              "dashboard.business.settings.businessProfile.tabs.manager.list.manager.form.fields.username.errors.invalid"
            )
          )
          .required(
            t(
              "dashboard.business.settings.businessProfile.tabs.manager.list.manager.form.fields.username.errors.required"
            )
          )
          .min(
            1,
            t(
              "dashboard.business.settings.businessProfile.tabs.manager.list.manager.form.fields.username.errors.minLength"
            )
          )
          .max(
            16,
            t(
              "dashboard.business.settings.businessProfile.tabs.manager.list.manager.form.fields.username.errors.maxLength"
            )
          )
          .matches(
            /^(?=.*[A-Za-z])[A-Za-z0-9 ]*$/,
            t(
              "dashboard.business.settings.businessProfile.tabs.manager.list.manager.form.fields.username.errors.regex"
            )
          ),
      })
      .required()
      .strict(true);
  }, [t]);

  // Hooks
  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });
  const { businessId } = useParams();
  const { toaster } = useToaster();

  // Constants
  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = methods;

  const onSubmitForm = async (formData) => {
    const { ...restData } = formData;
    try {
      const payload = {
        ...restData,
      };

      const res = await axiosPost(
        API_ROUTER.CREATE_BUSINESS_MANAGER(businessId),
        payload
      );
      if (!res.status) {
        return toaster(
          res.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(TOAST_ALERTS.BUSINESS_ADD_MANAGER_SUCCESS, TOAST_TYPES.SUCCESS);
        fetchManagers();
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  const onCancel = () => {
    reset(defaultValues);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
      <div className="form-group full-width-block">
        <RHFTextInput
          name="username"
          placeholder={t(
            "dashboard.business.settings.businessProfile.tabs.manager.list.manager.form.fields.username.placeholder"
          )}
          label={t(
            "dashboard.business.settings.businessProfile.tabs.manager.list.manager.form.fields.username.label"
          )}
          inputProps={{
            autoComplete: false,
          }}
        />
      </div>
      <div className="form-group-two">
        <div className="form-group">
          <RHFTextInput
            name="email"
            placeholder={t(
              "dashboard.business.settings.businessProfile.tabs.manager.list.manager.form.fields.email.placeholder"
            )}
            label={t(
              "dashboard.business.settings.businessProfile.tabs.manager.list.manager.form.fields.email.label"
            )}
            inputProps={{
              autoComplete: false,
            }}
          />
        </div>
        <div className="form-group">
          <RHFPhoneInput
            name="mobile_number"
            type="tel"
            placeholder={t(
              "dashboard.business.settings.businessProfile.tabs.manager.list.manager.form.fields.mobile_number.placeholder"
            )}
            label={t(
              "dashboard.business.settings.businessProfile.tabs.manager.list.manager.form.fields.mobile_number.label"
            )}
            inputProps={{
              autoComplete: "false",
            }}
          />
        </div>
      </div>
      <div className="btn-group-main">
        <Button variant="common-btn" type="submit">
          {isSubmitting
            ? t(
                "dashboard.business.settings.businessProfile.tabs.manager.list.manager.form.button.adding"
              )
            : t(
                "dashboard.business.settings.businessProfile.tabs.manager.list.manager.form.button.add"
              )}
        </Button>
        <Button variant="btn-common-btn" onClick={onCancel}>
          {t(
            "dashboard.business.settings.businessProfile.tabs.manager.list.manager.form.button.reset"
          )}
        </Button>
      </div>
    </FormProvider>
  );
};

export default AddUpdateManagerForm;
