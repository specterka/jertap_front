import {
  FormProvider,
  RHFCheckboxInput,
  RHFSelectInput,
  RHFTextInput,
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
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useLocales, useTranslate } from "@/locales";
import { getTranslatedData } from "@/utils/helper";

const AddUpdateMenuModal = ({
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
      cover_image: editMenu?.cover_image ? [editMenu?.cover_image] : "",
      Item_name: editMenu?.Item_name || "",
      price: editMenu?.price?.toString() || "",
      is_veg: editMenu?.is_veg || false,
      description: editMenu?.description || "",
      ingredients: isEdit
        ? editMenu?.item_ingredients?.map((item) => ({ ...item, key: item.id }))
        : [{ ingredients: "" }],
      sub_category: isEdit ? editMenu?.sub_category?.id?.toString() : "",
      menu_type: isEdit ? editMenu?.menu_type?.id?.toString() : "",
    }),
    [isEdit, editMenu]
  );

  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        Item_name: yup
          .string()
          .required(
            t(
              "dashboard.business.dashboard.cards.menu_item_count.form.fields.Item_name.errors.required"
            )
          )
          .trim(
            t(
              "dashboard.business.dashboard.cards.menu_item_count.form.fields.Item_name.errors.invalid"
            )
          )
          .matches(
            /^(?=.*[a-zA-Z])[a-zA-Z0-9 !@#$%=^&*()"'`|/_+{}\[\]:;<>,.?~\\-]+$/,
            t(
              "dashboard.business.dashboard.cards.menu_item_count.form.fields.Item_name.errors.regex"
            )
          ),
        menu_type: yup
          .string()
          .required(
            t(
              "dashboard.business.dashboard.cards.menu_item_count.form.fields.menu_type.errors.required"
            )
          ),
        cover_image: yup
          .mixed()
          .test(
            "isExist",
            t(
              "dashboard.business.dashboard.cards.menu_item_count.form.fields.cover_image.errors.test_isExist"
            ),
            (value) => value
          )
          .test(
            "fileSize",
            t(
              "dashboard.business.dashboard.cards.menu_item_count.form.fields.cover_image.errors.test_fileSize"
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
              "dashboard.business.dashboard.cards.menu_item_count.form.fields.cover_image.errors.test_fileType"
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
        price: yup
          .string()
          .required(
            t(
              "dashboard.business.dashboard.cards.menu_item_count.form.fields.price.errors.required"
            )
          )
          .trim(
            t(
              "dashboard.business.dashboard.cards.menu_item_count.form.fields.price.errors.invalid"
            )
          )
          .matches(
            /^\d+(\.\d+)?$/,
            t(
              "dashboard.business.dashboard.cards.menu_item_count.form.fields.price.errors.regex"
            )
          ),
        is_veg: yup.bool().oneOf([true, false]),
        description: yup
          .string()
          .required(
            t(
              "dashboard.business.dashboard.cards.menu_item_count.form.fields.description.errors.required"
            )
          )
          .trim(
            t(
              "dashboard.business.dashboard.cards.menu_item_count.form.fields.description.errors.invalid"
            )
          )
          .matches(
            /^(?=.*[a-zA-Z])[a-zA-Z0-9 !@#$%=^&*()"'`|/_+{}\[\]:;<>,.?~\\-]+$/,
            t(
              "dashboard.business.dashboard.cards.menu_item_count.form.fields.description.errors.regex"
            )
          ),
        ingredients: yup.array().of(
          yup.object().shape({
            ingredients: yup
              .string()
              .required(
                t(
                  "dashboard.business.dashboard.cards.menu_item_count.form.fields.ingredients.errors.required"
                )
              )
              .trim(
                t(
                  "dashboard.business.dashboard.cards.menu_item_count.form.fields.ingredients.errors.invalid"
                )
              )
              .matches(
                /^(?=.*[a-zA-Z])[a-zA-Z0-9 !@#$%=^&*()"'`|/_+{}\[\]:;<>,.?~\\-]+$/,
                t(
                  "dashboard.business.dashboard.cards.menu_item_count.form.fields.ingredients.errors.regex"
                )
              ),
          })
        ),
        sub_category: yup
          .string()
          .required(
            t(
              "dashboard.business.dashboard.cards.menu_item_count.form.fields.sub_category.errors.required"
            )
          ),
      })
      .required()
      .strict(true);
  }, []);

  // Hooks
  const { businessId } = useParams();
  const { currentLang } = useLocales();
  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });
  const [subCategories, isSubCategoriesLoading] = useMetaData(
    API_ROUTER.GET_SUB_CATEGORIES(businessId)
  );
  const [menuTypes, isMenuTypeLoading] = useMetaData(API_ROUTER.GET_MENU_TYPES);

  // Handlers
  const onCloseModal = () => onClose();

  // Constants
  const {
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
    setValue,
    control,
    reset,
  } = methods;

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]);

  const { append, fields, remove } = useFieldArray({
    control,
    name: "ingredients",
  });
  const { toaster } = useToaster();

  // Handlers

  const onEditMenu = async (formData) => {
    try {
      const {
        cover_image,
        Item_name,
        ingredients,
        price,
        description,
        is_veg,
        sub_category,
        menu_type,
      } = formData;

      const payload = new FormData();

      if (Item_name !== editMenu?.Item_name)
        payload.append("Item_name", Item_name);
      if (description !== editMenu?.description)
        payload.append("description", description);
      if (is_veg !== editMenu?.is_veg) payload.append("is_veg", is_veg);
      if (price != editMenu?.price) payload.append("price", +price);

      if (cover_image[0] != editMenu?.cover_image)
        payload.append("cover_image", cover_image[0]);

      if (menu_type != editMenu?.menu_type)
        payload.append("menu_type", menu_type);

      if (sub_category != editMenu?.sub_category?.id)
        payload.append("sub_category", sub_category);

      const toDeleteIngredients = [];

      if (editMenu?.item_ingredients?.length > 0) {
        editMenu?.item_ingredients?.forEach((item) => {
          if (
            !ingredients.some((ing) => ing?.ingredients === item?.ingredients)
          )
            toDeleteIngredients.push(item.id);
        });
      }

      if (ingredients?.length > 0) {
        ingredients.forEach((item) => {
          if (
            !editMenu?.item_ingredients.some(
              (ing) => ing?.ingredients === item?.ingredients
            )
          )
            payload.append(`ingredients`, item?.ingredients);
        });
      }

      const res = await axiosPatch(
        API_ROUTER.UPDATE_BUSINESS_MENU(businessId, editMenu?.id),
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
        if (toDeleteIngredients?.length > 0) {
          await Promise.all(
            toDeleteIngredients?.map(
              async (id) =>
                await axiosDelete(
                  API_ROUTER.DELETE_MENU_ITEM_INGREDIENT(businessId, id)
                )
            )
          );
        }

        toaster(TOAST_ALERTS.BUSINESS_MENU_UPDATE_SUCCESS, TOAST_TYPES.SUCCESS);
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
        cover_image,
        Item_name,
        ingredients,
        price,
        description,
        is_veg,
        sub_category,
        menu_type,
      } = formData;

      const payload = new FormData();

      payload.append("Item_name", Item_name);
      payload.append("description", description);
      payload.append("is_veg", is_veg);
      payload.append("price", +price);
      payload.append("cover_image", cover_image[0]);
      payload.append("sub_category", sub_category);
      payload.append("menu_type", menu_type);

      if (ingredients?.length > 0) {
        ingredients.forEach((item) =>
          payload.append(`ingredients`, item?.ingredients)
        );
      }

      const res = await axiosPost(
        API_ROUTER.CREATE_BUSINESS_MENU(businessId),
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
        toaster(TOAST_ALERTS.BUSINESS_MENU_CREATE_SUCCESS, TOAST_TYPES.SUCCESS);
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
      setValue("cover_image", clonedData, { shouldValidate: true });
    },
    [setValue]
  );

  const onRemoveCoverImage = () => {
    setValue("cover_image", "", { shouldValidate: true });
  };

  return (
    <Modal show={isOpen} onHide={onCloseModal} animation className="aad-modal">
      <Modal.Header closeButton>
        <Modal.Title>{isEdit ? "Update" : "Add"} Item</Modal.Title>
      </Modal.Header>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
        <Modal.Body>
          <div>
            <RHFTextInput
              name="Item_name"
              label={t(
                "dashboard.business.dashboard.cards.menu_item_count.form.fields.Item_name.label"
              )}
              placeholder={t(
                "dashboard.business.dashboard.cards.menu_item_count.form.fields.Item_name.placeholder"
              )}
              formControlClass={"mb-3"}
            />
          </div>
          <div>
            <RHFTextInput
              name="description"
              label={t(
                "dashboard.business.dashboard.cards.menu_item_count.form.fields.description.label"
              )}
              placeholder={t(
                "dashboard.business.dashboard.cards.menu_item_count.form.fields.description.placeholder"
              )}
              formControlClass={"mb-3"}
            />
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <Form.Label className="form-label">
                {t(
                  "dashboard.business.dashboard.cards.menu_item_count.form.fields.ingredients.label"
                )}
              </Form.Label>
              <Link
                href="#"
                className="common-btn"
                onClick={(e) => {
                  e.preventDefault();
                  append({ ingredients: "" });
                }}
              >
                {t(
                  "dashboard.business.dashboard.cards.menu_item_count.form.fields.ingredients.links.add"
                )}
              </Link>
            </div>

            {fields?.map((item, index) => (
              <div
                className="d-flex align-items-start gap-3 common-btn-block"
                key={item.id}
              >
                <div>
                  <RHFTextInput
                    name={`ingredients[${index}].ingredients`}
                    placeholder={t(
                      "dashboard.business.dashboard.cards.menu_item_count.form.fields.ingredients.placeholder"
                    )}
                    formControlClass={"mb-3"}
                    disabled={!!item.key}
                  />
                </div>
                <div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      remove(index);
                    }}
                  >
                    {t(
                      "dashboard.business.dashboard.cards.menu_item_count.form.fields.ingredients.links.remove"
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <RHFTextInput
              name="price"
              label={t(
                "dashboard.business.dashboard.cards.menu_item_count.form.fields.price.label"
              )}
              placeholder={t(
                "dashboard.business.dashboard.cards.menu_item_count.form.fields.price.placeholder"
              )}
              formControlClass={"mb-3"}
            />
          </div>
          <div className="veg-detail">
            <RHFCheckboxInput
              name="is_veg"
              label={t(
                "dashboard.business.dashboard.cards.menu_item_count.form.fields.is_veg.label"
              )}
              formControlClass={"mb-3"}
            />
          </div>
          <RHFFileInput
            name="cover_image"
            multiple={false}
            label={t(
              "dashboard.business.dashboard.cards.menu_item_count.form.fields.cover_image.label"
            )}
            onChange={onCoverImageChange}
            onRemoveFile={onRemoveCoverImage}
          />
          <div>
            <RHFSelectInput
              name="menu_type"
              disabled={!!isMenuTypeLoading}
              label={t(
                "dashboard.business.dashboard.cards.menu_item_count.form.fields.menu_type.label"
              )}
            >
              <option>
                {t(
                  "dashboard.business.dashboard.cards.menu_item_count.form.fields.menu_type.select"
                )}
              </option>
              {menuTypes &&
                menuTypes?.length > 0 &&
                menuTypes.map((item) => (
                  <option key={item.id} value={item.id}>
                    {getTranslatedData(currentLang, item, "type")}
                  </option>
                ))}
            </RHFSelectInput>
          </div>
          <div>
            <RHFSelectInput
              name="sub_category"
              disabled={!!isSubCategoriesLoading}
              label={t(
                "dashboard.business.dashboard.cards.menu_item_count.form.fields.sub_category.label"
              )}
            >
              <option>Select Sub Category</option>
              {subCategories &&
                subCategories?.length > 0 &&
                subCategories.map((category) => (
                  <option key={category.id} value={category?.id}>
                    {getTranslatedData(currentLang, category, "name")}
                  </option>
                ))}
            </RHFSelectInput>
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

export default AddUpdateMenuModal;
