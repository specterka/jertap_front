import { generateArray } from "@/utils/helper";
import React from "react";

const CardRecentActivities = ({
  imageUrl,
  altText,
  authorName,
  review,
  description,
  rating,
}) => {
  const totalStars = 5;

  const filledStarPath =
    "M7.04894 1.53057C7.3483 0.609255 8.6517 0.609255 8.95106 1.53057L10.0206 4.82236C10.1545 5.23439 10.5385 5.51335 10.9717 5.51335H14.4329C15.4016 5.51335 15.8044 6.75296 15.0207 7.32236L12.2205 9.3568C11.87 9.61145 11.7234 10.0628 11.8572 10.4748L12.9268 13.7666C13.2261 14.6879 12.1717 15.4541 11.388 14.8847L8.58778 12.8502C8.2373 12.5956 7.7627 12.5956 7.41221 12.8502L4.61204 14.8847C3.82833 15.4541 2.77385 14.6879 3.0732 13.7666L4.14277 10.4748C4.27665 10.0628 4.12999 9.61145 3.7795 9.3568L0.979333 7.32236C0.195619 6.75296 0.598395 5.51335 1.56712 5.51335H5.02832C5.46154 5.51335 5.8455 5.23439 5.97937 4.82236L7.04894 1.53057Z";

  const emptyStarPath =
    "M7.52447 1.68507C7.67415 1.22442 8.32585 1.22442 8.47553 1.68507L9.5451 4.97687C9.74591 5.59491 10.3218 6.01335 10.9717 6.01335H14.4329C14.9172 6.01335 15.1186 6.63315 14.7268 6.91785L11.9266 8.9523C11.4009 9.33426 11.1809 10.0113 11.3817 10.6293L12.4513 13.9211C12.6009 14.3818 12.0737 14.7649 11.6818 14.4802L8.88168 12.4457C8.35595 12.0638 7.64405 12.0638 7.11832 12.4457L4.31815 14.4802C3.9263 14.7649 3.39906 14.3818 3.54873 13.9211L4.6183 10.6293C4.81911 10.0113 4.59913 9.33426 4.07339 8.9523L1.27323 6.91785C0.881369 6.63315 1.08276 6.01335 1.56712 6.01335H5.02832C5.67816 6.01335 6.25409 5.5949 6.4549 4.97687L7.52447 1.68507Z";

  const svgStyle = {
    marginLeft: "auto", // Move the SVG to the right
    marginTop: "-5px", // Adjust the top margin as needed
  };

  return (
    <div className="d-block d-xxl-flex">
      <div className="restro-detail">
        <div className="restro-name">
          <div className="jt-tital">
            <div className="d-flex mb-4">
              <figure>
                <img src={imageUrl} alt={altText} />
              </figure>
              <div>
                <h5>{authorName}</h5>
                <p>{review}</p>
              </div>
            </div>
            <div className="jt-sub-tital">
              <p>{description}</p>
              <div className="d-flex justify-content-between">
                <div>
                  {generateArray(totalStars)?.map((_, index) => (
                    <span key={index}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d={index < rating ? filledStarPath : emptyStarPath}
                          fill={index < rating ? "#0F4DA2" : "#FFFFFF"}
                          stroke={index + 1 > rating ? "#0F4DA2" : "none"}
                        />
                        {/* <path
                          d={index < rating ? filledStarPath : emptyStarPath}
                          stroke={index >= rating ? "#0F4DA2" : "none"}
                          fill={index < rating ? "#0F4DA2" : "#FFFFFF"}
                        /> */}
                      </svg>
                    </span>
                  ))}
                </div>

                <svg
                  width="73"
                  height="51"
                  viewBox="0 0 73 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.8125 27.8762H9.125V41.5126H22.8125V27.8762ZM63.875 27.8762H50.1875V41.5126H63.875V27.8762ZM22.8125 0.603516L13.6875 18.7853H31.9375V50.6035H0V18.7853L9.125 0.603516H22.8125ZM63.875 0.603516L54.75 18.7853H73V50.6035H41.0625V18.7853L50.1875 0.603516H63.875Z"
                    fill="#0F4DA2"
                    fillOpacity="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRecentActivities;

// .star-icon:hover {
//   stroke: none;
// }
