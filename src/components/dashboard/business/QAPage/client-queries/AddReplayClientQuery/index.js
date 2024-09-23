import React, { useEffect, useMemo } from "react";

import { Button, Modal } from "react-bootstrap";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useParams } from "next/navigation";

import { FormProvider, RHFTextAreaInput } from "@/components/hook-form";

import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";

import { axiosPatch } from "@/services/axiosHelper";
import { API_ROUTER } from "@/services/apiRouter";
import { useToaster } from "@/hooks";
import { useTranslate } from "@/locales";

const AddReplayClientQuery = ({
  isOpen = false,
  onClose = () => {},
  review = {},
  fetchQueries = () => {},
}) => {
  const { t } = useTranslate();

  // Form Config
  const defaultValues = useMemo(
    () => ({
      answer: review?.answer || "",
    }),
    [review?.answer]
  );

  // Schema
  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        answer: yup
          .string()
          .required(
            t(
              "ashboard.business.qapage.qapage.answered_queries.fields.answer.errors.required"
            )
          )
          .trim(
            t(
              "ashboard.business.qapage.qapage.answered_queries.fields.answer.errors.invalid"
            )
          )
          .min(
            2,
            t(
              "ashboard.business.qapage.qapage.answered_queries.fields.answer.errors.minLength"
            )
          )
          .max(
            10000,
            t(
              "ashboard.business.qapage.qapage.answered_queries.fields.answer.errors.maxLength"
            )
          )
          .matches(
            /^(?=.*[A-Za-z])[A-Za-z0-9&'.,\- ]{2,}$/,
            t(
              "ashboard.business.qapage.qapage.answered_queries.fields.answer.errors.regex"
            )
          ),
      })
      .required()
      .strict(true);
  }, [review?.answer]);

  // Hooks
  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });
  const { toaster } = useToaster();
  const { businessId } = useParams();

  // Constants
  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = methods;

  // Effects
  useEffect(() => {
    reset({ ...defaultValues });
  }, [review]);

  // Handlers
  const onCloseModal = () => {
    reset();
    onClose();
  };

  const onSubmitForm = async (formData) => {
    if (!review?.id)
      return toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    try {
      const payLoad = {
        ...formData,
      };
      const res = await axiosPatch(
        API_ROUTER.REPLAY_CLIENT_QUERY(businessId, review?.id),
        payLoad
      );
      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(TOAST_ALERTS.QUERY_REPLAY_ADD_SUCCESS, TOAST_TYPES.SUCCESS);
        fetchQueries();
        onCloseModal();
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  return (
    <Modal show={isOpen} onHide={onCloseModal} className="modal-review-block">
      <Modal.Header closeButton>
        <Modal.Title>
          {t(
            "dashboard.business.qapage.qapage.answered_queries.greetings.heading"
          )}
        </Modal.Title>
      </Modal.Header>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
        <Modal.Body>
          <div className="modal-review-block">
            <div className="profile-block-img-inner">
              <img
                src={
                  review?.raise_by?.profile_image || "/images/avatar-dummy.png"
                }
                alt={`${review?.raise_by?.username}-image`}
              />
              <h4>{review?.raise_by?.username}</h4>
            </div>
            <p>{review?.question}</p>
            <div className="textarea-block">
              <RHFTextAreaInput
                name="answer"
                placeholder={t(
                  "dashboard.business.qapage.qapage.answered_queries.fields.answer.placeholder"
                )}
                rows={5}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="common-btn" type="submit" disabled={isSubmitting}>
            {isSubmitting
              ? t(
                  "dashboard.business.qapage.qapage.answered_queries.button.isSubmitting"
                )
              : t(
                  "dashboard.business.qapage.qapage.answered_queries.button.answer"
                )}
          </Button>
        </Modal.Footer>
      </FormProvider>
    </Modal>
  );
};

export default AddReplayClientQuery;
