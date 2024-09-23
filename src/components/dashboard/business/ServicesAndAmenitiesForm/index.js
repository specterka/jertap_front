import { FormProvider, RHFTextInput } from "@/components/hook-form";
import React, { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RHFBusinessProfileImage } from "@/components/hook-form/RHFFileInput";
import { useTranslate } from "@/locales";

const ServicesAndAmenities = ({ onSave, businessDetails }) => {
  // Hook Form Config
  const defaultValues = useMemo(
    () => ({
      profile_image: businessDetails?.profile_image || "",
      business_description: businessDetails?.business_description || "",
      known_for: businessDetails?.known_for || "",
      must_order: businessDetails?.must_order || "",
      business_website: businessDetails?.business_website || "",
      business_instagram: businessDetails?.business_instagram || "",
    }),
    [businessDetails]
  );
  const { t } = useTranslate();

  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        profile_image: yup
          .mixed()
          .test("isExist", "Please select a profile image", (value) => value)
          .test(
            "fileSize",
            "Profile image size is too large",
            (value) => value && value[0].size <= 5 * 1024 * 1024
          )
          .test(
            "fileType",
            "Invalid profile image",
            (value) =>
              value &&
              ["image/jpeg", "image/png", "image/jpg"].includes(value[0].type)
          ),
        business_description: yup
          .string()
          .trim(
            t(
              "dashboard.business.services_and_amenities.form.fields.business_description.errors.invalid"
            )
          )
          .required(
            t(
              "dashboard.business.services_and_amenities.form.fields.business_description.errors.required"
            )
          )
          .min(
            5,
            t(
              "dashboard.business.services_and_amenities.form.fields.business_description.errors.minLength"
            )
          )
          .max(
            10000,
            t(
              "dashboard.business.services_and_amenities.form.fields.business_description.errors.maxLength"
            )
          )
          .matches(
            /^(?=.*[A-Za-z])[A-Za-z0-9&'.,\- ]{2,}$/,
            t(
              "dashboard.business.services_and_amenities.form.fields.business_description.errors.regex"
            )
          ),

        known_for: yup
          .string()
          .trim(
            t(
              "dashboard.business.services_and_amenities.form.fields.known_for.errors.invalid"
            )
          )
          .required(
            t(
              "dashboard.business.services_and_amenities.form.fields.known_for.errors.required"
            )
          )
          .min(
            2,
            t(
              "dashboard.business.services_and_amenities.form.fields.known_for.errors.minLength"
            )
          )
          .max(
            1000,
            t(
              "dashboard.business.services_and_amenities.form.fields.known_for.errors.maxLength"
            )
          )
          .matches(
            /^(?=.*[A-Za-z])[A-Za-z0-9&'.,\- ]*$/,
            t(
              "dashboard.business.services_and_amenities.form.fields.known_for.errors.regex"
            )
          ),
        must_order: yup
          .string()
          .trim(
            t(
              "dashboard.business.services_and_amenities.form.fields.must_order.errors.invalid"
            )
          )
          .required(
            t(
              "dashboard.business.services_and_amenities.form.fields.must_order.errors.required"
            )
          )
          .min(
            2,
            t(
              "dashboard.business.services_and_amenities.form.fields.must_order.errors.minLength"
            )
          )
          .max(
            1000,
            t(
              "dashboard.business.services_and_amenities.form.fields.must_order.errors.maxLength"
            )
          )
          .matches(
            /^(?=.*[A-Za-z])[A-Za-z0-9&'.,\- ]*$/,
            t(
              "dashboard.business.services_and_amenities.form.fields.must_order.errors.regex"
            )
          ),
        business_website: yup
          .string()
          .url(
            t(
              "dashboard.business.services_and_amenities.form.fields.business_website.errors.invalid"
            )
          ),
        business_instagram: yup
          .string()
          .url(
            t(
              "dashboard.business.services_and_amenities.form.fields.business_instagram.errors.invalid"
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

  // Constants
  const {
    handleSubmit,
    formState: { isSubmitting },
    setValue,
  } = methods;

  const onProfileImageChange = useCallback(
    (files) => {
      const clonedData = [];
      Array.from(files).map(async (data) => {
        Object.assign(data, { preview: URL.createObjectURL(data) });
        clonedData.push(data);
      });
      setValue("profile_image", clonedData);
    },
    [setValue]
  );

  const onRemoveFile = () => setValue("profile_image", "");

  const onSubmitForm = (formData) => {
    try {
      onSave(formData);
    } catch (error) {}
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
      <RHFBusinessProfileImage
        name="profile_image"
        multiple={false}
        label="Profile Image"
        onChange={onProfileImageChange}
        onRemoveFile={onRemoveFile}
        accept=".jpg, .jpeg, .png"
      />
      <div className="form-group">
        <RHFTextInput
          name="business_description"
          placeholder={t(
            "dashboard.business.services_and_amenities.form.fields.business_description.placeholder"
          )}
        />
      </div>
      <div className="form-group-flex">
        <div className="form-group">
          <RHFTextInput
            name="business_website"
            placeholder={t(
              "dashboard.business.services_and_amenities.form.fields.business_website.placeholder"
            )}
          />
        </div>
        <div className="form-group">
          <RHFTextInput
            name="business_instagram"
            placeholder={t(
              "dashboard.business.services_and_amenities.form.fields.business_instagram.placeholder"
            )}
          />
        </div>
      </div>
      <div className="form-group">
        <RHFTextInput
          name="known_for"
          placeholder={t(
            "dashboard.business.services_and_amenities.form.fields.known_for.placeholder"
          )}
          fieldHint="You may describe the factors that make your restaurant well-known or renowned for."
        />
      </div>
      <div className="form-group">
        <RHFTextInput
          name="must_order"
          placeholder={t(
            "dashboard.business.services_and_amenities.form.fields.must_order.placeholder"
          )}
          fieldHint="You could feature the best or most-selling dishes from your restaurant."
        />
      </div>
      <button
        type="submit"
        className="common-btn btn btn-primary"
        disabled={isSubmitting}
      >
        {t("dashboard.business.services_and_amenities.button.add")}
      </button>
    </FormProvider>
  );
};

export default ServicesAndAmenities;
