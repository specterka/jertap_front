import { Loader, ReviewItem } from "@/components";
import { useMetaData } from "@/hooks";
import { PATH_BUSINESS } from "@/routes/paths";
import { API_ROUTER } from "@/services/apiRouter";
import { useRouter } from "next/navigation";
import React from "react";
import { Col } from "react-bootstrap";
import { useParams } from "next/navigation";
import { useTranslate } from "@/locales";

const ReviewList = () => {
  // Hooks
  const { t } = useTranslate();
  const { businessId } = useParams();
  const [reviews, isFetching] = useMetaData(
    API_ROUTER.GET_REVIEW_LIST(businessId)
  );
  const { push } = useRouter();

  return (
    <Col xl={4}>
      <div className="review-detail mb-4 mb-xl-0">
        <h3>{t("dashboard.business.user_review.review_list.greetings.heading")}</h3>
        {isFetching ? (
          <Loader />
        ) : reviews && reviews?.length > 0 ? (
          reviews?.map((review) => (
            <ReviewItem
              key={review.id}
              review={review}
              onClick={() =>
                push(PATH_BUSINESS.reviews.view(businessId, review.id))
              }
            />
          ))
        ) : (
          <p className="text-center p-4">{t("dashboard.business.user_review.review_list.greetings.null_review_heading")}</p>
        )}
      </div>
    </Col>
  );
};

export default ReviewList;
