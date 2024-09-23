import { useToaster } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import { useParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { Button, Form } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { axiosPatch } from "@/services/axiosHelper";
import { useForm } from "react-hook-form";
import {
  FormProvider,
  RHFPhoneInput,
  RHFSelectInput,
  RHFTextAreaInput,
  RHFTextInput,
} from "@/components/hook-form";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { RHFBusinessProfileImage } from "@/components/hook-form/RHFFileInput";
import { getPastYears, getTranslatedData } from "@/utils/helper";
import { useMetaData } from "@/hooks";
import { useLocales, useTranslate } from "@/locales";

const ProfileBasicDetailForm = ({ businessDetails, fetchData }) => {
  // Form Config
  const defaultValues = useMemo(
    () => ({
      name: businessDetails?.name || "",
      contact_number: businessDetails?.phone_number || "",
      phone_number_2: businessDetails?.phone_number_2 || "",
      business_description: businessDetails?.business_description || "",
      business_whatsapp: businessDetails?.business_whatsapp || "",
      business_instagram: businessDetails?.business_instagram || "",
      business_website: businessDetails?.business_website || "",
      business_email: businessDetails?.business_email || "",
      average_bill: businessDetails?.average_bill?.toString() || "",
      business_capacity: businessDetails?.business_capacity?.toString() || "",
      known_for: businessDetails?.known_for || "",
      must_order: businessDetails?.must_order || "",
      type: businessDetails?.type?.id?.toString() || "",
      year_of_established:
        businessDetails?.year_of_established?.toString() || "",
      profile_image: businessDetails?.profile_image
        ? [businessDetails?.profile_image]
        : "",
    }),
    [businessDetails]
  );

  const { t } = useTranslate();

  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        name: yup
          .string()
          .trim(
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.name.errors.invalid"
            )
          )
          .required(
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.name.errors.required"
            )
          )
          .min(
            1,
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.name.errors.minLength"
            )
          )
          .max(
            100,
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.name.errors.maxLength"
            )
          )
          .matches(
            /^(?=.*[A-Za-z])[A-Za-z0-9 ]*$/,
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.name.errors.regex"
            )
          ),
        business_instagram: yup
          .string()
          .url(
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.business_instagram.errors.invalid"
            )
          ),
        business_website: yup
          .string()
          .url(
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.business_website.errors.invalid"
            )
          ),
        profile_image: yup
          .mixed()
          .test(
            "isExist",
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.profileImage.errors.required"
            ),
            (value) => !!value
          )
          .test(
            "fileSize",
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.profileImage.errors.size"
            ),
            (value) =>
              value
                ? typeof value[0] !== "string"
                  ? value[0].size <= 5 * 1024 * 1024
                  : true
                : false
          )
          .test(
            "fileType",
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.profileImage.errors.type"
            ),
            (value) =>
              value
                ? typeof value[0] !== "string"
                  ? ["image/jpeg", "image/png", "image/jpg"].includes(
                      value[0]?.type
                    )
                  : true
                : false
          ),
        contact_number: yup
          .string()
          .trim(
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.contact_number.errors.invalid"
            )
          )
          .required(
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.contact_number.errors.required"
            )
          )
          .matches(
            /^(?:\+|\d)[\d-]*\d$/,
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.contact_number.errors.regex"
            )
          )
          .min(
            6,
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.contact_number.errors.minLength"
            )
          )
          .max(
            16,
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.contact_number.errors.maxLength"
            )
          ),
        phone_number_2: yup
          .string()
          .trim(
            t(
              "dashboard.business.basic_detail.form.fields.phone_number_2.errors.invalid"
            )
          ),
        business_whatsapp: yup
          .string()
          .trim(
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.business_whatsapp.errors.invalid"
            )
          )
          .required(
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.business_whatsapp.errors.required"
            )
          )
          .matches(
            /^(?:\+|\d)[\d-]*\d$/,
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.business_whatsapp.errors.regex"
            )
          )
          .min(
            6,
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.business_whatsapp.errors.minLength"
            )
          )
          .max(
            16,
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.business_whatsapp.errors.maxLength"
            )
          ),
        country_code: yup.string(),
        known_for: yup
          .string()
          .trim(
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.known_for.errors.invalid"
            )
          )
          .required(
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.known_for.errors.required"
            )
          )
          .min(
            1,
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.known_for.errors.minLength"
            )
          )
          .max(
            100,
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.known_for.errors.maxLength"
            )
          )
          .matches(
            /^(?=.*[A-Za-z])[A-Za-z0-9 ]*$/,
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.known_for.errors.regex"
            )
          ),
        must_order: yup
          .string()
          .trim(
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.must_order.errors.invalid"
            )
          )
          .required(
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.must_order.errors.required"
            )
          )
          .min(
            1,
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.must_order.errors.minLength"
            )
          )
          .max(
            100,
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.must_order.errors.maxLength"
            )
          )
          .matches(
            /^(?=.*[A-Za-z])[A-Za-z0-9 ]*$/,
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.must_order.errors.regex"
            )
          ),
        type: yup
          .string()
          .required(
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.type.errors.required"
            )
          ),
        year_of_established: yup
          .string()
          .required(
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.year_of_established.errors.required"
            )
          ),
        business_description: yup
          .string()
          .trim(
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.business_description.errors.invalid"
            )
          )
          .required(
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.business_description.errors.required"
            )
          )
          .min(
            5,
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.business_description.errors.minLength"
            )
          )
          .max(
            10000,
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.business_description.errors.maxLength"
            )
          )
          .matches(
            /^(?=.*[A-Za-z])[A-Za-z0-9&'.,\- ]{2,}$/,
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.business_description.errors.regex"
            )
          ),
        average_bill: yup
          .string()
          .trim(
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.average_bill.errors.invalid"
            )
          )
          .test(
            "is-number",
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.average_bill.errors.invalid"
            ),
            (value) => (value ? /^\d+(\.\d+)?$/.test(value) : true)
          ),
        business_capacity: yup
          .string()
          .trim(
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.business_capacity.errors.invalid"
            )
          )
          .test(
            "is-number",
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.business_capacity.errors.invalid"
            ),
            (value) => (value ? /^\d+(\.\d+)?$/.test(value) : true)
          ),
        business_email: yup
          .string()
          .email(
            t(
              "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.business_email.errors.invalid"
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

  const { businessId } = useParams();
  const { toaster } = useToaster();
  const { currentLang } = useLocales();

  const [businessTypes, isTypeLoading] = useMetaData(API_ROUTER.GET_TYPES);

  const YEARS = useMemo(() => {
    return getPastYears(50);
  }, [getPastYears]);

  // Constants
  const {
    handleSubmit,
    formState: { isSubmitting, isDirty },
    setValue,
    reset,
  } = methods;

  const onSubmitForm = async (formData) => {
    try {
      const {
        name,
        contact_number,
        business_description,
        business_whatsapp,
        known_for,
        must_order,
        type,
        profile_image,
        year_of_established,
        phone_number_2,
        business_instagram,
        business_website,
        average_bill,
        business_capacity,
        business_email,
      } = formData;

      const payload = new FormData();
      if (name !== businessDetails?.name) payload.append("name", name);
      if (contact_number !== businessDetails?.contact_number)
        payload.append("contact_number", contact_number);
      if (business_description !== businessDetails?.business_description)
        payload.append("business_description", business_description);
      if (business_whatsapp !== businessDetails?.business_whatsapp)
        payload.append("business_whatsapp", business_whatsapp);

      if (known_for !== businessDetails?.known_for)
        payload.append("known_for", known_for);
      if (must_order !== businessDetails?.must_order)
        payload.append("must_order", must_order);
      if (type !== businessDetails?.type) payload.append("type", type);
      if (year_of_established !== businessDetails?.year_of_established)
        payload.append("year_of_established", year_of_established);

      if (businessDetails?.profile_image !== profile_image[0]) {
        payload.append("profile_image", profile_image[0]);
      }

      if (phone_number_2 !== businessDetails?.phone_number_2)
        payload.append("phone_number_2", phone_number_2);

      if (business_instagram !== businessDetails?.business_instagram)
        payload.append("business_instagram", business_instagram);

      if (business_website !== businessDetails?.business_website)
        payload.append("business_website", business_website);

      if (average_bill !== businessDetails?.average_bill)
        payload.append("average_bill", average_bill);

      if (business_capacity !== businessDetails?.business_capacity)
        payload.append("business_capacity", business_capacity);

      if (business_email !== businessDetails?.business_email)
        payload.append("business_email", business_email);

      const res = await axiosPatch(
        API_ROUTER.UPDATE_BASIC_DETAILS(businessId),
        payload,
        "multipart/form-data"
      );

      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(
          TOAST_ALERTS.BUSINESS_ADDRESS_UPDATE_SUCCESS,
          TOAST_TYPES.SUCCESS
        );
        reset(defaultValues);
        await fetchData();
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  const onProfileImage = useCallback(
    (files) => {
      const clonedData = [];
      Array.from(files).map(async (data) => {
        Object.assign(data, { preview: URL.createObjectURL(data) });
        clonedData.push(data);
      });
      setValue("profile_image", clonedData, {
        shouldValidate: true,
        shouldDirty: true,
      });
    },
    [setValue]
  );

  const onCancel = () => {
    reset(defaultValues);
  };

  return (
    <div className="basic-details-block">
      <h3 className="basic-title">
        {t(
          "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.title"
        )}
      </h3>

      <div className="basic-details-block-form">
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
          <div className="form-group-two">
            <div className="form-group tooltip-block">
              <RHFTextInput
                name="name"
                label={t(
                  "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.name.label"
                )}
                fieldHint={t(
                  "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.name.hint"
                )}
              />
            </div>
            <div className="form-group">
              <RHFSelectInput
                label={t(
                  "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.year_of_established.label"
                )}
                name={"year_of_established"}
              >
                <option value={""}>
                  {t(
                    "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.year_of_established.select"
                  )}
                </option>
                {YEARS?.map((value) => (
                  <option key={value} value={value?.toString()}>
                    {value}
                  </option>
                ))}
              </RHFSelectInput>
            </div>
          </div>
          <div className="form-group-two">
            <div className="form-group">
              <RHFPhoneInput
                name="contact_number"
                label={t(
                  "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.contact_number.label"
                )}
                onChangeCountryCode={({ dialCode }) =>
                  setValue("country_code", dialCode)
                }
              />
            </div>
            <div className="form-group">
              <RHFPhoneInput
                name="business_whatsapp"
                label={t(
                  "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.business_whatsapp.label"
                )}
                onChangeCountryCode={({ dialCode }) =>
                  setValue("country_code", dialCode)
                }
              />
            </div>
          </div>
          <div className="form-group-two">
            <div className="form-group">
              <RHFSelectInput
                name={"type"}
                label={t(
                  "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.type.label"
                )}
                disabled={isTypeLoading}
              >
                <option value={""}>
                  {t(
                    "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.type.select"
                  )}
                </option>
                {businessTypes &&
                  businessTypes.length > 0 &&
                  businessTypes.map((item) => (
                    <option key={item.id} value={item.id.toString()}>
                      {getTranslatedData(currentLang, item, "type")}
                    </option>
                  ))}
              </RHFSelectInput>
            </div>
            <div className="form-group">
              <RHFTextInput
                name="must_order"
                label={t(
                  "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.must_order.label"
                )}
                fieldHint={t(
                  "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.must_order.hint"
                )}
              />
            </div>
          </div>
          <div className="form-group-two">
            <div className="form-group">
              <RHFPhoneInput
                name="phone_number_2"
                label={t(
                  "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.phone_number_2.label"
                )}
                placeholder={t(
                  "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.phone_number_2.label"
                )}
              />
            </div>
            <div className="form-group">
              <RHFTextInput
                name="business_instagram"
                label={t(
                  "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.business_instagram.label"
                )}
                placeholder={t(
                  "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.business_instagram.label"
                )}
                type="url"
              />
            </div>
          </div>
          <div className="form-group-two">
            <div className="form-group">
              <RHFTextInput
                name="business_website"
                label={t(
                  "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.business_website.label"
                )}
                placeholder={t(
                  "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.business_website.label"
                )}
                type="url"
              />
            </div>
            <div className="form-group">
              <RHFTextInput
                name="average_bill"
                label={t(
                  "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.average_bill.label"
                )}
                placeholder={t(
                  "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.average_bill.label"
                )}
                type="number"
                inputProps={{ min: 1 }}
              />
            </div>
          </div>
          <div className="form-group-two">
            <div className="form-group">
              <RHFTextInput
                name="business_capacity"
                label={t(
                  "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.business_capacity.label"
                )}
                placeholder={t(
                  "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.business_capacity.label"
                )}
                type="number"
                inputProps={{ min: 1 }}
              />
            </div>
            <div className="form-group">
              <RHFTextInput
                name="business_email"
                label={t(
                  "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.business_email.label"
                )}
                placeholder={t(
                  "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.business_email.label"
                )}
                type="email"
              />
            </div>
          </div>
          <div className="form-group-two">
            <div className="form-group">
              <RHFTextInput
                name="known_for"
                label={t(
                  "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.known_for.label"
                )}
                fieldHint={t(
                  "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.known_for.hint"
                )}
              />
            </div>
            <div className="form-group">
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <RHFTextAreaInput
                  name="business_description"
                  label={t(
                    "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.business_description.label"
                  )}
                />
              </Form.Group>
            </div>
          </div>
          <div className="profile-form">
            <div>
              <RHFBusinessProfileImage
                name="profile_image"
                multiple={false}
                label={t(
                  "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.fields.profileImage.label"
                )}
                onChange={onProfileImage}
                onRemoveFile={() =>
                  setValue("profile_image", "", { shouldValidate: true })
                }
                accept=".jpg, .jpeg, .png"
              />
            </div>
          </div>
          <div className="btn-group-main">
            <Button variant="common-btn" type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? t(
                    "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.button.updating"
                  )
                : isDirty
                ? t(
                    "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.button.save"
                  )
                : t(
                    "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.button.update"
                  )}
            </Button>
            <Button
              variant="btn-common-btn"
              onClick={onCancel}
              disabled={isSubmitting}
            >
              {t(
                "dashboard.business.settings.businessProfile.tabs.basicDetails.form.detail.button.cancel"
              )}
            </Button>
          </div>
        </FormProvider>
      </div>
    </div>
  );
};

export default ProfileBasicDetailForm;
