import {
  FormProvider,
  RHFRatingInput,
  RHFTextAreaInput,
} from "@/components/hook-form";
import React, { useMemo } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Rating from "react-rating";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { axiosPatch, axiosPost } from "@/services/axiosHelper";
import { API_ROUTER } from "@/services/apiRouter";
import { useParams } from "next/navigation";
import { useToaster } from "@/hooks";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { WhiteStarCategories, YellowRatingStarCategories } from "@/assets/svgs";

const AddUpdateReview = ({
  isOpen = false,
  onClose = () => {},
  isEdit = false,
  fetchData = () => {},
}) => {
  // Hook Form Config
  const defaultValues = useMemo(
    () => ({
      comment: isEdit ? isEdit?.comment : "",
      rating: isEdit ? isEdit?.rating : 0,
    }),
    [isEdit]
  );
  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        comment: yup
          .string()
          .required("Comment is required")
          .trim("Enter valid comment"),
        rating: yup.number().required("Rating is required"),
      })
      .required()
      .strict(true);
  }, [isEdit]);

  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });
  const { id } = useParams();
  const { toaster } = useToaster();

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  // Handlers
  const onCloseModal = () => {
    reset();
    onClose();
  };

  const onSubmit = async (formData) => {
    try {
      const payload = { ...formData };
      const res = isEdit
        ? await axiosPatch(API_ROUTER.REVIEW_UPDATE(isEdit.id), payload)
        : await axiosPost(API_ROUTER.ADD_RESTAURANT_REVIEW(id), payload);
      if (!res.status) {
        return toaster(
          res.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(
          isEdit
            ? TOAST_ALERTS.BUSINESS_REVIEW_UPDATE_SUCCESS
            : TOAST_ALERTS.BUSINESS_REVIEW_ADD_SUCCESS,
          TOAST_TYPES.SUCCESS
        );
        fetchData();
        onCloseModal();
      }
    } catch (error) {}
  };
  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{isEdit ? "Update" : "Write"} your Review</Modal.Title>
      </Modal.Header>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <RHFTextAreaInput
              name="comment"
              placeholder="Enter your review here"
              label="Review"
            />
            <div className="modal-review-icon">
              <h6>Rating</h6>
              <span className="wh-star">
                <YellowRatingStarCategories />
                <WhiteStarCategories />
                <WhiteStarCategories />
                <WhiteStarCategories />
                <WhiteStarCategories />
              </span>
            </div>
            {/* <RHFRatingInput name="rating" label="Rating" /> */}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={onCloseModal}
            disabled={isSubmitting}
          >
            Close
          </Button>
          <Button className="common-btn" type="submit" disabled={isSubmitting}>
            {isEdit ? "Update" : "Add"}
          </Button>
        </Modal.Footer>
      </FormProvider>
    </Modal>
  );
};

export default AddUpdateReview;
