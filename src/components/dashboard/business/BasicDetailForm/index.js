import {
  FormProvider,
  RHFPhoneInput,
  RHFSelectInput,
  RHFTextInput,
} from "@/components/hook-form";
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { getPastYears, getTranslatedData } from "@/utils/helper";
import "react-tooltip/dist/react-tooltip.css";
import { useLocales, useTranslate } from "@/locales";
import { useMetaData } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";

const BasicDetailForm = ({ onSave, businessDetails }) => {
  const { t } = useTranslate();

  // Hook Form Config
  const defaultValues = useMemo(
    () => ({
      name: businessDetails?.name || "",
      phone_number: businessDetails?.phone_number || "",
      phone_number_2: businessDetails?.phone_number_2 || "",
      year_of_established: businessDetails?.year_of_established || "",
      type: businessDetails?.type || "",
      business_email: businessDetails?.business_email || "",
    }),
    [businessDetails]
  );
  const [types, isLoading] = useMetaData(API_ROUTER.GET_TYPES);
  const { currentLang } = useLocales();

  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        name: yup
          .string()
          .trim(
            t("dashboard.business.basic_detail.form.fields.name.errors.invalid")
          )
          .required(
            t(
              "dashboard.business.basic_detail.form.fields.name.errors.required"
            )
          )
          .min(
            1,
            t(
              "dashboard.business.basic_detail.form.fields.name.errors.minLength"
            )
          )
          .max(
            100,
            t(
              "dashboard.business.basic_detail.form.fields.name.errors.maxLength"
            )
          )
          .matches(
            /^(?=.*[A-Za-z])[A-Za-z0-9&'.,\- ]{2,}$/,
            t("dashboard.business.basic_detail.form.fields.name.errors.regex")
          ),
        phone_number: yup
          .string()
          .trim(
            t(
              "dashboard.business.basic_detail.form.fields.phone_number.errors.invalid"
            )
          )
          .required(
            t(
              "dashboard.business.basic_detail.form.fields.phone_number.errors.required"
            )
          )
          .matches(
            /^(?:\+|\d)[\d-]*\d$/,
            t(
              "dashboard.business.basic_detail.form.fields.phone_number.errors.regex"
            )
          ),
        phone_number_2: yup
          .string()
          .trim(
            t(
              "dashboard.business.basic_detail.form.fields.phone_number_2.errors.invalid"
            )
          ),
        type: yup
          .string()
          .required(
            t(
              "dashboard.business.basic_detail.form.fields.type.errors.required"
            )
          ),
        year_of_established: yup
          .string()
          .required(
            t(
              "dashboard.business.basic_detail.form.fields.year_of_established.errors.required"
            )
          ),
        business_email: yup
          .string()
          .email(
            t(
              "dashboard.business.basic_detail.form.fields.business_email.errors.invalid"
            )
          ),
      })
      .required()
      .strict(true);
  }, []);

  // Hooks
  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  const YEARS = useMemo(() => {
    return getPastYears(50);
  }, [getPastYears]);

  // Constants
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmitForm = (formData) => {
    try {
      onSave(formData);
    } catch (error) {}
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
      <div className="form-group">
        <RHFTextInput
          name="name"
          placeholder={t(
            "dashboard.business.basic_detail.form.fields.name.placeholder"
          )}
        />
      </div>
      <div className="form-group">
        <RHFTextInput
          name="business_email"
          placeholder={t(
            "dashboard.business.basic_detail.form.fields.business_email.placeholder"
          )}
        />
      </div>
      <div className="form-group-flex">
        <div className="form-group">
          <RHFPhoneInput
            name="phone_number"
            placeholder={t(
              "dashboard.business.basic_detail.form.fields.phone_number.placeholder"
            )}
          />
        </div>
        <div className="form-group">
          <RHFPhoneInput
            name="phone_number_2"
            placeholder={t(
              "dashboard.business.basic_detail.form.fields.phone_number_2.placeholder"
            )}
          />
        </div>
      </div>

      <div className="form-group select-arrow-before">
        <RHFSelectInput
          name={"year_of_established"}
          placeholder={t(
            "dashboard.business.basic_detail.form.fields.year_of_established.placeholder"
          )}
        >
          <option value={""}>Select established year</option>
          {YEARS?.map((value) => (
            <option key={value} value={value?.toString()}>
              {value}
            </option>
          ))}
        </RHFSelectInput>
      </div>
      <div className="form-group select-arrow-before">
        <RHFSelectInput
          name={"type"}
          placeholder={t(
            "dashboard.business.basic_detail.form.fields.type.placeholder"
          )}
          disabled={isLoading}
        >
          <option value={""}>Select your business type</option>
          {types &&
            types.length > 0 &&
            types.map((item) => (
              <option key={item.id} value={item.id}>
                {getTranslatedData(currentLang, item, "type")}
              </option>
            ))}
        </RHFSelectInput>
      </div>
      <button
        type="submit"
        className="common-btn btn btn-primary"
        disabled={isSubmitting}
      >
        {t("dashboard.business.basic_detail.button.next")}
      </button>
    </FormProvider>
  );
};

export default BasicDetailForm;
