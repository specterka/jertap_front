"use client";

import ReviewList from "@/sections/dashboard/reviews/ReviewList";
import { ReviewDetail } from "@/styles/review.style";
import React from "react";
import { Row } from "react-bootstrap";
import { useTranslate } from "@/locales";

const ReviewLayout = ({ children }) => {
  const { t } = useTranslate();

  return (
    <ReviewDetail>
      <h1>{t("dashboard.business.user_review.greetings.heading")}</h1>
      <Row className="mx-0">
        <ReviewList />
        {children}
      </Row>
    </ReviewDetail>
  );
};

export default ReviewLayout;
