"use client";

import { FormProvider, RHFSelectInput } from "@/components/hook-form";
import { useMetaData, useToaster } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import { useMemo } from "react";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { axiosPost } from "@/services/axiosHelper";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { useParams } from "next/navigation";
import { useLocales, useTranslate } from "@/locales";
import { getTranslatedData } from "@/utils/helper";

const AddBusinessCategory = ({
  isOpen,
  onClose,
  onAddedCategory = () => {},
}) => {
  // Hooks
  const { t } = useTranslate();
  const { businessId } = useParams();
  const [categories, isLoading] = useMetaData(
    API_ROUTER.GET_ALL_CATEGORIES(businessId)
  );
  const { toaster } = useToaster();
  const { currentLang } = useLocales();

  // Form Config
  const defaultValues = useMemo(
    () => ({
      category: "",
    }),
    []
  );

  const UPDATED_CATEGORIES = useMemo(() => {
    if (categories && categories.length > 0) {
      return categories?.filter(({ is_added }) => !is_added);
    } else return [];
  }, [categories]);

  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        category: yup
          .string()
          .required(
            t(
              "dashboard.business.dashboard.cards.category_count.form.fields.category.errors.required"
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
    reset,
    formState: { isSubmitting },
  } = methods;

  const onSubmitForm = async (formData) => {
    try {
      const res = await axiosPost(API_ROUTER.ADD_CATEGORY_RESTAURANT, {
        category: +formData?.category,
        restaurant: businessId,
      });
      if (!res?.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(
          TOAST_ALERTS.ADD_CATEGORY_TO_BUSINESS_SUCCESS,
          TOAST_TYPES.SUCCESS
        );
        reset();
        onClose();
        onAddedCategory();
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      animation
      className="add-modal dash-categry-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {t("dashboard.business.dashboard.cards.category_count.heading")}
        </Modal.Title>
      </Modal.Header>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
        <Modal.Body>
          <RHFSelectInput
            name="category"
            label={t(
              "dashboard.business.dashboard.cards.category_count.form.fields.category.label"
            )}
            disabled={isLoading}
          >
            <option value={null}>
              {t(
                "dashboard.business.dashboard.cards.category_count.form.fields.category.label"
              )}
            </option>
            {UPDATED_CATEGORIES?.map((item) => (
              <option key={item.id} value={item.id}>
                {getTranslatedData(currentLang, item, "name")}
              </option>
            ))}
          </RHFSelectInput>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="common-btn" onClick={onClose}>
            {t(
              "dashboard.business.dashboard.cards.category_count.form.button.cancel"
            )}
          </Button>
          <Button className="common-btn" type="submit" disabled={isSubmitting}>
            {t(
              "dashboard.business.dashboard.cards.category_count.form.button.add"
            )}
          </Button>
        </Modal.Footer>
      </FormProvider>
    </Modal>
  );
};

export default AddBusinessCategory;
