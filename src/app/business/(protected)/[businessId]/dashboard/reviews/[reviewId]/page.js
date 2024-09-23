"use client";

import { Loader } from "@/components";
import { useMetaData } from "@/hooks";
import { PATH_BUSINESS } from "@/routes/paths";
import ReviewDetail from "@/sections/dashboard/reviews/ReviewDetail";
import { API_ROUTER } from "@/services/apiRouter";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

const ReviewDetailPage = ({ params: { reviewId } }) => {
  // Hooks
  const { businessId } = useParams();

  const [review, isReviewLoading, fetchReview] = useMetaData(
    API_ROUTER.GET_REVIEW_LIST_ID(businessId, reviewId)
  );
  const { push } = useRouter();

  return isReviewLoading ? (
    <Loader />
  ) : review ? (
    <ReviewDetail review={review} fetchReview={fetchReview} />
  ) : (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <p className="text-center">No Review Detail Found</p>
      <Button
        className="common-btn"
        onClick={() => push(PATH_BUSINESS.reviews.root(businessId))}
      >
        Back to Reviews
      </Button>
    </div>
  );
};

export default ReviewDetailPage;
