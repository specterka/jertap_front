import { useToaster } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import { useCallback, useMemo } from "react";
import { Button, Form } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { axiosPost } from "@/services/axiosHelper";
import { useForm } from "react-hook-form";
import { FormProvider, RHFTextAreaInput } from "@/components/hook-form";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { useTranslate } from "@/locales";
import { AddAdvertise } from "@/styles/profile.style";

const AdsRequestForm = () => {
  // Form Config
  const defaultValues = useMemo(() => ({ cover_img: "", description: "" }), []);

  const { t } = useTranslate();

  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        cover_img: yup
          .mixed()
          .test(
            "isExist",
            t(
              "dashboard.business.advertisement.form.fields.cover_image.errors.test_isExist"
            ),
            (value) => !!value
          )
          .test(
            "fileSize",
            t(
              "dashboard.business.advertisement.form.fields.cover_image.errors.test_fileSize"
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
              "dashboard.business.advertisement.form.fields.cover_image.errors.test_fileType"
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
        description: yup
          .string()
          .required(
            t(
              "dashboard.business.advertisement.form.fields.description.errors.required"
            )
          )
          .trim(
            t(
              "dashboard.business.advertisement.form.fields.description.errors.invalid"
            )
          )
          .min(
            5,
            t(
              "dashboard.business.advertisement.form.fields.description.errors.minLength"
            )
          )
          .max(
            10000,
            t(
              "dashboard.business.advertisement.form.fields.description.errors.maxLength"
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

  const { toaster } = useToaster();

  // Constants
  const {
    handleSubmit,
    formState: { isSubmitting, errors },
    setValue,
    reset,
    watch,
  } = methods;

  const selectedImage = watch("cover_img");

  const onSubmitForm = async (formData) => {
    try {
      const { cover_img, description } = formData;
      const payload = new FormData();
      payload.append("description", description);
      payload.append("cover_img", cover_img[0]);
      const res = await axiosPost(
        API_ROUTER.BUSINESS_ADS_REQUEST(),
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
        toaster(TOAST_ALERTS.BUSINESS_ADS_REQUEST_SUCCESS, TOAST_TYPES.SUCCESS);
        reset();
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

      setValue("cover_img", clonedData, { shouldValidate: true });
    },
    [setValue]
  );

  const onRemoveImage = () => {
    setValue("cover_img", "");
  };

  const onCancel = () => {
    reset(defaultValues);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
      <AddAdvertise>
        <div className="img-gallery-block">
          <h3>
            {t(
              "dashboard.business.advertisement.form.fields.cover_image.label"
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
                  {errors?.cover_img ? errors?.cover_img?.message : ""}
                </Form.Text>
              </>
            )}
          </div>
        </div>
        <div className="basic-details-block">
          <div className="basic-details-block-form">
            <div className="form-group-two">
              <div className="form-group">
                <RHFTextAreaInput
                  name="description"
                  label={t(
                    "dashboard.business.advertisement.form.fields.description.label"
                  )}
                  type="text"
                  rows={8}
                />
              </div>
            </div>

            <div className="btn-group-main">
              <Button
                variant="common-btn"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? t("dashboard.business.advertisement.form.button.submitting")
                  : t("dashboard.business.advertisement.form.button.submit")}
              </Button>
              <Button
                variant="btn-common-btn"
                onClick={onCancel}
                disabled={isSubmitting}
              >
                {t("dashboard.business.advertisement.form.button.cancel")}
              </Button>
            </div>
          </div>
        </div>
      </AddAdvertise>
    </FormProvider>
  );
};

export default AdsRequestForm;
