import {
  FormProvider,
  RHFCheckboxInput,
  RHFSelectInput,
  RHFTextAreaInput,
  RHFTextInput,
  RHFTimeInput,
} from "@/components/hook-form";
import React, { useCallback, useEffect, useMemo } from "react";
import * as yup from "yup";
import { Button, Form, Modal } from "react-bootstrap";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFFileInput from "@/components/hook-form/RHFFileInput";
import { useMetaData, useToaster } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import { axiosDelete, axiosPatch, axiosPost } from "@/services/axiosHelper";
import {
  DAYS,
  OFFER_TYPES,
  TOAST_ALERTS,
  TOAST_TYPES,
} from "@/constants/keywords";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useTranslate } from "@/locales";
import { fTime } from "@/utils/formatTime";

const AddUpdatePromotion = ({
  isOpen = false,
  onClose = () => {},
  fetchData = () => {},
  isEdit = false,
  editMenu = null,
}) => {
  // Form Config
  const { t } = useTranslate();
  const defaultValues = useMemo(
    () => ({
      title: isEdit ? editMenu?.title : "",
      image: editMenu?.image ? [editMenu?.image] : "",
      apply_on_everyday: isEdit ? editMenu?.apply_on_everyday : true,
      offer_start_time: isEdit ? editMenu?.offer_start_time : null,
      offer_end_time: isEdit ? editMenu?.offer_end_time : null,
      term_and_condition: isEdit ? editMenu?.term_and_condition : "",
      offer_type: isEdit ? editMenu?.offer_type : "",
      discount: isEdit ? editMenu?.discount.toString() : "",
      is_active: isEdit ? editMenu?.is_active : true,
      days: isEdit
        ? editMenu?.week_days?.map((item) => ({ ...item, key: item.id }))
        : [{ day: "" }],
      items: isEdit
        ? editMenu?.applicable_on?.map((itemData) => ({
            ...itemData,
            menuItem: itemData.item.id?.toString(),
            key: itemData.item.id?.toString(),
          }))
        : [{ menuItem: "" }],
    }),
    [isEdit, editMenu]
  );

  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        title: yup
          .string()
          .required(
            t("dashboard.business.promotions.form.fields.title.errors.required")
          )
          .trim(
            t("dashboard.business.promotions.form.fields.title.errors.invalid")
          )
          .matches(
            /^(?=.*[a-zA-Z])[a-zA-Z0-9 !@#$%=^&*()"'`|/_+{}\[\]:;<>,.?~\\-]+$/,
            t("dashboard.business.promotions.form.fields.title.errors.regex")
          ),
        offer_type: yup
          .string()
          .required(
            t(
              "dashboard.business.promotions.form.fields.offer_type.errors.required"
            )
          ),
        image: yup
          .mixed()
          .test(
            "isExist",
            t(
              "dashboard.business.promotions.form.fields.image.errors.test_isExist"
            ),
            (value) => value
          )
          .test(
            "fileSize",
            t(
              "dashboard.business.promotions.form.fields.image.errors.test_fileSize"
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
              "dashboard.business.promotions.form.fields.image.errors.test_fileType"
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
        discount: yup.string().when("offer_type", {
          is: (type) => ["percentage", "fixed_amount"].includes(type),
          then: (schema) =>
            schema
              .required(
                t(
                  "dashboard.business.promotions.form.fields.discount.errors.required"
                )
              )
              .trim(
                t(
                  "dashboard.business.promotions.form.fields.discount.errors.invalid"
                )
              )
              .matches(
                /^\d+(\.\d+)?$/,
                t(
                  "dashboard.business.promotions.form.fields.discount.errors.regex"
                )
              ),
          otherwise: (schema) => schema,
        }),
        apply_on_everyday: yup.bool().oneOf([true, false]),
        is_active: yup.bool().oneOf([true, false]),
        term_and_condition: yup
          .string()
          .required(
            t(
              "dashboard.business.promotions.form.fields.term_and_condition.errors.required"
            )
          )
          .trim(
            t(
              "dashboard.business.promotions.form.fields.term_and_condition.errors.invalid"
            )
          )
          .matches(
            /^(?=.*[a-zA-Z])[a-zA-Z0-9 !@#$%=^&*()"'`|/_+{}\[\]:;<>,.?~\\-]+$/,
            t(
              "dashboard.business.promotions.form.fields.term_and_condition.errors.regex"
            )
          ),
        days: yup.array().when("apply_on_everyday", {
          is: (val) => !val,
          then: (schema) =>
            schema
              .of(
                yup.object().shape({
                  day: yup
                    .string()
                    .required(
                      t(
                        "dashboard.business.promotions.form.fields.days.errors.required"
                      )
                    ),
                })
              )
              .min(
                1,
                t(
                  "dashboard.business.promotions.form.fields.days.errors.required"
                )
              ),
          otherwise: (schema) => schema,
        }),
        items: yup
          .array()
          .of(
            yup.object().shape({
              menuItem: yup
                .string()
                .required(
                  t(
                    "dashboard.business.promotions.form.fields.items.errors.required"
                  )
                ),
            })
          )
          .min(
            1,
            t("dashboard.business.promotions.form.fields.items.errors.required")
          ),
        offer_start_time: yup
          .mixed()
          .required(
            t(
              "dashboard.business.promotions.form.fields.offer_start_time.errors.required"
            )
          ),
        offer_end_time: yup
          .mixed()
          .required(
            t(
              "dashboard.business.promotions.form.fields.offer_end_time.errors.required"
            )
          ),
      })
      .required()
      .strict(true);
  }, []);

  // Hooks
  const { businessId } = useParams();
  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  const [allMenus, isMenuLoading] = useMetaData(
    API_ROUTER.GET_ALL_MENU_ITEMS(businessId)
  );

  // Constants
  const {
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
    setValue,
    control,
    reset,
    watch,
  } = methods;

  const isEveryday = watch("apply_on_everyday");
  const selectedOfferType = watch("offer_type");
  const selectedStartTime = watch("offer_start_time");
  const selectedEndTime = watch("offer_end_time");

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]);

  const { append, fields, remove } = useFieldArray({
    control,
    name: "days",
  });

  const itemsHandler = useFieldArray({
    control,
    name: "items",
  });

  const { toaster } = useToaster();

  // Handlers

  // Handlers
  const onCloseModal = () => {
    onClose();
    reset();
  };

  const onEditMenu = async (formData) => {
    try {
      const {
        title,
        image,
        apply_on_everyday,
        offer_start_time,
        offer_end_time,
        term_and_condition,
        offer_type,
        discount,
        is_active,
        days,
        items,
      } = formData;

      const payload = new FormData();

      if (title !== editMenu?.title) payload.append("title", title);
      if (term_and_condition !== editMenu?.term_and_condition)
        payload.append("term_and_condition", term_and_condition);
      if (apply_on_everyday !== editMenu?.apply_on_everyday)
        payload.append("apply_on_everyday", apply_on_everyday);
      if (discount != editMenu?.discount) payload.append("discount", +discount);

      if (image[0] != editMenu?.image) payload.append("image", image[0]);

      if (offer_type != editMenu?.offer_type)
        payload.append("offer_type", offer_type);

      if (is_active != editMenu?.is_active)
        payload.append("is_active", is_active);

      if (offer_start_time != editMenu?.offer_start_time)
        payload.append(
          "offer_start_time",
          typeof offer_start_time === "string"
            ? offer_start_time
            : fTime(offer_start_time)
        );

      if (offer_end_time != editMenu?.offer_end_time)
        payload.append(
          "offer_end_time",
          typeof offer_end_time === "string"
            ? offer_end_time
            : fTime(offer_end_time)
        );

      const applicable_on = [];

      if (editMenu?.applicable_on?.length > 0) {
        editMenu?.applicable_on?.forEach((item) => {
          if (!items.some((ing) => ing?.menuItem == item?.item?.id))
            applicable_on.push(item?.id);
        });
      }

      if (items?.length > 0) {
        items.forEach((item) => {
          if (
            !editMenu?.applicable_on.some(
              (ing) => ing?.item?.id == item?.menuItem
            )
          )
            payload.append(`items`, item?.menuItem);
        });
      }

      const week_days = [];

      if (editMenu?.week_days?.length > 0) {
        editMenu?.week_days?.forEach((item) => {
          if (!days.some((ing) => ing?.day === item?.day))
            week_days.push(item.id);
        });
      }

      if (days?.length > 0) {
        days.forEach((item) => {
          if (!editMenu?.week_days.some((ing) => ing?.day === item?.day))
            payload.append(`days`, item?.day);
        });
      }

      const res = await axiosPatch(
        API_ROUTER.UPDATE_BUSINESS_PROMOTION(businessId, editMenu?.id),
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
        if (week_days?.length > 0) {
          await Promise.all(
            week_days?.map(
              async (id) =>
                await axiosDelete(
                  API_ROUTER.DELETE_BUSINESS_PROMOTION_DAY(businessId, id)
                )
            )
          );
        }

        if (applicable_on?.length > 0) {
          await Promise.all(
            applicable_on?.map(
              async (id) =>
                await axiosDelete(
                  API_ROUTER.DELETE_BUSINESS_PROMOTION_ITEM(businessId, id)
                )
            )
          );
        }

        toaster(
          TOAST_ALERTS.BUSINESS_PROMOTION_UPDATE_SUCCESS,
          TOAST_TYPES.SUCCESS
        );
        reset();
        onCloseModal();
        fetchData();
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  const onAddMenu = async (formData) => {
    try {
      const {
        title,
        image,
        apply_on_everyday,
        offer_start_time,
        offer_end_time,
        term_and_condition,
        offer_type,
        discount,
        is_active,
        days,
        items,
      } = formData;

      const payload = new FormData();

      payload.append("title", title);
      payload.append("term_and_condition", term_and_condition);
      payload.append("apply_on_everyday", apply_on_everyday);
      if (discount) payload.append("discount", +discount);
      payload.append("image", image[0]);
      payload.append("offer_type", offer_type);
      payload.append("is_active", is_active);
      payload.append(
        "offer_start_time",
        typeof offer_start_time === "string"
          ? offer_start_time
          : fTime(offer_start_time)
      );
      payload.append(
        "offer_end_time",
        typeof offer_end_time === "string"
          ? offer_end_time
          : fTime(offer_end_time)
      );

      if (!apply_on_everyday && days?.length > 0) {
        days.forEach((item) => payload.append(`days`, item?.day));
      }

      if (items?.length > 0) {
        items.forEach((item) => payload.append(`items`, item?.menuItem));
      }

      const res = await axiosPost(
        API_ROUTER.CREATE_PROMOTION(businessId),
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
          TOAST_ALERTS.BUSINESS_PROMOTION_CREATE_SUCCESS,
          TOAST_TYPES.SUCCESS
        );
        reset();
        onCloseModal();
        fetchData();
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  const onSubmitForm = async (formData) => {
    if (isEdit) onEditMenu(formData);
    else onAddMenu(formData);
  };

  const onCoverImageChange = useCallback(
    (files) => {
      const clonedData = [];
      Array.from(files).map(async (data) => {
        Object.assign(data, { preview: URL.createObjectURL(data) });
        clonedData.push(data);
      });
      setValue("image", clonedData, { shouldValidate: true });
    },
    [setValue]
  );

  const onRemoveCoverImage = () => {
    setValue("image", "", { shouldValidate: true });
  };

  return (
    <Modal show={isOpen} onHide={onCloseModal} animation className="aad-modal">
      <Modal.Header closeButton>
        <Modal.Title>
          {isEdit
            ? t("dashboard.business.promotions.form.update.heading")
            : t("dashboard.business.promotions.form.add.heading")}
        </Modal.Title>
      </Modal.Header>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
        <Modal.Body>
          <div>
            <RHFTextInput
              name="title"
              label={t("dashboard.business.promotions.form.fields.title.label")}
              placeholder={t(
                "dashboard.business.promotions.form.fields.title.placeholder"
              )}
              formControlClass={"mb-3"}
            />
          </div>
          <div>
            <RHFTextAreaInput
              name="term_and_condition"
              label={t(
                "dashboard.business.promotions.form.fields.term_and_condition.label"
              )}
              placeholder={t(
                "dashboard.business.promotions.form.fields.term_and_condition.placeholder"
              )}
              formControlClass={"mb-3"}
            />
          </div>
          <div>
            <RHFSelectInput
              name="offer_type"
              label={t(
                "dashboard.business.promotions.form.fields.offer_type.label"
              )}
            >
              <option>
                {t(
                  "dashboard.business.promotions.form.fields.offer_type.select"
                )}
              </option>
              {OFFER_TYPES.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </RHFSelectInput>
          </div>
          {["percentage", "fixed_amount"].includes(selectedOfferType) ? (
            <div>
              <RHFTextInput
                name="discount"
                label={t(
                  "dashboard.business.promotions.form.fields.discount.label"
                )}
                placeholder={t(
                  "dashboard.business.promotions.form.fields.discount.placeholder"
                )}
                formControlClass={"mb-3"}
              />
            </div>
          ) : null}
          <div className="veg-detail">
            <RHFCheckboxInput
              name="apply_on_everyday"
              label={t(
                "dashboard.business.promotions.form.fields.apply_on_everyday.label"
              )}
              formControlClass={"mb-3"}
            />
          </div>

          {!isEveryday ? (
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <Form.Label className="form-label">
                  {t("dashboard.business.promotions.form.fields.days.label")}
                </Form.Label>
                <Link
                  href="#"
                  className="common-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    append({ day: "" });
                  }}
                >
                  {t(
                    "dashboard.business.promotions.form.fields.days.button.add"
                  )}
                </Link>
              </div>
              {fields?.map((item, index) => (
                <div
                  className="d-flex align-items-start  gap-3 common-btn-block"
                  key={item.id}
                >
                  <div className="d-flex ">
                    <RHFSelectInput
                      name={`days[${index}].day`}
                      formControlClass={"mb-3"}
                      disabled={!!item.key}
                    >
                      <option value="">
                        {t(
                          "dashboard.business.promotions.form.fields.days.select"
                        )}
                      </option>
                      {DAYS.map((item) => (
                        <option key={item.value}>{item.label}</option>
                      ))}
                    </RHFSelectInput>
                  </div>
                  <div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        remove(index);
                      }}
                    >
                      {t(
                        "dashboard.business.promotions.form.fields.days.button.remove"
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
          <div className="d-block d-sm-flex my-3">
            <div className="me-3">
              <RHFTimeInput
                name="offer_start_time"
                label={t(
                  "dashboard.business.promotions.form.fields.offer_start_time.label"
                )}
                max={selectedEndTime ? selectedEndTime : ""}
              />
            </div>
            <div>
              <RHFTimeInput
                name="offer_end_time"
                label={t(
                  "dashboard.business.promotions.form.fields.offer_end_time.label"
                )}
                min={selectedStartTime ? selectedStartTime : ""}
              />
            </div>
          </div>
          <RHFFileInput
            name="image"
            multiple={false}
            label={t("dashboard.business.promotions.form.fields.image.label")}
            onChange={onCoverImageChange}
            onRemoveFile={onRemoveCoverImage}
          />

          <div className="d-flex flex-column">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <Form.Label className="form-label">
                {t("dashboard.business.promotions.form.fields.items.label")}
              </Form.Label>
              <Link
                href="#"
                className="common-btn"
                onClick={(e) => {
                  e.preventDefault();
                  itemsHandler.append({ menuItem: "" });
                }}
              >
                {t(
                  "dashboard.business.promotions.form.fields.items.button.add"
                )}
              </Link>
            </div>

            {itemsHandler?.fields?.map((item, index) => (
              <div
                className="d-flex align-items-start justify-content-space-between gap-3 common-btn-block"
                key={item.id}
              >
                <div className="w-100">
                  <RHFSelectInput
                    name={`items[${index}].menuItem`}
                    formControlClass={"mb-3"}
                    disabled={!!item.key || isMenuLoading}
                  >
                    <option value="">
                      {t(
                        "dashboard.business.promotions.form.fields.items.select"
                      )}
                    </option>
                    {allMenus &&
                      allMenus.length > 0 &&
                      allMenus.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.Item_name}
                        </option>
                      ))}
                  </RHFSelectInput>
                </div>
                <div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      itemsHandler.remove(index);
                    }}
                  >
                    {t(
                      "dashboard.business.promotions.form.fields.items.button.remove"
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="veg-detail">
            <RHFCheckboxInput
              name="is_active"
              label={t(
                "dashboard.business.promotions.form.fields.is_active.label"
              )}
              formControlClass={"mb-3"}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="common-btn"
            onClick={onCloseModal}
            disabled={isSubmitting || isSubmitSuccessful}
            type="reset"
          >
            {t(
              "dashboard.business.dashboard.cards.menu_item_count.form.button.cancel"
            )}
          </Button>
          <Button
            className="common-btn"
            disabled={isSubmitting || isSubmitSuccessful}
            type="submit"
          >
            {isSubmitting
              ? t(
                  "dashboard.business.dashboard.cards.menu_item_count.form.button.isSubmitting"
                )
              : isEdit
              ? "Update"
              : t(
                  "dashboard.business.dashboard.cards.menu_item_count.form.button.add"
                )}
          </Button>
        </Modal.Footer>
      </FormProvider>
    </Modal>
  );
};

export default AddUpdatePromotion;
