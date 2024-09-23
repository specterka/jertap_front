import React from "react";
import { Container } from "react-bootstrap";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BlueStarRatingReviews, WhiteStarReviews } from "@/assets/svgs";
import { useMetaData } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import Loader from "../shared/Loader";
import { generateArray } from "@/utils/helper";

const ActivitiesSection = () => {
  // Hooks
  const [recentActivities, isFetching] = useMetaData(
    API_ROUTER.HOME_RECENT_ACTIVITIES
  );

  return (
    <div className="activities-section restro-section section-block">
      <Container>
        <h2 data-aos="fade-up" data-aos-duration="1000">
          Recent Activities <span></span>
        </h2>
        {isFetching ? (
          <Loader />
        ) : (
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {recentActivities &&
              recentActivities.length > 0 &&
              recentActivities?.map((data, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="d-block d-xxl-flex"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div className="restro-detail">
                      <div className="restro-name">
                        <div className="jt-tital">
                          <div className="d-flex align-items-center mb-4">
                            <figure>
                              <img
                                src={data.restaurant.profile_image}
                                alt="restro-img1"
                              />
                            </figure>
                            <div>
                              <h5>{data.restaurant.name}</h5>
                            </div>
                          </div>
                          <div className="jt-sub-tital">
                            <p>{data.comment}</p>{" "}
                            <span>-<b> {data.user.username}</b></span>
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                {generateArray(data.rating)?.map((_, i) => (
                                  <span key={index}>
                                    <BlueStarRatingReviews />
                                  </span>
                                ))}
                                {generateArray(5 - data.rating)?.map((_, i) => (
                                  <span className="wh-star" key={index}>
                                    <WhiteStarReviews />
                                  </span>
                                ))}
                              </div>
                              <svg
                                width="30"
                                height="15"
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
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </Container>
    </div>
  );
};

export default ActivitiesSection;
