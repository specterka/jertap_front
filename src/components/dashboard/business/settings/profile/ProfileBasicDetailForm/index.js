import { useAuth, useToaster } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import { useCallback, useMemo } from "react";
import { Button, Form } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { axiosPatch } from "@/services/axiosHelper";
import { useForm } from "react-hook-form";
import {
  FormProvider,
  RHFDateInput,
  RHFTextInput,
} from "@/components/hook-form";
import {
  TOAST_ALERTS,
  TOAST_TYPES,
  USER_TYPES_MAPPER,
} from "@/constants/keywords";
import { format } from "date-fns";
import { useTranslate } from "@/locales";

const ProfileBasicDetailForm = ({ user }) => {
  // Form Config
  const defaultValues = useMemo(
    () => ({
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      profile_image: user?.profile_image ? [user?.profile_image] : "",
      date_of_birth: user?.date_of_birth
        ? new Date(user?.date_of_birth)
        : new Date(),
      email: user?.email || "",
      role: user?.role ? USER_TYPES_MAPPER[user?.role] : "",
      mobile_number: user?.mobile_number || "",
    }),
    [user]
  );
  const { t } = useTranslate();
  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        first_name: yup
          .string()
          .trim(
            t(
              "dashboard.business.settings.profile.tabs.userDetails.form.fields.first_name.errors.invalid"
            )
          )
          .required(
            t(
              "dashboard.business.settings.profile.tabs.userDetails.form.fields.first_name.errors.required"
            )
          )
          .min(
            1,
            t(
              "dashboard.business.settings.profile.tabs.userDetails.form.fields.first_name.errors.minLength"
            )
          )
          .max(
            50,
            t(
              "dashboard.business.settings.profile.tabs.userDetails.form.fields.first_name.errors.maxLength"
            )
          )
          .matches(
            /^(?=.*[A-Za-z])[A-Za-z0-9 ]*$/,
            t(
              "dashboard.business.settings.profile.tabs.userDetails.form.fields.first_name.errors.regex"
            )
          ),
        last_name: yup
          .string()
          .trim(
            t(
              "dashboard.business.settings.profile.tabs.userDetails.form.fields.last_name.errors.invalid"
            )
          )
          .required(
            t(
              "dashboard.business.settings.profile.tabs.userDetails.form.fields.last_name.errors.required"
            )
          )
          .min(
            1,
            t(
              "dashboard.business.settings.profile.tabs.userDetails.form.fields.last_name.errors.minLength"
            )
          )
          .max(
            50,
            t(
              "dashboard.business.settings.profile.tabs.userDetails.form.fields.last_name.errors.maxLength"
            )
          )
          .matches(
            /^(?=.*[A-Za-z])[A-Za-z0-9 ]*$/,
            t(
              "dashboard.business.settings.profile.tabs.userDetails.form.fields.last_name.errors.regex"
            )
          ),

        profile_image: yup
          .mixed()
          .test(
            "isExist",
            t(
              "dashboard.business.settings.profile.tabs.userDetails.form.fields.profileImage.errors.required"
            ),
            (value) => !!value
          )
          .test(
            "fileSize",
            t(
              "dashboard.business.settings.profile.tabs.userDetails.form.fields.profileImage.errors.size"
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
              "dashboard.business.settings.profile.tabs.userDetails.form.fields.profileImage.errors.type"
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
        date_of_birth: yup.date(),
      })
      .required()
      .strict(true);
  }, [t]);

  // Hooks
  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  const { update } = useAuth();

  const { toaster } = useToaster();

  // Constants
  const {
    handleSubmit,
    formState: { isSubmitting, errors },
    setValue,
    reset,
    watch,
  } = methods;

  const selectedImage = watch("profile_image");

  const onSubmitForm = async (formData) => {
    try {
      const { profile_image, first_name, last_name, date_of_birth } = formData;

      const payload = new FormData();
      payload.append("first_name", first_name);
      payload.append("last_name", last_name);
      if (date_of_birth)
        payload.append("date_of_birth", format(date_of_birth, "yyyy-MM-dd"));
      if (user?.profile_image !== profile_image[0]) {
        payload.append("profile_image", profile_image[0]);
      }

      const res = await axiosPatch(
        API_ROUTER.UPDATE_USER,
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
        toaster(TOAST_ALERTS.USER_PROFILE_UPDATE_SUCCESS, TOAST_TYPES.SUCCESS);
        await update();
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

      setValue("profile_image", clonedData, { shouldValidate: true });
    },
    [setValue]
  );

  const onRemoveImage = () => {
    setValue("profile_image", "");
  };

  const onCancel = () => {
    reset(defaultValues);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
      <div className="img-gallery-block">
        <h3>
          {t(
            "dashboard.business.settings.profile.tabs.userDetails.form.fields.profileImage.label"
          )}
        </h3>
        <div className="img-gallery-block-inner">
          {selectedImage && selectedImage?.length > 0 ? (
            <div className="img-gallery-block-inner-img position-relative">
              <Button
                className="btn-danger position-absolute rounded-5 start-100 top-0 translate-middle"
                onClick={onRemoveImage}
              >
                x
              </Button>
              <img
                src={selectedImage[0]?.preview || selectedImage[0]}
                alt={`business-image`}
              />
            </div>
          ) : (
            <>
              <div className="img-gallery-block-inner-img plus-icon cursor-pointer-block">
                <label htmlFor="fileInput">
                  <p>+</p>
                </label>
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => onProfileImage(e.target.files)}
                  multiple={false}
                />
              </div>
              <Form.Text className="text-danger">
                {errors?.profile_image ? errors?.profile_image?.message : ""}
              </Form.Text>
            </>
          )}
        </div>
      </div>
      <div className="basic-details-block">
        <h3 className="basic-title">
          {t("dashboard.business.settings.profile.tabs.userDetails.form.title")}
        </h3>

        <div className="basic-details-block-form">
          <div className="form-group-two">
            <div className="form-group">
              <RHFTextInput
                name="first_name"
                label={t(
                  "dashboard.business.settings.profile.tabs.userDetails.form.fields.first_name.label"
                )}
              />
            </div>
            <div className="form-group">
              <RHFTextInput
                name="last_name"
                label={t(
                  "dashboard.business.settings.profile.tabs.userDetails.form.fields.last_name.label"
                )}
              />
            </div>
          </div>

          <div className="form-group-two">
            <div className="form-group">
              <RHFDateInput
                name="date_of_birth"
                label={t(
                  "dashboard.business.settings.profile.tabs.userDetails.form.fields.date_of_birth.label"
                )}
              />
            </div>
            <div className="form-group">
              <RHFTextInput
                name="email"
                label={t(
                  "dashboard.business.settings.profile.tabs.userDetails.form.fields.email.label"
                )}
                disabled
              />
            </div>
          </div>
          <div className="form-group-two">
            <div className="form-group">
              <RHFTextInput
                name="role"
                label={t(
                  "dashboard.business.settings.profile.tabs.userDetails.form.fields.role.label"
                )}
                disabled
              />
            </div>
            <div className="form-group">
              <RHFTextInput
                name="mobile_number"
                label={t(
                  "dashboard.business.settings.profile.tabs.userDetails.form.fields.mobile_number.label"
                )}
                disabled
              />
            </div>
          </div>
          <div className="btn-group-main">
            <Button variant="common-btn" type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? t(
                    "dashboard.business.settings.profile.tabs.userDetails.form.button.saving"
                  )
                : t(
                    "dashboard.business.settings.profile.tabs.userDetails.form.button.save"
                  )}
            </Button>
            <Button
              variant="btn-common-btn"
              onClick={onCancel}
              disabled={isSubmitting}
            >
              {t(
                "dashboard.business.settings.profile.tabs.userDetails.form.button.cancel"
              )}
            </Button>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default ProfileBasicDetailForm;
