"use client";
import {
  LikeIconCategoryPage,
  YellowRatingStarCategories,
  WhiteStarCategories,
  PhoneIconCategory,
  AllCategorySearchIcon,
  WatchIconRestroDetailVisitor,
  StarTapReviewRestroDetail,
  WhatsappSocialIcon,
  ShareIconRestroDetail,
  WhiteStarReviews,
  WhiteStarRatingRestroDetail,
  EditIconRestroDetail,
  VerificationIconRestroDetail,
  EmailIconRestroDetailVisitor,
  UploadIconRestroDetail,
  MoreOptionIconRestroDetail,
  BlueStarRatingReviews,
  CommentIconRestroDetail,
  SolidHeart,
} from "@/assets/svgs";

import { React, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { RestroIndex } from "../../../styles/visiter/restro-detail.style";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import RestoDetails from "@/components/modal/restaurant-details/page";
const RestaurantDetails = () => {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(!show);
  }
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <>
      <RestroIndex>
        <div className="top-section">
          <div className="restro-img">
            <figure className="restro-detail1">
              <img src="/images/restro-detail1.png" alt="restro-detail1" />
            </figure>
          </div>
          <div className="restro-img p-0">
            <div className="right-img">
              <div className="restro-small-img">
                <figure className="restro-detail2 mb-2">
                  <img src="/images/restro-detail2.png" alt="restro-detail2" />
                </figure>
              </div>
              <div className="d-flex">
                <div className="restro-small-img right-img2">
                  <figure className="restro-detail2">
                    <img
                      src="/images/restro-detail3.png"
                      alt="restro-detail3"
                    />
                  </figure>
                </div>
                <div className="restro-small-img">
                  <figure className="restro-detail2">
                    <img
                      src="/images/restro-detail4.png"
                      alt="restro-detail4"
                    />
                  </figure>
                  <span>50+ More Photos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-view">
          <div className="categories-img">
            <Swiper
              navigation={true}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <figure>
                  <img src="/images/restro-detail1.png" alt="restro-detail1" />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure>
                  <img src="/images/restro-detail2.png" alt="restro-detail2" />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure>
                  <img src="/images/restro-detail3.png" alt="restro-detail3" />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="restro-small-img">
                  <img src="/images/restro-detail4.png" alt="restro-detail4" />
                  <span>50+ More Photos</span>
                </figure>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <Container>
          <Row>
            <Col md={12}>
              <div className="categories-section">
                <div className="review-detail">
                  <div className="restro-detail">
                    <div className="restro-like">
                      <h4>Restaurant Name</h4>
                      <div className="d-flex">
                        <Link
                          className="common-btn me-3 url-btn"
                          href={"javascript:void(0)"}
                        >
                          Copy Url
                        </Link>
                        <div className="like-icon">
                          <Button
                            className="common-btn trans-btn"
                            onClick={handleToggle}
                          >
                            {isExpanded ? (
                              <SolidHeart />
                            ) : (
                              <LikeIconCategoryPage />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="restro-location">
                      {/* <LocationIconCategoryPage /> */}
                      <h5>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                      </h5>
                    </div>
                    <div className="restro-review">
                      <span>
                        <YellowRatingStarCategories />
                        <YellowRatingStarCategories />
                        <WhiteStarCategories />
                        <WhiteStarCategories />
                        <WhiteStarCategories />
                      </span>
                      <small>
                        <p>5.00</p>
                        <p>(8)</p>
                      </small>
                    </div>
                    <div className="restro-time">
                      <ul>
                        <li>
                          <WatchIconRestroDetailVisitor />
                          <p>10:00 AM - 12:00 PM</p>
                        </li>
                        <li>
                          <p>6 Years in business</p>
                        </li>
                        <li>
                          <p>Respond in</p>
                          <Link href={"javascript:void(0)"} className="ms-1">
                            5 Mins
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="restro-btn">
                      <Link
                        className="common-btn success-btn"
                        href={"javascript:void(0)"}
                      >
                        <PhoneIconCategory />
                        <h5>1111111111</h5>
                      </Link>
                      <Link className="common-btn" href={"javascript:void(0)"}>
                        <StarTapReviewRestroDetail />
                        <h5>Tap to Rate</h5>
                      </Link>
                      <Link
                        className="common-btn trans-btn chat-btn"
                        href={"javascript:void(0)"}
                      >
                        <WhatsappSocialIcon />
                        <h5>chat</h5>
                      </Link>
                      <Link
                        className="common-btn trans-btn"
                        href={"javascript:void(0)"}
                      >
                        <ShareIconRestroDetail />
                        <h5>Share</h5>
                      </Link>
                      <Link
                        className="common-btn ms-auto"
                        href={"javascript:void(0)"}
                      >
                        <h5>Menu</h5>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mobile-btn">
                  <div className="restro-btn">
                    <Link
                      className="common-btn success-btn"
                      href={"javascript:void(0)"}
                    >
                      <PhoneIconCategory />
                      <h5 className="ms-2">1111111112</h5>
                    </Link>
                    <div className="like-icon">
                      <Button
                        className="common-btn trans-btn"
                        onClick={handleToggle}
                      >
                        {isExpanded ? <SolidHeart /> : <LikeIconCategoryPage />}
                      </Button>
                    </div>
                    <Link className="common-btn" href={"javascript:void(0)"}>
                      <h5>Copy Url</h5>
                    </Link>
                    <Link className="common-btn" href={"javascript:void(0)"}>
                      <h5>Menu</h5>
                    </Link>
                  </div>
                  <div className="restro-btn">
                    <Link
                      className="common-btn trans-btn"
                      href={"javascript:void(0)"}
                    >
                      <ShareIconRestroDetail />
                      <h5>Share</h5>
                    </Link>
                    <Link
                      className="common-btn trans-btn chat-btn"
                      href={"javascript:void(0)"}
                    >
                      <WhatsappSocialIcon />
                      <h5>chat</h5>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="top-rate">
                <h4>Tap to Rate</h4>
                <span>
                  <WhiteStarRatingRestroDetail />
                  <WhiteStarRatingRestroDetail />
                  <WhiteStarRatingRestroDetail />
                  <WhiteStarRatingRestroDetail />
                  <WhiteStarRatingRestroDetail />
                </span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={{ order: 2 }} lg={{ span: 8, order: 1 }}>
              <div className="quick-section">
                <div className="quick-info">
                  <div className="info-tital">
                    <h4>Quick Information</h4>
                  </div>
                  <div className="info-detail">
                    <ul>
                      <li>
                        <h5> - Cuisines</h5>
                        <p>
                          Chinese, Noodles, Chinese, Noodles, Chinese, Noodles,
                        </p>
                      </li>
                      <li>
                        <h5> - Type</h5>
                        <p>Delivery, Quick Bite Outlet, Take Away</p>
                      </li>
                    </ul>
                    <ul>
                      <li className="info-sub-tital">
                        <h5>- Years of Establishment</h5>
                        <p>2018</p>
                      </li>
                      <li className="info-sub-tital">
                        <h5>- Mode of Payment</h5>
                        <p>Cash</p>
                      </li>
                    </ul>
                    <ul className="align-items-baseline">
                      <li>
                        <Link
                          href={"javascript:void(0)"}
                          className="d-flex ms-1"
                        >
                          <WatchIconRestroDetailVisitor />
                          Weekly Hour
                        </Link>
                      </li>
                      <li>
                        <div className="d-flex mb-3">
                          <p>Monday </p>
                          <span>I 10:00AM-12:00PM</span>
                        </div>
                        <div className="d-flex mb-3">
                          <p>Tuesday</p>
                          <span>I 10:00AM-12:00PM</span>
                        </div>
                        <div className="d-flex mb-3">
                          <p>Wednesday</p>
                          <span>I 10:00AM-12:00PM</span>
                        </div>
                        <div className="d-flex mb-3">
                          <p>Thursday</p>
                          <span>I 10:00AM-12:00PM</span>
                        </div>
                        <div className="d-flex mb-3">
                          <p>Friday</p>
                          <span>I 10:00AM-12:00PM</span>
                        </div>
                        <div className="d-flex">
                          <p>Saturday</p>
                          <span>I 10:00AM-12:00PM</span>
                        </div>
                      </li>
                    </ul>
                    <ul>
                      <li className="d-flex justify-content-between">
                        <Link href={"javascript:void(0)"} className="ms-1">
                          <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.60348 17.7189H3.9375C3.76345 17.7189 3.59653 17.6497 3.47346 17.5266C3.35039 17.4036 3.28125 17.2367 3.28125 17.0626V13.3966C3.28133 13.2228 3.35036 13.0561 3.4732 12.9332L13.5893 2.81706C13.7124 2.69408 13.8792 2.625 14.0532 2.625C14.2272 2.625 14.394 2.69408 14.5171 2.81706L18.183 6.48057C18.306 6.60363 18.3751 6.77049 18.3751 6.94446C18.3751 7.11843 18.306 7.28529 18.183 7.40835L8.06695 17.5269C7.94398 17.6497 7.77729 17.7188 7.60348 17.7189Z"
                              stroke="#0F4DA2"
                              // stroke-width="1.5"
                              // stroke-linecap="round"
                              // stroke-linejoin="round"
                            />
                            <path
                              d="M11.1562 5.25L15.75 9.84375"
                              stroke="#0F4DA2"
                              // stroke-width="1.5"
                              // stroke-linecap="round"
                              // stroke-linejoin="round"
                            />
                          </svg>
                          Suggested New Hour
                        </Link>
                      </li>
                      <li className="d-flex">
                        <p>Sunday</p>
                        <span>l Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <Link
                  className="common-btn"
                  href={"javascript:void(0)"}
                  onClick={handleShow}
                >
                  View All
                </Link> */}
              </div>
            </Col>
            <Col xs={{ order: 1 }} lg={{ span: 4, order: 2 }}>
              <div className="quick-section">
                <div className="info-tital">
                  <h4>Address</h4>
                </div>
                <div className="info-address">
                  <div className="info-detail border-0">
                    <h5>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      consectetur adipiscing elit amet,{" "}
                    </h5>
                    <div className="d-flex">
                      <Link
                        className="common-btn trans-btn"
                        href={"javascript:void(0)"}
                      >
                        Get Direction
                      </Link>
                      <Link
                        className="common-btn trans-btn"
                        href={"javascript:void(0)"}
                      >
                        Copy
                      </Link>
                    </div>
                    <div className="restro-time">
                      <EmailIconRestroDetailVisitor />
                      <p>Send Enquiry by Email</p>
                    </div>
                    <div className="restro-time share-icon">
                      <ShareIconRestroDetail />
                      <p>Share this</p>
                    </div>
                    <div className="restro-time">
                      <StarTapReviewRestroDetail />
                      <p>Tap to Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="info-section">
                <div className="info-tital">
                  <h4>Amenities & Services</h4>
                  <Link className="common-btn" href={""}>
                    View All
                  </Link>
                </div>
                <div className="services-detail">
                  <div className="info-detail border-0">
                    <div className="restro-time">
                      <ul>
                        <li>
                          <VerificationIconRestroDetail />
                          <h5>Parking</h5>
                        </li>
                        <li>
                          <VerificationIconRestroDetail />
                          <h5>Home Delivery</h5>
                        </li>
                        <li>
                          <VerificationIconRestroDetail />
                          <h5>Group Crowd</h5>
                        </li>
                        <li>
                          <VerificationIconRestroDetail />
                          <h5>Dine-in</h5>
                        </li>
                        <li>
                          <VerificationIconRestroDetail />
                          <h5>Good Place For Kids</h5>
                        </li>
                      </ul>
                      <Link className="common-btn view-btn" href={""}>
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="photo-section">
                <div className="info-tital">
                  <h4>Photos</h4>
                  <div className="upload-detail common-btn upload-btn">
                    <span>
                      <input
                        className="Input_input__lvORT"
                        type="file"
                        id="file-input-1"
                        name="file-input-1"
                        required={true}
                        defaultValue=""
                      />
                      {/* <span></span> */}
                    </span>
                    <label className="file-input-label" htmlFor="file-input-1">
                      <UploadIconRestroDetail />
                      <span>Upload Photos</span>
                    </label>
                  </div>
                </div>
                <div className="food-img">
                  <figure>
                    <img src="/images/chinese-food.png" alt="chinese-food" />
                  </figure>
                  <figure>
                    <img src="/images/red-food.png" alt="red-food" />
                  </figure>
                  <figure>
                    <img src="/images/chinese-food.png" alt="chinese-food" />
                  </figure>
                  <figure>
                    <img src="/images/red-food.png" alt="red-food" />
                  </figure>
                </div>
                <div className="upload-detail common-btn img-btn">
                  <span>
                    <input
                      className="Input_input__lvORT"
                      type="file"
                      id="file-input-1"
                      name="file-input-1"
                      required={true}
                      defaultValue=""
                    />
                    <span></span>
                  </span>
                  <label className="file-input-label" htmlFor="file-input-1">
                    <UploadIconRestroDetail />
                    <span>Upload Photos</span>
                  </label>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <div className="categories-section ratings-section">
                <div className="review-detail">
                  <div className="restro-detail">
                    <div className="info-tital">
                      <h4>Reviews & Ratings</h4>
                      <Link className="common-btn" href={""}>
                        Write a Review
                      </Link>
                    </div>
                    <div className="ratings-user">
                      <div className="restro-location">
                        <span>4.8</span>
                        <div className="user-tital">
                          <h5>87 Ratings</h5>
                          <p>Rating index based on 87 ratings across the web</p>
                        </div>
                      </div>
                      <div className="restro-review">
                        <h5>Start a Review</h5>
                        <span>
                          <WhiteStarCategories />
                          <WhiteStarCategories />
                          <WhiteStarCategories />
                          <WhiteStarCategories />
                          <WhiteStarCategories />
                        </span>
                      </div>
                    </div>
                    <Link className="common-btn write-btn" href={""}>
                      Write a Review
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="categories-section ratings-section">
                <div className="review-detail">
                  <div className="restro-detail">
                    <div className="info-tital my-0 my-md-2">
                      <h4>Question & Answer</h4>
                    </div>
                    <div className="ask-question">
                      <p>Would you like to ask a Question</p>
                      <Link className="common-btn ask-btn trans-btn" href={""}>
                        Ask a Question
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="section-block">
            <Col md={12}>
              <div className="jt-send-email">
                <h2>
                  User Reviews <span></span>{" "}
                </h2>
                {/* <div className="user-review">
                  <span>
                    <AllCategorySearchIcon />
                    <Form.Control
                      type="email"
                      placeholder="Search Restaurant"
                    />
                  </span>
                  <Link className="common-btn" href={"javascript:void(0)"}>
                    Search
                  </Link>
                </div> */}
              </div>
            </Col>
            <Col md={12}>
              <div className="user-section">
                <div className="restro-detail">
                  <div className="restro-name">
                    <div className="jt-tital">
                      <div className="user-img">
                        <div className="d-flex align-items-center">
                          <figure>
                            <img
                              src="/images/restro-img1.png"
                              alt="restro-img1"
                            />
                          </figure>
                          <div>
                            <h5>John Duo</h5>
                            <p>50 Reviews</p>
                          </div>
                        </div>
                        <div className="review-date">
                          <p>10 Dec</p>
                          <Link href={"javascript:void(0)"}>
                            <MoreOptionIconRestroDetail />
                          </Link>
                        </div>
                      </div>
                      <div className="jt-sub-tital">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="user-view">
                          <div>
                            <span>
                              <BlueStarRatingReviews />
                            </span>
                            <span>
                              <BlueStarRatingReviews />
                            </span>
                            <span>
                              <BlueStarRatingReviews />
                            </span>
                            <span>
                              <BlueStarRatingReviews />
                            </span>
                            <span className="wh-star">
                              <WhiteStarReviews />
                            </span>
                          </div>
                          <div className="share-comment">
                            <ul>
                              <li>
                                <Link href={"javascript:void(0)"}>
                                  <ShareIconRestroDetail />
                                  <p>Share</p>
                                </Link>
                              </li>
                              <li>
                                <Link href={"javascript:void(0)"}>
                                  <CommentIconRestroDetail />
                                  <p>Comment</p>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12}>
              <div className="user-section">
                <div className="restro-detail">
                  <div className="restro-name">
                    <div className="jt-tital">
                      <div className="user-img">
                        <div className="d-flex align-items-center">
                          <figure>
                            <img
                              src="/images/restro-img1.png"
                              alt="restro-img1"
                            />
                          </figure>
                          <div>
                            <h5>John Duo</h5>
                            <p>50 Reviews</p>
                          </div>
                        </div>
                        <div className="review-date">
                          <p>10 Dec</p>
                          <Link href={"javascript:void(0)"}>
                            <MoreOptionIconRestroDetail />
                          </Link>
                        </div>
                      </div>
                      <div className="jt-sub-tital">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="user-view">
                          <div>
                            <span>
                              <BlueStarRatingReviews />
                            </span>
                            <span>
                              <WhiteStarReviews />
                            </span>
                            <span>
                              <WhiteStarReviews />
                            </span>
                            <span>
                              <WhiteStarReviews />
                            </span>
                            <span className="wh-star">
                              <WhiteStarReviews />
                            </span>
                          </div>
                          <div className="share-comment">
                            <ul>
                              <li>
                                <Link href={"javascript:void(0)"}>
                                  <ShareIconRestroDetail />
                                  <p>Share</p>
                                </Link>
                              </li>
                              <li>
                                <Link href={"javascript:void(0)"}>
                                  <CommentIconRestroDetail />
                                  <p>Comment</p>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12}>
              <div className="user-section">
                <div className="restro-detail">
                  <div className="restro-name">
                    <div className="jt-tital">
                      <div className="user-img">
                        <div className="d-flex align-items-center">
                          <figure>
                            <img
                              src="/images/restro-img1.png"
                              alt="restro-img1"
                            />
                          </figure>
                          <div>
                            <h5>John Duo</h5>
                            <p>50 Reviews</p>
                          </div>
                        </div>
                        <div className="review-date">
                          <p>10 Dec</p>
                          <Link href={"javascript:void(0)"}>
                            <MoreOptionIconRestroDetail />
                          </Link>
                        </div>
                      </div>
                      <div className="jt-sub-tital">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="user-view">
                          <div>
                            <span>
                              <BlueStarRatingReviews />
                            </span>
                            <span>
                              <BlueStarRatingReviews />
                            </span>
                            <span>
                              <BlueStarRatingReviews />
                            </span>
                            <span>
                              <BlueStarRatingReviews />
                            </span>
                            <span className="wh-star">
                              <WhiteStarReviews />
                            </span>
                          </div>
                          <div className="share-comment">
                            <ul>
                              <li>
                                <Link href={"javascript:void(0)"}>
                                  <ShareIconRestroDetail />
                                  <p>Share</p>
                                </Link>
                              </li>
                              <li>
                                <Link href={"javascript:void(0)"}>
                                  <CommentIconRestroDetail />
                                  <p>Comment</p>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12}>
              <div className="user-section">
                <div className="restro-detail">
                  <div className="restro-name">
                    <div className="jt-tital">
                      <div className="user-img">
                        <div className="d-flex align-items-center">
                          <figure>
                            <img
                              src="/images/restro-img1.png"
                              alt="restro-img1"
                            />
                          </figure>
                          <div>
                            <h5>John Duo</h5>
                            <p>50 Reviews</p>
                          </div>
                        </div>
                        <div className="review-date">
                          <p>10 Dec</p>
                          <Link href={"javascript:void(0)"}>
                            <MoreOptionIconRestroDetail />
                          </Link>
                        </div>
                      </div>
                      <div className="jt-sub-tital">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="user-view">
                          <div>
                            <span>
                              <BlueStarRatingReviews />
                            </span>
                            <span>
                              <BlueStarRatingReviews />
                            </span>
                            <span>
                              <BlueStarRatingReviews />
                            </span>
                            <span>
                              <BlueStarRatingReviews />
                            </span>
                            <span className="wh-star">
                              <WhiteStarReviews />
                            </span>
                          </div>
                          <div className="share-comment">
                            <ul>
                              <li>
                                <Link href={"javascript:void(0)"}>
                                  <ShareIconRestroDetail />
                                  <p>Share</p>
                                </Link>
                              </li>
                              <li>
                                <Link href={"javascript:void(0)"}>
                                  <CommentIconRestroDetail />
                                  <p>Comment</p>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12}>
              <div className="user-section">
                <div className="restro-detail">
                  <div className="restro-name">
                    <div className="jt-tital">
                      <div className="user-img">
                        <div className="d-flex align-items-center">
                          <figure>
                            <img
                              src="/images/restro-img1.png"
                              alt="restro-img1"
                            />
                          </figure>
                          <div>
                            <h5>John Duo</h5>
                            <p>50 Reviews</p>
                          </div>
                        </div>
                        <div className="review-date">
                          <p>10 Dec</p>
                          <Link href={"javascript:void(0)"}>
                            <MoreOptionIconRestroDetail />
                          </Link>
                        </div>
                      </div>
                      <div className="jt-sub-tital">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="user-view">
                          <div>
                            <span>
                              <BlueStarRatingReviews />
                            </span>
                            <span>
                              <BlueStarRatingReviews />
                            </span>
                            <span>
                              <WhiteStarReviews />
                            </span>
                            <span>
                              <WhiteStarReviews />
                            </span>
                            <span className="wh-star">
                              <WhiteStarReviews />
                            </span>
                          </div>
                          <div className="share-comment">
                            <ul>
                              <li>
                                <Link href={"javascript:void(0)"}>
                                  <ShareIconRestroDetail />
                                  <p>Share</p>
                                </Link>
                              </li>
                              <li>
                                <Link href={"javascript:void(0)"}>
                                  <CommentIconRestroDetail />
                                  <p>Comment</p>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </RestroIndex>
      {show && <RestoDetails onClose={handleShow} />}
    </>
  );
};

export default RestaurantDetails;
