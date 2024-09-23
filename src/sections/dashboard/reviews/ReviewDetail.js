import React from "react";
import { Col } from "react-bootstrap";
import { AddUpdateReviewForm, ReviewDetailComponent } from "@/components";

const ReviewDetail = ({ review, fetchReview }) => {
  return (
    <Col xl={8}>
      <div className="review-detail pb-4 rad">
        <h3>User Generated Review & Rating</h3>
        <ReviewDetailComponent review={review} fetchReview={fetchReview} />
        <AddUpdateReviewForm review={review} fetchReview={fetchReview} />
      </div>
    </Col>
  );
};

export default ReviewDetail;
