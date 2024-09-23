import {
  FormProvider,
  RHFCheckboxInput,
  RHFDateInput,
  RHFTextInput,
} from "@/components/hook-form";
import React, { useCallback, useEffect, useMemo } from "react";
import * as yup from "yup";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFFileInput from "@/components/hook-form/RHFFileInput";
import { useToaster } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import { axiosDelete, axiosPatch, axiosPost } from "@/services/axiosHelper";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { useParams } from "next/navigation";
import { format } from "date-fns";

const AddUpdateEvent = ({
  isOpen = false,
  onClose = () => {},
  fetchData = () => {},
  isEdit = false,
  editEvent = null,
}) => {
  // Form Config
  const defaultValues = useMemo(
    () => ({
      event_image: editEvent?.event_image ? [editEvent?.event_image] : "",
      name: editEvent?.name || "",
      date_time: editEvent?.date_time ? new Date(editEvent?.date_time) : null,
      description: editEvent?.description || "",
      ...(isEdit
        ? { is_approved_by_restaurant: editEvent?.is_approved_by_restaurant }
        : {}),
    }),
    [isEdit, editEvent]
  );

  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        name: yup
          .string()
          .required("Event name is required")
          .trim("Enter valid event name")
          .matches(
            /^(?=.*[a-zA-Z])[a-zA-Z0-9 !@#$%=^&*()"'`|/_+{}\[\]:;<>,.?~\\-]+$/,
            "Event valid event name"
          ),
        event_image: yup
          .mixed()
          .test("isExist", "Event image is required", (value) => value)
          .test("fileSize", "Event image must be less than 5 MB", (value) =>
            value
              ? typeof value[0] !== "string"
                ? value[0].size <= 5 * 1024 * 1024
                : true
              : false
          )
          .test("fileType", "Upload valid event image", (value) =>
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
          .required("Event description is required")
          .trim("Enter valid description")
          .matches(
            /^(?=.*[a-zA-Z])[a-zA-Z0-9 !@#$%=^&*()"'`|/_+{}\[\]:;<>,.?~\\-]+$/,
            "Enter valid description"
          ),
        date_time: yup.date().required("Event date is required"),
        ...(isEdit
          ? { is_approved_by_restaurant: yup.bool().oneOf([true, false]) }
          : {}),
      })
      .required()
      .strict(true);
  }, [isEdit]);

  // Hooks
  const { businessId } = useParams();
  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  // Handlers
  const onCloseModal = () => onClose();

  // Constants
  const {
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
    setValue,
    reset,
  } = methods;

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]);

  const { toaster } = useToaster();

  // Handlers

  const onEditMenu = async (formData) => {
    try {
      const {
        event_image,
        name,
        description,
        date_time,
        is_approved_by_restaurant,
      } = formData;

      const payload = new FormData();

      if (name !== editEvent?.name) payload.append("name", name);
      if (description !== editEvent?.description)
        payload.append("description", description);
      if (date_time != editEvent?.date_time)
        payload.append(
          "date_time",
          format(date_time, "yyyy-MM-dd HH:mm:ssXXX")
        );

      if (event_image[0] != editEvent?.event_image)
        payload.append("event_image", event_image[0]);
      if (is_approved_by_restaurant != editEvent?.is_approved_by_restaurant)
        payload.append("is_approved_by_restaurant", is_approved_by_restaurant);

      const toDeleteIngredients = [];

      const res = await axiosPatch(
        API_ROUTER.UPDATE_BUSINESS_EVENT(businessId, editEvent?.id),
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
      const { event_image, name, description, date_time } = formData;

      const payload = new FormData();

      payload.append("name", name);
      payload.append("description", description);
      payload.append("date_time", format(date_time, "yyyy-MM-dd HH:mm:ssXXX"));
      payload.append("event_image", event_image[0]);

      const res = await axiosPost(
        API_ROUTER.CREATE_BUSINESS_EVENT(businessId),
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
          TOAST_ALERTS.BUSINESS_EVENT_CREATE_SUCCESS,
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
      setValue("event_image", clonedData, { shouldValidate: true });
    },
    [setValue]
  );

  const onRemoveCoverImage = () => {
    setValue("event_image", "", { shouldValidate: true });
  };

  return (
    <Modal show={isOpen} onHide={onCloseModal} animation className="aad-modal">
      <Modal.Header closeButton>
        <Modal.Title>{isEdit ? "Update" : "Add"} Event</Modal.Title>
      </Modal.Header>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
        <Modal.Body>
          <div>
            <RHFTextInput
              name="name"
              label={"Event name"}
              placeholder={"Enter event name"}
              formControlClass={"mb-3"}
            />
          </div>
          <div>
            <RHFTextInput
              name="description"
              label={"Event description"}
              placeholder={"Enter event description"}
              formControlClass={"mb-3"}
            />
          </div>
          <div className="form-group">
            <RHFDateInput
              name="date_time"
              label={"Event Date"}
              showTimeSelect
              dateFormat="dd/MM/yyyy h:mm aa"
              placeholder="Select event date time"
              filterDate={(date) => date > new Date()}
            />
          </div>
          {isEdit ? (
            <div className="veg-detail">
              <RHFCheckboxInput
                name="is_approved_by_restaurant"
                label={"Is Approved?"}
                formControlClass={"mb-3"}
              />
            </div>
          ) : null}
          <RHFFileInput
            name="event_image"
            multiple={false}
            label={"Event image"}
            onChange={onCoverImageChange}
            onRemoveFile={onRemoveCoverImage}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="common-btn"
            onClick={onCloseModal}
            disabled={isSubmitting || isSubmitSuccessful}
            type="reset"
          >
            Cancel
          </Button>
          <Button
            className="common-btn"
            disabled={isSubmitting || isSubmitSuccessful}
            type="submit"
          >
            {isSubmitting ? "Submitting.." : isEdit ? "Update" : "Add"}
          </Button>
        </Modal.Footer>
      </FormProvider>
    </Modal>
  );
};

export default AddUpdateEvent;
