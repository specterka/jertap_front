"use client";

import {
  LikeIconCategoryPage,
  LocationIconCategoryPage,
  YellowRatingStarCategories,
  WhiteStarCategories,
  PhoneIconCategory,
  SolidHeart,
} from "@/assets/svgs";

import { HeroSection } from "@/components/landing";
import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { CategoryIndex } from "../../../styles/visiter/category.style";
import Link from "next/link";
import Category from "@/components/modal/category/page";
import { useAuth, useMetaData, useToaster } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import { PATH_AUTH, PATH_VISITOR } from "@/routes/paths";
import { Loader, TablePagination } from "@/components";
import { axiosDelete, axiosPost } from "@/services/axiosHelper";
import { STORAGE_KEYS, TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { generateArray } from "@/utils/helper";
import { encodeData } from "@/utils/jwt";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSearchParams, useRouter } from "next/navigation";
import { saveData } from "@/utils/storage";

const BusinessesPage = () => {
  // Effect for initializing AOS animations
  useEffect(() => {
    AOS.init();
  }, []);

  const initTableConfig = {
    activePage: 1,
    category: "",
    cuisine: "",
    amenity: "",
    rating: "",
    city: "",
  };

  // States
  const [show, setShow] = useState(false);
  const [tableConfig, setTableConfig] = useState(initTableConfig);
  const searchParams = useSearchParams();
  const router = useRouter();

  // Hooks
  const [restaurantsList, isFetching, fetchBusiness] = useMetaData(
    API_ROUTER.ALL_RESTAURANT_LIST
  );
  const [categoriesList] = useMetaData(API_ROUTER.GET_HOME_CATEGORIES);
  const [serviceList] = useMetaData(API_ROUTER.ALL_SERVICE_LIST);
  const [cuisineList] = useMetaData(API_ROUTER.ALL_CUISINE_LIST);
  const [cityList] = useMetaData(API_ROUTER.ALL_CITY_SEARCH);

  const { toaster } = useToaster();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const amenitiesParam = searchParams.get("amenity");

    fetchBusiness({
      page: tableConfig.activePage,
      ...(categoryParam ? { category: categoryParam } : {}),
      ...(amenitiesParam ? { amenity: amenitiesParam } : {}),
      ...(tableConfig.category ? { category: tableConfig.category } : {}),
      ...(tableConfig.cuisine ? { cuisine: tableConfig.cuisine } : {}),
      ...(tableConfig.amenity ? { amenity: tableConfig.amenity } : {}),
      ...(tableConfig.rating ? { rating: tableConfig.rating } : {}),
      ...(tableConfig.city ? { city: tableConfig.city } : {}),
    });
  }, [searchParams, tableConfig]);

  const onPageChange = (page) => {
    setTableConfig((prev) => ({ ...prev, activePage: page }));
    window.scrollTo(0, 0);
  };

  const onChangeConfig = (name, value) => {
    setTableConfig((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const favoriteHandler = async (e, { id, is_favorite }) => {
    e.stopPropagation();
    if (!isAuthenticated) {
      saveData(STORAGE_KEYS.RETURN_TO , PATH_VISITOR.businesses )
      return router.push(
        `${PATH_AUTH.login}/?returnTo=${encodeData(PATH_VISITOR.businesses)}`
      );
    }
    try {
      const res = is_favorite
        ? await axiosDelete(API_ROUTER.REMOVE_FAVORITE_BUSINESS(id))
        : await axiosPost(API_ROUTER.ADD_FAVORITE_BUSINESS(id));
      if (res.status) {
        toaster(
          is_favorite
            ? TOAST_ALERTS.REMOVE_BUSINESS_FAVORITE_SUCCESS
            : TOAST_ALERTS.ADD_BUSINESS_FAVORITE_SUCCESS,
          TOAST_TYPES.SUCCESS
        );
        fetchBusiness({ page: tableConfig.activePage });
      } else {
        toaster(res?.message || TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  // Toggle category modal
  const handleShow = () => setShow(!show);

  return (
    <>
      <HeroSection />
      <CategoryIndex className="section-block">
        <h2 data-aos="fade-up" data-aos-duration="1000">
          Restaurant<span></span>
        </h2>
        {isFetching ? (
          <Loader />
        ) : (
          <Container>
            <div
              className="jt-food-list"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="food-price">
                <form>
                  <select
                    value={tableConfig.category}
                    onChange={({ target: { value } }) =>
                      onChangeConfig("category", value)
                    }
                  >
                    <option value="" disabled selected>
                      Select a Category
                    </option>

                    {categoriesList?.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </form>
              </div>
              <div className="food-price">
                <form>
                  <select
                    value={tableConfig.amenity}
                    onChange={({ target: { value } }) =>
                      onChangeConfig("amenity", value)
                    }
                  >
                    <option value="" disabled selected>
                      Select a Amenities
                    </option>
                    {serviceList?.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.service_name}
                      </option>
                    ))}
                  </select>
                </form>
              </div>
              <div className="food-price">
                <form>
                  <select
                    value={tableConfig.cuisine}
                    onChange={({ target: { value } }) =>
                      onChangeConfig("cuisine", value)
                    }
                  >
                    <option value="" disabled selected>
                      Select a Cuisine
                    </option>
                    {cuisineList?.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.cuisines}
                      </option>
                    ))}
                  </select>
                </form>
              </div>
              <div className="food-price">
                <form>
                  <select
                    value={tableConfig.rating}
                    onChange={({ target: { value } }) =>
                      onChangeConfig("rating", value)
                    }
                  >
                    <option value="" disabled selected>
                      Rating
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </form>
              </div>
              <div className="food-price">
                <form>
                  <select
                    value={tableConfig.city}
                    onChange={({ target: { value } }) =>
                      onChangeConfig("city", value)
                    }
                  >
                    <option value="" disabled selected>
                      Select a City
                    </option>
                    {cityList?.results?.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.city}
                      </option>
                    ))}
                  </select>
                </form>
              </div>
            </div>

            {restaurantsList?.results.length >= 0 ? (
              restaurantsList.results.map((item, index) => (
                <Link href={PATH_VISITOR.businessDetail(item.id)} key={index}>
                  <div
                    className="categories-box"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div className="d-flex w-100">
                      <div className="categories-img">
                        <figure>
                          <img
                            src={
                              item?.profile_image ||
                              `https://eu.ui-avatars.com/api/?name=${item.name}&size=164`
                            }
                            alt="categories-img.png"
                          />
                        </figure>
                      </div>
                      <div className="restro-detail">
                        <div className="restro-like">
                          <h5>{item.name}</h5>
                          <div className="like-icon">
                            <Button
                              className="common-btn trans-btn"
                              onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                favoriteHandler(e, item);
                              }}
                            >
                              {item?.is_favorite ? (
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
                          <p>{item?.address}</p>
                        </div>
                        <div className="restro-review">
                          <div>
                            <div>
                              {generateArray(item.average_rating)?.map(
                                (_, i) => (
                                  <span key={i}>
                                    <YellowRatingStarCategories />
                                  </span>
                                )
                              )}
                              {generateArray(5 - item.average_rating).map(
                                (_, i) => (
                                  <span className="wh-star" key={i}>
                                    <WhiteStarCategories />
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                          <small>
                            <p>
                              {item.average_rating
                                ? Math.round(item.average_rating)
                                : 0}
                            </p>
                            <p>({item.rating_count})</p>
                          </small>
                        </div>
                        <div className="restro-btn">
                          <Link
                            className="common-btn trans-btn"
                            href={
                              item.phone_number
                                ? `tel:${item.phone_number}`
                                : "#"
                            }
                          >
                            <PhoneIconCategory />
                            {item.phone_number}
                          </Link>
                          <Link
                            className="common-btn"
                            href={PATH_VISITOR.businessMenu(item.id)}
                          >
                            Menu
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="mobile-btn">
                      <div className="restro-btn">
                        <Link
                          className="common-btn trans-btn"
                          href={
                            item.phone_number ? `tel:${item.phone_number}` : "#"
                          }
                        >
                          <PhoneIconCategory />
                          1111111111
                        </Link>
                        <Link
                          className="common-btn"
                          href={PATH_VISITOR.businessMenu(item.id)}
                        >
                          Menu
                        </Link>
                      </div>
                      <div className="like-icon">
                        <Button
                          className="common-btn trans-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            favoriteHandler(e, item);
                          }}
                        >
                          {item?.is_favorite ? (
                            <SolidHeart />
                          ) : (
                            <LikeIconCategoryPage />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="no-data-message">
                <p>No Restaurant available</p>
              </div>
            )}

            <TablePagination
              total={restaurantsList?.count || 0}
              activePage={tableConfig.activePage}
              pageLimit={15}
              onPageChanged={onPageChange}
              isLastPage={!restaurantsList?.next}
              className="d-flex justify-content-center align-items-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </Container>
        )}
      </CategoryIndex>
      {show && <Category onClose={handleShow} />}
    </>
  );
};

export default BusinessesPage;
