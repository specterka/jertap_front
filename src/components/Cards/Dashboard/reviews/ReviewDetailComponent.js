"use client";

import React from "react";
import { BlueStarRatingReviews, WhiteStarReviews } from "@/assets/svgs";
import { useMemo, useState } from "react";
import ConfirmationDialog from "@/components/shared/ConfirmationDialog";
import { axiosPatch } from "@/services/axiosHelper";
import { useParams } from "next/navigation";
import { useToaster } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { useTranslate } from "@/locales";
import { generateArray } from "@/utils/helper";

const ReviewDetailComponent = ({ review, fetchReview }) => {
  // States
  const [isConfirmation, setIsConfirmation] = useState(false);

  // Hooks
  const { t } = useTranslate();
  const { businessId } = useParams();
  const { toaster } = useToaster();

  const onCreateInitiate = (id) => {
    setIsConfirmation(id);
  };
  const onCreateReport = async () => {
    try {
      const res = await axiosPatch(
        API_ROUTER.CREATE_REVIEW_REPORT(businessId, review?.id)
      );
      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(
          TOAST_ALERTS.BUSINESS_REVIEW_REPORT_SUCCESS,
          TOAST_TYPES.SUCCESS
        );
        setIsConfirmation(false);
        fetchReview();
      }
    } catch (error) {}
  };

  const renderConfirmation = useMemo(() => {
    return (
      isConfirmation && (
        <ConfirmationDialog
          onClose={() => setIsConfirmation(false)}
          isOpen={isConfirmation}
          modalTitle={t(
            "dashboard.business.user_review.review_list.confirmation.title"
          )}
          onConfirm={onCreateReport}
          description={t(
            "dashboard.business.user_review.review_list.confirmation.description"
          )}
          onCancel={() => setIsConfirmation(false)}
        />
      )
    );
  }, [isConfirmation, onCreateReport, setIsConfirmation]);

  return (
    <>
      <div className="review-tital mb-4">
        <div className="review-icon">
          <div className="d-flex">
            <figure>
              <img src="/images/restro-img1.png" alt="restro-img1" />
            </figure>
            <div className="sub-tital">
              <h5>{review?.user.username || "Test"}</h5>
              <p>{review?.user.email || "test@gmail.com"}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              {generateArray(review?.rating)?.map((_, index) => (
                <span key={index}>
                  <BlueStarRatingReviews />
                </span>
              ))}
              {generateArray(Math.max(5 - (review?.rating || 0), 0)).map(
                (_, index) => (
                  <span key={index} className="wh-star">
                    <WhiteStarReviews />
                  </span>
                )
              )}
            </div>
          </div>
        </div>
        <div className="review-icon-reivew-block">
          <p>{review?.comment}</p>
          {!review.reported ? (
            <button type="submit" onClick={() => onCreateInitiate(review?.id)}>
              report
            </button>
          ) : null}
          {renderConfirmation}
        </div>
      </div>
    </>
  );
};

export default ReviewDetailComponent;
