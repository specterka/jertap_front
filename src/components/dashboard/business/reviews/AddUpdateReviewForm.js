import { FormProvider, RHFTextAreaInput } from "@/components/hook-form";
import React, { useMemo } from "react";
import { Button, Form } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { axiosPost } from "@/services/axiosHelper";
import { API_ROUTER } from "@/services/apiRouter";
import { useToaster } from "@/hooks";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { useTranslate } from "@/locales";

const AddUpdateReviewForm = ({ review, fetchReview }) => {
  // Form Config
  const defaultValues = useMemo(
    () => ({
      replay: review?.review_replays?.at(0)?.replay || "",
    }),
    [review]
  );

  const { t } = useTranslate();
  const formSchema = useMemo(
    () =>
      yup
        .object()
        .shape({
          replay: yup
            .string()
            .required(
              t(
                "dashboard.business.user_review.update_review.form.fields.reply.errors.required"
              )
            )
            .trim(
              t(
                "dashboard.business.user_review.update_review.form.fields.reply.errors.invalid"
              )
            ),
        })
        .required()
        .strict(true),
    []
  );

  // Hooks
  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });
  const { toaster } = useToaster();

  // Constants
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmitForm = async ({ replay }) => {
    try {
      const res = await axiosPost(API_ROUTER.REPLAY_REVIEW, {
        replay,
        review: review.id,
      });
      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.SUCCESS
        );
      }
      if (res.status) {
        toaster(
          TOAST_ALERTS.BUSINESS_REVIEW_REPLAY_SUCCESS,
          TOAST_TYPES.SUCCESS
        );
        fetchReview();
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.SUCCESS);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
      <div className="px-3 pb-3">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <RHFTextAreaInput
            name="replay"
            rows={3}
            placeholder={t(
              "dashboard.business.user_review.update_review.form.fields.replay.label"
            )}
            disabled={!!review?.review_replays?.at(0)?.replay}
          />
        </Form.Group>
      </div>
      {!review?.review_replays?.at(0)?.replay ? (
        <div className="review-btn">
          <Button className="common-btn" type="submit" disabled={isSubmitting}>
            {isSubmitting
              ? t(
                  "dashboard.business.user_review.update_review.form.button.isSubmitting"
                )
              : t(
                  "dashboard.business.user_review.update_review.form.button.replay"
                )}
          </Button>
          <Button className="common-btn cancel-btn" disabled={isSubmitting}>
            {t(
              "dashboard.business.user_review.update_review.form.button.cancel"
            )}
          </Button>
        </div>
      ) : null}
    </FormProvider>
  );
};

export default AddUpdateReviewForm;
