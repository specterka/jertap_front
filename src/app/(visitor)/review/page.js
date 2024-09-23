"use client";
import { LocationIconCategoryPage, WhiteStarCategories } from "@/assets/svgs";
import { HeroSection } from "@/components/landing";
import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import { ReviewDetail } from "@/styles/visiter/review.style";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const ReviewIndex = () => {
  return (
    <>
      <HeroSection />
      <ReviewDetail>
        <Container className="px-3 px-xxl-0">
          <h2>
            Your Favourite Restaurant<span></span>
          </h2>
          <Row>
            <Col lg={6}>
              <div className="categories-box">
                <div className="categories-img">
                  <figure>
                    <img
                      src="/images/review-img.png"
                      alt="categories-img.png"
                    />
                  </figure>
                </div>
                <div className="restro-detail">
                  <div className="restro-like">
                    <h5>Restaurant Name</h5>
                  </div>
                  <div className="restro-location">
                    <i>
                      <LocationIconCategoryPage />
                    </i>
                    <p>
                      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                      consectetur
                    </p>
                  </div>
                  <h6>Rating</h6>
                  <div className="restro-review">
                    <span>
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="categories-box">
                <div className="categories-img">
                  <figure>
                    <img
                      src="/images/review-img1.png"
                      alt="categories-img1.png"
                    />
                  </figure>
                </div>
                <div className="restro-detail">
                  <div className="restro-like">
                    <h5>Restaurant Name</h5>
                  </div>
                  <div className="restro-location">
                    <i>
                      <LocationIconCategoryPage />
                    </i>
                    <p>
                      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                      consectetur
                    </p>
                  </div>
                  <h6>Rating</h6>
                  <div className="restro-review">
                    <span>
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <div className="categories-box">
                <div className="categories-img">
                  <figure>
                    <img
                      src="/images/review-img1.png"
                      alt="categories-img1.png"
                    />
                  </figure>
                </div>
                <div className="restro-detail">
                  <div className="restro-like">
                    <h5>Restaurant Name</h5>
                  </div>
                  <div className="restro-location">
                    <i>
                      <LocationIconCategoryPage />
                    </i>
                    <p>
                      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                      consectetur
                    </p>
                  </div>
                  <h6>Rating</h6>
                  <div className="restro-review">
                    <span>
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="categories-box">
                <div className="categories-img">
                  <figure>
                    <img
                      src="/images/review-img.png"
                      alt="categories-img.png"
                    />
                  </figure>
                </div>
                <div className="restro-detail">
                  <div className="restro-like">
                    <h5>Restaurant Name</h5>
                  </div>
                  <div className="restro-location">
                    <i>
                      <LocationIconCategoryPage />
                    </i>
                    <p>
                      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                      consectetur
                    </p>
                  </div>
                  <h6>Rating</h6>
                  <div className="restro-review">
                    <span>
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <div className="categories-box">
                <div className="categories-img">
                  <figure>
                    <img
                      src="/images/review-img.png"
                      alt="categories-img.png"
                    />
                  </figure>
                </div>
                <div className="restro-detail">
                  <div className="restro-like">
                    <h5>Restaurant Name</h5>
                  </div>
                  <div className="restro-location">
                    <i>
                      <LocationIconCategoryPage />
                    </i>
                    <p>
                      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                      consectetur
                    </p>
                  </div>
                  <h6>Rating</h6>
                  <div className="restro-review">
                    <span>
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="categories-box">
                <div className="categories-img">
                  <figure>
                    <img
                      src="/images/review-img1.png"
                      alt="categories-img1.png"
                    />
                  </figure>
                </div>
                <div className="restro-detail">
                  <div className="restro-like">
                    <h5>Restaurant Name</h5>
                  </div>
                  <div className="restro-location">
                    <i>
                      <LocationIconCategoryPage />
                    </i>
                    <p>
                      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                      consectetur
                    </p>
                  </div>
                  <h6>Rating</h6>
                  <div className="restro-review">
                    <span>
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Swiper
            navigation={true}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              575: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
          >
            <SwiperSlide>
              <div className="categories-box restro-view">
                <div className="categories-img">
                  <figure>
                    <img
                      src="/images/review-img.png"
                      alt="categories-img.png"
                    />
                  </figure>
                </div>
                <div className="restro-detail">
                  <div className="restro-like">
                    <h5>Restaurant Name</h5>
                  </div>
                  <div className="restro-location">
                    <i>
                      <LocationIconCategoryPage />
                    </i>
                    <p>
                      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                      consectetur
                    </p>
                  </div>
                  <h6>Rating</h6>
                  <div className="restro-review">
                    <span>
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="categories-box restro-view">
                <div className="categories-img">
                  <figure>
                    <img
                      src="/images/review-img.png"
                      alt="categories-img.png"
                    />
                  </figure>
                </div>
                <div className="restro-detail">
                  <div className="restro-like">
                    <h5>Restaurant Name1</h5>
                  </div>
                  <div className="restro-location">
                    <i>
                      <LocationIconCategoryPage />
                    </i>
                    <p>
                      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                      consectetur
                    </p>
                  </div>
                  <h6>Rating</h6>
                  <div className="restro-review">
                    <span>
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="categories-box restro-view">
                <div className="categories-img">
                  <figure>
                    <img
                      src="/images/review-img.png"
                      alt="categories-img.png"
                    />
                  </figure>
                </div>
                <div className="restro-detail">
                  <div className="restro-like">
                    <h5>Restaurant Name2</h5>
                  </div>
                  <div className="restro-location">
                    <i>
                      <LocationIconCategoryPage />
                    </i>
                    <p>
                      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                      consectetur
                    </p>
                  </div>
                  <h6>Rating</h6>
                  <div className="restro-review">
                    <span>
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                      <WhiteStarCategories />
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </ReviewDetail>
    </>
  );
};

export default ReviewIndex;
