"use client";
import {
  LikeIconCategoryPage,
  LocationIconCategoryPage,
  SolidHeart,
  WhiteStarCategories,
  YellowRatingStarCategories,
} from "@/assets/svgs";
import { HeroSection } from "@/components/landing";
import { ReviewDetail } from "@/styles/visiter/review.style";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useAuth, useMetaData, useToaster } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import { useRouter } from "next/navigation";
import { PATH_AUTH, PATH_VISITOR } from "@/routes/paths";
import { Loader, TablePagination } from "@/components";
import Link from "next/link";
import { axiosDelete, axiosPost } from "@/services/axiosHelper";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { generateArray } from "@/utils/helper";

const FavoriteBusinessView = () => {
  // Init Config
  const initTableConfig = {
    activePage: 1,
  };

  // States
  const [tableConfig, setTableConfig] = useState(initTableConfig);

  // Hooks
  const { isAuthenticated } = useAuth();
  const [businesses, isLoading, fetchBusinesses] = useMetaData(
    API_ROUTER.GET_FAVORITE_BUSINESSES
  );
  const router = useRouter();
  const { toaster } = useToaster();

  // Effects
  useEffect(() => {
    fetchBusinesses({
      page: tableConfig.activePage,
    });
  }, [tableConfig]);

  // Handlers
  const onPageChange = (page) => {
    setTableConfig((prev) => ({ ...prev, activePage: page }));
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
        fetchBusinesses({
          page: 1,
        });
      }
    } catch (error) {}
  };

  // Returns
  return (
    <>
      <HeroSection />
      <ReviewDetail>
        <Container className="px-3 px-xxl-0">
          <h2>
            Your Favorite Businesses<span></span>
          </h2>
          {isLoading ? (
            <Loader />
          ) : isAuthenticated ? (
            businesses?.results?.length > 0 ? (
              <Row>
                {businesses?.results?.map(({ restaurant }) => (
                  <Col lg={6} key={restaurant.id}>
                    <div className="categories-box">
                      <div className="d-md-flex w-100">
                        <div className="categories-img">
                          <figure>
                            <img
                              src={
                                restaurant.profile_image ||
                                `https://eu.ui-avatars.com/api/?name=${restaurant?.name}&size=164`
                              }
                              alt="categories-img.png"
                            />
                          </figure>
                        </div>
                        <div className="restro-detail">
                          <div className="restro-like">
                            <Link
                              href={PATH_VISITOR.businessDetail(restaurant.id)}
                            >
                              <h5>{restaurant?.name}</h5>
                            </Link>
                            <div className="like-icon">
                              <Button
                                className="common-btn trans-btn"
                                onClick={(e) => favoriteHandler(e, restaurant)}
                              >
                                {restaurant?.is_favorite ? (
                                  <SolidHeart />
                                ) : (
                                  <LikeIconCategoryPage />
                                )}
                              </Button>
                            </div>
                          </div>
                          <div className="restro-location">
                            <i>
                              <LocationIconCategoryPage />
                            </i>
                            <p>{restaurant?.address}</p>
                          </div>
                          <h6>Rating</h6>
                          <div className="restro-review">
                            {restaurant.average_rating > 0 &&
                              generateArray(restaurant.average_rating)?.map(
                                (_, i) => (
                                  <span key={i}>
                                    <YellowRatingStarCategories />
                                  </span>
                                )
                              )}
                            {generateArray(5 - restaurant.average_rating)?.map(
                              (_, i) => (
                                <span className="wh-star" key={i}>
                                  <WhiteStarCategories />
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
                <TablePagination
                  className="d-flex justify-content-center align-items-center"
                  total={businesses?.count || 0}
                  activePage={tableConfig.activePage}
                  pageLimit={15}
                  onPageChanged={onPageChange}
                  isLastPage={!businesses?.next}
                />
              </Row>
            ) : (
              <h4 className="text-center">No Favorite Businesses Found</h4>
            )
          ) : (
            <Row className="d-flex justify-content-center align-items-center">
              <h5 className="text-center mb-2">
                Please Login to view Favourite Businesses
              </h5>
              <Button
                className="common-btn border-0 align-self-center"
                onClick={() => router.push(PATH_AUTH.login)}
              >
                Login Here
              </Button>
            </Row>
          )}
        </Container>
      </ReviewDetail>
    </>
  );
};

export default FavoriteBusinessView;
