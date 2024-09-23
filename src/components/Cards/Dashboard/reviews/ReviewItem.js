import React from "react";
import { BlueStarRatingReviews, WhiteStarReviews } from "@/assets/svgs";
import { useParams } from "next/navigation";
import { generateArray } from "@/utils/helper";

const ReviewItem = ({ review, onClick }) => {
  // Hooks

  const { reviewId } = useParams();

  // Handlers
  const handleItemClick = () => {
    if (onClick) {
      onClick(review.id);
    }
  };

  return (
    <div
      key={review.id}
      className={`review-tital cursor-pointer-block ${
        reviewId == review.id ? "active" : ""
      }`}
      onClick={handleItemClick}
    >
      <div className="review-icon review-icon-main">
        <div className="d-flex review-icon-inner">
          <figure className="review-icon-inner-block">
            <img
              src={review?.profile_image || "/images/restro-img1.png"}
              alt="restro-img1"
            />
          </figure>
          <div className="sub-tital diff-width-block">
            <h5>{review.user.username}</h5>
            <p>{review.user.email}</p>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            {generateArray(review.rating)?.map((_, index) => (
              <span key={index}>
                <BlueStarRatingReviews />
              </span>
            ))}
            {generateArray(5 - review.rating)?.map((_, index) => (
              <span key={index} className="wh-star">
                <WhiteStarReviews />
              </span>
            ))}
          </div>
        </div>
      </div>
      <p>{review.comment}</p>
    </div>
  );
};

export default ReviewItem;
