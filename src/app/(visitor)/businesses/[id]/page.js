"use client";
import {
  LikeIconCategoryPage,
  YellowRatingStarCategories,
  WhiteStarCategories,
  PhoneIconCategory,
  WatchIconRestroDetailVisitor,
  StarTapReviewRestroDetail,
  WhatsappSocialIcon,
  ShareIconRestroDetail,
  WhiteStarReviews,
  WhiteStarRatingRestroDetail,
  VerificationIconRestroDetail,
  BlueStarRatingReviews,
  SolidHeart,
} from "@/assets/svgs";

import { React, useState, useRef, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { RestroIndex } from "../../../../styles/visiter/restro-detail.style";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import RestoDetails from "@/components/modal/restaurant-details/page";
import { useParams, useRouter } from "next/navigation";
import { useMetaData, useToaster, useAuth } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import Modal from "react-bootstrap/Modal";
import { axiosDelete, axiosPost } from "@/services/axiosHelper";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { useMemo } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormProvider, RHFTextInput } from "@/components/hook-form";
import { BannerDetail } from "@/styles/banner-section.style";
import { Loader, TablePagination } from "@/components";
import AddUpdateReview from "@/sections/visitor/businesses/business-add-update-review";
import { generateArray, getDirectionUrl, shareContent } from "@/utils/helper";
import { CLIENT_URL } from "@/config";
import { useClipboard } from "@/hooks/useClipboard";
import { PATH_AUTH, PATH_SOCIAL, PATH_VISITOR } from "@/routes/paths";
import { encodeData } from "@/utils/jwt";

const RestaurantDetails = () => {
  const initTableConfig = {
    activePage: 1,
  };

  // States
  const [show, setShow] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [showASModel, setShowASModel] = useState(false);
  const [tableConfig, setTableConfig] = useState(initTableConfig);

  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  // Hooks
  const { id } = useParams();
  const { isAuthenticated } = useAuth();
  const { toaster } = useToaster();
  const [businessDetails, isLoading, fetchBusinessDetails] = useMetaData(
    API_ROUTER.RESTAURANT_DETAIL(id)
  );
  const [businessReviews, isReviewFetching, fetchReviews] = useMetaData(
    API_ROUTER.RESTAURANT_REVIEW_LIST(id)
  );
  const divRef = useRef(null);
  const { copy } = useClipboard();
  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        question: yup.string().required("this field is required"),
        // comment: yup.string().required("this field is reqired"),
      })
      .required()
      .strict(true);
  }, []);

  const methods = useForm({
    resolver: yupResolver(formSchema),
  });
  const { push } = useRouter();

  // Effects
  useEffect(() => {
    fetchReviews({
      page: tableConfig.activePage,
    });
  }, [tableConfig]);

  // Handlers
  const handleCloseModel = () => setShowModel(false);

  const handleShowModel = () => {
    if (isAuthenticated) {
      setShowModel(true);
    } else {
      push(
        `${PATH_AUTH.login}/?returnTo=${encodeData(
          PATH_VISITOR.businessDetail(id)
        )}`
      );
    }
  };
  const handleCloseASModel = () => setShowASModel(false);
  const handleShowASModel = () => setShowASModel(true);

  const rating = businessDetails?.average_rating || 0;
  const yellowStarsCount = Math.max(0, Math.min(5, Math.floor(rating)));
  const whiteStarsCount = 5 - yellowStarsCount;
  const phoneNumber = businessDetails?.owner?.mobile_number;

  const handlePhoneClick = () => (window.location.href = `tel:${phoneNumber}`);

  const handleChatClick = () => {
    const wpNumber = businessDetails?.business_whatsapp;
    const whatsappUrl = `https://wa.me/${wpNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  // Handlers
  const onPageChange = (page) =>
    setTableConfig((prev) => ({ ...prev, activePage: page }));

  const handleShow = () => setShow(!show);

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  const scrollToDiv = () =>
    divRef.current.scrollIntoView({ behavior: "smooth" });

  const onSubmitForm = async (formData) => {
    try {
      const res = await axiosPost(API_ROUTER.RESTAURANT_QUERY(id), {
        question: formData?.question,
      });

      if (!res?.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(TOAST_ALERTS.RESTAURANT_QUERY_SUCCESS, TOAST_TYPES.SUCCESS);
        setShowModel(false);
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  const handleShareClick = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          text: "Check out this website!",
          url: window.location.href,
        });
      } else {
        throw new Error("Web Share API not supported.");
      }
    } catch (error) {}
  };

  const onReviewClick = () => {
    try {
      if (isAuthenticated) {
        setIsReviewModalOpen(true);
      } else {
        push(
          `${PATH_AUTH.login}/?returnTo=${encodeData(
            PATH_VISITOR.businessDetail(id)
          )}`
        );
      }
    } catch (error) {}
  };

  const fetchData = () => {
    fetchBusinessDetails();
    fetchReviews({ page: 1 });
    setTableConfig((prev) => ({ ...prev, activePage: 1 }));
  };

  const favoriteHandler = async (e, { id, is_favorite }) => {
    e.stopPropagation();
    try {
      const res = is_favorite
        ? await axiosDelete(API_ROUTER.REMOVE_FAVORITE_BUSINESS(id))
        : await axiosPost(API_ROUTER.ADD_FAVORITE_BUSINESS(id));
      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(
          is_favorite
            ? TOAST_ALERTS.REMOVE_BUSINESS_FAVORITE_SUCCESS
            : TOAST_ALERTS.ADD_BUSINESS_FAVORITE_SUCCESS,
          TOAST_TYPES.SUCCESS
        );
        setTableConfig((prev) => ({ ...prev, activePage: 1 }));
        fetchData({
          page: 1,
        });
      }
    } catch (error) {}
  };

  const onCopy = (data) => {
    try {
      copy(data);
      toaster(TOAST_ALERTS.COPY_SUCCESS, TOAST_TYPES.SUCCESS);
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  // Renders
  const renderReviewModal = useMemo(
    () => (
      <AddUpdateReview
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        isEdit={businessDetails?.your_review}
        fetchData={fetchData}
      />
    ),
    [isReviewModalOpen, businessDetails, setIsReviewModalOpen, fetchData]
  );

  
  const router = useRouter();
  const handelService = (id) => {
    router.push(`/businesses?amenity=${encodeURIComponent(id)}`);
  };
  const renderAmenitiesModal = useMemo(
    () => (
      <Modal
        show={showASModel}
        onHide={handleCloseASModel}
        className="restro-detail-modal"
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>Amenities & Services</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {businessDetails?.restaurant_services &&
            businessDetails?.restaurant_services.length > 0 ? (
              businessDetails?.restaurant_services.map((item, index) => (
                <li key={index} style={{ cursor: "pointer" }}>
                  <VerificationIconRestroDetail />
                  <h5 onClick={() => handelService(item.service?.id)}>
                    {item.service.service_name}
                  </h5>
                </li>
              ))
            ) : (
              <p>No amenities available</p>
            )}
          </ul>
        </Modal.Body>
      </Modal>
    ),
    [showASModel, handleCloseASModel, businessDetails]
  );

  const renderAskQueryModal = useMemo(
    () => (
      <Modal show={showModel} onHide={handleCloseModel}>
        <Modal.Header closeButton>
          <Modal.Title>Write Query</Modal.Title>
        </Modal.Header>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <RHFTextInput name="question" type="text" placeholder="" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModel}>
              Close
            </Button>
            <Button
              className="common-btn"
              type="submit"
              disabled={isSubmitting}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </FormProvider>
      </Modal>
    ),
    [
      showModel,
      methods,
      handleCloseModel,
      handleSubmit,
      onSubmitForm,
      isSubmitting,
    ]
  );

  const renderBusinessDetails = useMemo(
    () => show && <RestoDetails onClose={handleShow} />,
    [handleShow, show]
  );

  const renderReviewSection = () => (
    <Row className="section-block">
      <Col md={12}>
        <div className="jt-send-email">
          <h2>
            User Reviews <span></span>
          </h2>
        </div>
      </Col>
      <Col md={12}>
        {isReviewFetching ? (
          <Loader />
        ) : (
          businessReviews?.results &&
          businessReviews?.results.length > 0 &&
          businessReviews?.results.map((item, index) => {
            const rating = item?.rating || 0;
            const yellowStarsCount = Math.max(
              0,
              Math.min(5, Math.floor(rating))
            );
            const whiteStarsCount = 5 - yellowStarsCount;
            return (
              <>
                <div className="ReviewItem" key={index}>
                  <div className="user-section">
                    <div className="restro-detail">
                      <div className="restro-name">
                        <div className="jt-tital">
                          <div className="user-img">
                            <div className="d-flex align-items-center">
                              <figure>
                                {item.user.profile_image ? (
                                  <img src={item.user.profile_image} />
                                ) : (
                                  <img src={"/images/restro-img1.png"} />
                                )}
                              </figure>
                              <Link
                                href={`${PATH_SOCIAL.socialUser}?id=${item?.user?.id}`}
                              >
                                <div>
                                  <h5>{item?.user?.username}</h5>
                                </div>
                              </Link>
                            </div>
                            <div className="review-date">
                              {/* <Link href={"javascript:void(0)"}>
                          <MoreOptionIconRestroDetail />
                        </Link> */}
                            </div>
                          </div>
                          <div className="jt-sub-tital">
                            <p>{item.comment}</p>
                            <div className="user-view">
                              <div>
                                <span>
                                  <div>
                                    {generateArray(yellowStarsCount)?.map(
                                      (_, i) => (
                                        <span key={i}>
                                          <BlueStarRatingReviews />
                                        </span>
                                      )
                                    )}
                                    {generateArray(whiteStarsCount).map(
                                      (_, i) => (
                                        <span className="wh-star" key={i}>
                                          <WhiteStarReviews />
                                        </span>
                                      )
                                    )}
                                  </div>
                                </span>
                              </div>
                              <div className="share-comment">
                                <ul></ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        )}
        <TablePagination
          total={businessReviews?.count || 0}
          activePage={tableConfig.activePage}
          pageLimit={15}
          onPageChanged={onPageChange}
          isLastPage={!businessReviews?.next}
          className="d-flex justify-content-center align-items-center"
        />
      </Col>
    </Row>
  );

  // if (isLoading) return <Loader />;

  return (
    <>
      <RestroIndex>
        <BannerDetail>
          <Swiper
            pagination={true}
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {businessDetails?.restaurant_images?.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="jt-banner-img">
                  <figure>
                    {item.image ? (
                      <img src={item.image} />
                    ) : (
                      <img src={"/images/restro-detail1.png"} />
                    )}
                  </figure>
                  <Container>
                    <div className="jt-banner-tital">
                      <h3>{item.title}</h3>
                      <p>{item.discription}</p>
                    </div>
                  </Container>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination"></div>
        </BannerDetail>
        <Container>
          <Row>
            <Col md={12}>
              <div className="categories-section">
                <div className="review-detail">
                  <div className="restro-detail">
                    <div className="restro-like">
                      <h4>{businessDetails?.name}</h4>
                      <div className="d-flex">
                        <Button
                          className="common-btn me-3 url-btn"
                          onClick={() =>
                            onCopy(`${CLIENT_URL}${window.location.pathname}`)
                          }
                        >
                          Copy Url
                        </Button>
                        <div className="like-icon">
                          <Button
                            className="common-btn trans-btn"
                            onClick={(e) => favoriteHandler(e, businessDetails)}
                          >
                            {businessDetails?.is_favorite ? (
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
                      <h5>{businessDetails?.business_description}</h5>
                    </div>
                    <div className="restro-review">
                      <span>
                        <div>
                          {generateArray(yellowStarsCount).map((_, i) => (
                            <span key={i}>
                              <YellowRatingStarCategories />
                            </span>
                          ))}
                          {generateArray(whiteStarsCount).map((_, i) => (
                            <span className="wh-star" key={i}>
                              <WhiteStarCategories />
                            </span>
                          ))}
                        </div>
                      </span>
                      <small>
                        <p>{businessDetails?.average_rating?.toFixed(2)}</p>
                        <p>({businessDetails?.rating_count})</p>
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
                        href={`tel:${phoneNumber}`}
                        onClick={handlePhoneClick}
                      >
                        <PhoneIconCategory />
                        <h5>{businessDetails?.owner?.mobile_number}</h5>
                      </Link>
                      <button className="common-btn" onClick={scrollToDiv}>
                        <StarTapReviewRestroDetail />
                        <h5>Tap to Rate</h5>
                      </button>
                      <button
                        className="common-btn  success-btn"
                        onClick={handleChatClick}
                      >
                        <WhatsappSocialIcon />
                        <h5>chat</h5>
                      </button>
                      <button className="common-btn" onClick={handleShareClick}>
                        <ShareIconRestroDetail className="share-icon" />
                        <h5>Share</h5>
                      </button>
                      <Link
                        className="common-btn ms-auto"
                        href={`/businesses/${id}/menu`}
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
                      href={`tel:${phoneNumber}`}
                      onClick={handlePhoneClick}
                    >
                      <PhoneIconCategory />
                      <h5>{businessDetails?.owner?.mobile_number}</h5>
                    </Link>
                    <div className="like-icon">
                      <button
                        className="common-btn trans-btn"
                        onClick={(e) => favoriteHandler(e, businessDetails)}
                      >
                        {businessDetails?.is_favorite ? (
                          <SolidHeart />
                        ) : (
                          <LikeIconCategoryPage />
                        )}
                      </button>
                    </div>
                    <button
                      className="common-btn"
                      onClick={() =>
                        onCopy(`${CLIENT_URL}${window.location.pathname}`)
                      }
                    >
                      <h5>Copy Url</h5>
                    </button>
                    <Link
                      className="common-btn"
                      href={`/businesses/${id}/menu`}
                    >
                      <h5>Menu</h5>
                    </Link>
                  </div>
                  <div className="restro-btn">
                    <Link
                      className="common-btn"
                      href={"javascript:void(0)"}
                      onClick={handleShareClick}
                    >
                      <ShareIconRestroDetail />
                      <h5>Share</h5>
                    </Link>
                    <Link
                      className="common-btn   success-btn"
                      href={"javascript:void(0)"}
                      onClick={handleChatClick}
                    >
                      <WhatsappSocialIcon />
                      <h5>chat</h5>
                    </Link>
                  </div>
                </div>
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
                    <h5> - Cuisines</h5>
                    <ul>
                      <li className="food-dish-list ">
                        {businessDetails?.cuisines &&
                          businessDetails?.cuisines.length > 0 &&
                          businessDetails?.cuisines.map((item, index) => {
                            return <p key={index}>{item.cuisine.cuisines},</p>;
                          })}
                      </li>
                      <li>
                        <h5> - Type</h5>
                        <div className="food-dish-list m-0">
                          <p>{businessDetails?.type?.type}</p>
                        </div>
                      </li>
                    </ul>
                    <ul className="mt-4">
                      <li className="info-sub-tital">
                        <h5>- Years of Establishment</h5>
                        <div className="food-dish-list m-0">
                          <p>{businessDetails?.year_of_established},</p>
                        </div>
                      </li>
                      <li className="info-sub-tital">
                        <h5>- Mode of Payment</h5>
                        {businessDetails?.restaurant_payment_modes &&
                          businessDetails?.restaurant_payment_modes.length >
                            0 &&
                          businessDetails?.restaurant_payment_modes.map(
                            (item, index) => {
                              return (
                                <div className="food-dish-list m-0" key={index}>
                                  <p>{item.payment.payment_name},</p>
                                </div>
                              );
                            }
                          )}
                        {/* <p>Cash</p> */}
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
                        <div className="week-timeing">
                          <p>Monday </p>
                          <span>
                            <small>I</small>
                            {businessDetails?.restaurants_timings[0]?.from_hour}
                            -{businessDetails?.restaurants_timings[0]?.to_hour}
                          </span>
                        </div>
                        <div className="week-timeing">
                          <p>Tuesday</p>
                          <span>
                            <small>I</small>
                            {businessDetails?.restaurants_timings[1]?.from_hour}
                            -{businessDetails?.restaurants_timings[1]?.to_hour}
                          </span>
                        </div>
                        <div className="week-timeing">
                          <p>Wednesday</p>
                          <span>
                            <small>I</small>
                            {businessDetails?.restaurants_timings[2]?.from_hour}
                            -{businessDetails?.restaurants_timings[2]?.to_hour}
                          </span>
                        </div>
                        <div className="week-timeing">
                          <p>Thursday</p>
                          <span>
                            <small>I</small>
                            {businessDetails?.restaurants_timings[3]?.from_hour}
                            -{businessDetails?.restaurants_timings[3]?.to_hour}
                          </span>
                        </div>
                        <div className="week-timeing">
                          <p>Friday</p>
                          <span>
                            <small>I</small>
                            {businessDetails?.restaurants_timings[4]?.from_hour}
                            -{businessDetails?.restaurants_timings[4]?.to_hour}
                          </span>
                        </div>
                        <div className="week-timeing mb-4">
                          <p>Saturday</p>
                          <span>
                            <small>I</small>
                            {businessDetails?.restaurants_timings[5]?.from_hour}
                            -{businessDetails?.restaurants_timings[5]?.to_hour}
                          </span>
                        </div>
                      </li>
                    </ul>
                    <ul>
                      <li className="d-flex justify-content-between"></li>
                      <li>
                        <div className="week-timeing">
                          <p>Sunday</p>
                          <span>
                            <small>I</small>
                            {businessDetails?.restaurants_timings[6]?.from_hour}
                            -{businessDetails?.restaurants_timings[6]?.to_hour}
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={{ order: 1 }} lg={{ span: 4, order: 2 }}>
              <div className="quick-section">
                <div className="info-tital">
                  <h4>Address</h4>
                </div>
                <div className="info-address">
                  <div className="info-detail border-0">
                    <h5>{businessDetails?.address}</h5>
                    <div className="d-flex">
                      <Button
                        className="common-btn trans-btn"
                        onClick={() =>
                          window.open(
                            getDirectionUrl(
                              businessDetails?.latitude,
                              businessDetails?.longitude
                            ),
                            "_blank"
                          )
                        }
                      >
                        Get Direction
                      </Button>
                      <Button
                        className="common-btn trans-btn"
                        onClick={() =>
                          onCopy(
                            getDirectionUrl(
                              businessDetails?.latitude,
                              businessDetails?.longitude
                            )
                          )
                        }
                      >
                        Copy
                      </Button>
                    </div>
                    <div
                      className="restro-time share-icon cursor-pointer-block"
                      onClick={() =>
                        shareContent({
                          title: "Share Location",
                          text: "Check out this business on Maps!",
                          url: getDirectionUrl(
                            businessDetails?.latitude,
                            businessDetails?.longitude
                          ),
                        })
                      }
                    >
                      <ShareIconRestroDetail />
                      <p>Share this</p>
                    </div>
                    <div className="restro-time" onClick={scrollToDiv}>
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
                  {businessDetails?.restaurant_services?.length > 0 && (
                    <button className="common-btn" onClick={handleShowASModel}>
                      View All
                    </button>
                  )}
                </div>
                <div className="services-detail">
                  <div className="info-detail border-0">
                    <div className="restro-time">
                      <ul>
                        {businessDetails?.restaurant_services &&
                        businessDetails?.restaurant_services.length > 0 ? (
                          businessDetails?.restaurant_services.map(
                            (item, index) => {
                              return (
                                <li key={index} style={{ cursor: "pointer" }}>
                                  <VerificationIconRestroDetail />
                                  <h5
                                    onClick={() =>
                                      handelService(item.service?.id)
                                    }
                                  >
                                    {item.service.service_name}
                                  </h5>
                                </li>
                              );
                            }
                          )
                        ) : (
                          <p>No amenities available</p>
                        )}
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
            <Col md={12}></Col>
          </Row>
          <Row>
            <Col md={8}>
              <div
                className="categories-section ratings-section"
                id="targetDiv"
                ref={divRef}
              >
                <div className="review-detail">
                  <div className="restro-detail">
                    <div className="info-tital">
                      <h4>Reviews & Ratings</h4>
                      <Button
                        className="common-btn"
                        onClick={() =>
                          onReviewClick(businessDetails?.your_review)
                        }
                      >
                        {businessDetails?.your_review
                          ? "Update your review"
                          : "Write your review"}
                      </Button>
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
                        <h5>
                          {businessDetails?.your_review
                            ? "Reviewed"
                            : "Start a review"}
                        </h5>
                        {businessDetails?.your_review ? (
                          <>
                            {generateArray(
                              businessDetails?.your_review?.rating
                            )?.map((_, i) => (
                              <span key={i}>
                                <YellowRatingStarCategories />
                              </span>
                            ))}
                            {generateArray(
                              5 - businessDetails?.your_review?.rating
                            )?.map((_, i) => (
                              <span className="wh-star" key={i}>
                                <WhiteStarCategories />
                              </span>
                            ))}
                          </>
                        ) : (
                          <span>
                            {generateArray(5).map((_, i) => (
                              <WhiteStarCategories key={i} />
                            ))}
                          </span>
                        )}
                      </div>
                    </div>
                    <Button
                      className="common-btn write-btn"
                      onClick={() =>
                        onReviewClick(businessDetails?.your_review)
                      }
                    >
                      {businessDetails?.your_review
                        ? "Update your review"
                        : "Write your review"}
                    </Button>
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
                      <button
                        className="common-btn ask-btn trans-btn"
                        onClick={handleShowModel}
                      >
                        Ask a Question
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          {renderReviewSection()}
        </Container>
      </RestroIndex>
      {renderBusinessDetails}
      {renderAskQueryModal}
      {renderAmenitiesModal}
      {renderReviewModal}
    </>
  );
};

export default RestaurantDetails;
