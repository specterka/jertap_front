import { React, useEffect, useMemo } from "react";
import { Container } from "react-bootstrap";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMetaData, useGeolocation } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import Loader from "../shared/Loader";
import { groupObjects } from "@/utils/helper";
import { PATH_VISITOR } from "@/routes/paths";
import Link from "next/link";

const RestaurantSection = () => {
  const center = {
    lat: -3.7451605888751627,
    lng: -38.52328967857362,
  };

  // Hooks
  const locationConfig = useGeolocation();
  const [businesses, isFetching, availableRestaurantDetail] = useMetaData(
    API_ROUTER.HOME_RESTAURANT_SEARCH
  );

  // Handlers
  const handleGetLocation = async () => {
    try {
      await availableRestaurantDetail({
        lat: locationConfig.latitude || center.lat,
        long: locationConfig.longitude || center.lng,
      });
    } catch (error) {}
  };

  // Effects
  useEffect(() => {
    handleGetLocation();
  }, []);

  // Constants
  const finalBusinesses = useMemo(() => {
    if (businesses && businesses.length > 0) {
      return groupObjects(businesses, 3);
    } else {
      return {};
    }
  }, [businesses]);

  return (
    <div className="restro-section section-block">
      <Container>
        <h2 data-aos="fade-up" data-aos-duration="1000">
          Available Restaurant <span> </span>
        </h2>
        {isFetching ? (
          <Loader />
        ) : (
          <Swiper
            // navigation={true}
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            // pagination={{
            //   clickable: true,
            // }}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            // }}
            className="mySwiper"
          >
            {finalBusinesses && Object.keys(finalBusinesses)?.length > 0
              ? Object.keys(finalBusinesses).map((business) =>
                  finalBusinesses[business]?.length === 3 ? (
                    <SwiperSlide key={business}>
                      <div
                        className="d-block d-md-flex"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        {finalBusinesses[business]?.map((item, index) =>
                          index === 0 ? (
                            <>
                              <Link
                                href={PATH_VISITOR.businessDetail(item.id)}
                                className="restro-detail"
                              >
                                <div className="restro-detail" key={item.id}>
                                  <figure>
                                    <img
                                      style={{
                                        width: "350px",
                                        height: "308px",
                                      }}
                                      // src={item?.profile_image}
                                      src={
                                        item.profile_image
                                          ? item.profile_image
                                          : "/images/restro-img1.png"
                                      }
                                      alt="business-image"
                                    />
                                  </figure>
                                  <div className="restro-name">
                                    <div className="jt-tital">
                                      <div className="d-flex align-items-center mb-4">
                                        <figure>
                                          <img
                                            src="/images/restro-img1.png"
                                            alt="restro-img1"
                                          />
                                        </figure>
                                        <div>
                                          <h5>{item?.owner?.first_name}</h5>
                                          <p>Manager at Restaurant</p>
                                        </div>
                                      </div>
                                      <div className="jt-sub-tital">
                                        <Link
                                          href={PATH_VISITOR.businessDetail(
                                            item.id
                                          )}
                                        >
                                          <h5> {item?.name} </h5>
                                        </Link>
                                        <p>{item?.business_description}</p>
                                        <span>
                                          <svg
                                            width="16"
                                            height="15"
                                            viewBox="0 0 16 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
                                              fill="#FFAD01"
                                            />
                                          </svg>
                                        </span>
                                        <span>
                                          <svg
                                            width="16"
                                            height="15"
                                            viewBox="0 0 16 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
                                              fill="#FFAD01"
                                            />
                                          </svg>
                                        </span>
                                        <span>
                                          <svg
                                            width="16"
                                            height="15"
                                            viewBox="0 0 16 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
                                              fill="#FFAD01"
                                            />
                                          </svg>
                                        </span>
                                        <span>
                                          <svg
                                            width="16"
                                            height="15"
                                            viewBox="0 0 16 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
                                              fill="#FFAD01"
                                            />
                                          </svg>
                                        </span>
                                        <span>
                                          <svg
                                            width="16"
                                            height="15"
                                            viewBox="0 0 16 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M7.52447 1.08156C7.67415 0.620903 8.32585 0.620904 8.47553 1.08156L9.5451 4.37336C9.74591 4.99139 10.3218 5.40983 10.9717 5.40983H14.4329C14.9172 5.40983 15.1186 6.02964 14.7268 6.31434L11.9266 8.34878C11.4009 8.73075 11.1809 9.4078 11.3817 10.0258L12.4513 13.3176C12.6009 13.7783 12.0737 14.1613 11.6818 13.8766L8.88168 11.8422C8.35595 11.4602 7.64405 11.4602 7.11832 11.8422L4.31815 13.8766C3.9263 14.1613 3.39906 13.7783 3.54873 13.3176L4.6183 10.0258C4.81911 9.4078 4.59913 8.73075 4.07339 8.34878L1.27323 6.31434C0.881369 6.02964 1.08276 5.40983 1.56712 5.40983H5.02832C5.67816 5.40983 6.25409 4.99139 6.4549 4.37336L7.52447 1.08156Z"
                                              stroke="#FFAD01"
                                            />
                                          </svg>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </>
                          ) : (
                            <>
                              <Link href={PATH_VISITOR.businessDetail(item.id)}>
                                <div
                                  className="restro-box"
                                  key={item.id}
                                  data-aos="zoom-in"
                                  data-aos-duration="1000"
                                >
                                  <figure>
                                    <img
                                     style={{
                                        width: "295px",
                                        height: "190px",
                                      }}
                                      src={
                                        item.profile_image
                                          ? item.profile_image
                                          : "/images/restro-img1.png"
                                      }
                                      alt="business-image"
                                    />
                                  </figure>
                                  <div className="jt-sub-tital">
                                    <Link
                                      href={PATH_VISITOR.businessDetail(
                                        item.id
                                      )}
                                    >
                                      <h5> {item?.name} </h5>
                                    </Link>
                                    <div className="d-flex align-items-center">
                                      <i>
                                        <svg
                                          width="10"
                                          height="16"
                                          viewBox="0 0 10 16"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M5 15.1794C3.52778 15.1794 2.32639 14.9675 1.39583 14.5438C0.465278 14.12 0 13.573 0 12.9026C0 12.4598 0.201389 12.0741 0.604167 11.7452C1.00694 11.4163 1.5625 11.157 2.27083 10.9673L2.75 12.4093C2.51389 12.4725 2.29861 12.5516 2.10417 12.6464C1.90972 12.7413 1.77778 12.8267 1.70833 12.9026C1.88889 13.105 2.30556 13.282 2.95833 13.4338C3.61111 13.5856 4.29167 13.6615 5 13.6615C5.70833 13.6615 6.39236 13.5856 7.05208 13.4338C7.71181 13.282 8.13194 13.105 8.3125 12.9026C8.24306 12.8267 8.11111 12.7413 7.91667 12.6464C7.72222 12.5516 7.50694 12.4725 7.27083 12.4093L7.75 10.9673C8.45833 11.157 9.01042 11.4163 9.40625 11.7452C9.80208 12.0741 10 12.4598 10 12.9026C10 13.573 9.53472 14.12 8.60417 14.5438C7.67361 14.9675 6.47222 15.1794 5 15.1794ZM5 10.1134C5.25 9.69602 5.51389 9.31339 5.79167 8.96554C6.06944 8.61769 6.34028 8.28565 6.60417 7.96942C7.11806 7.36226 7.52778 6.81519 7.83333 6.3282C8.13889 5.84121 8.29167 5.23721 8.29167 4.51622C8.29167 3.68138 7.97222 2.97303 7.33333 2.39117C6.69444 1.80931 5.91667 1.51838 5 1.51838C4.08333 1.51838 3.30556 1.80931 2.66667 2.39117C2.02778 2.97303 1.70833 3.68138 1.70833 4.51622C1.70833 5.23721 1.86111 5.84121 2.16667 6.3282C2.47222 6.81519 2.88194 7.36226 3.39583 7.96942C3.65972 8.28565 3.93056 8.61769 4.20833 8.96554C4.48611 9.31339 4.75 9.69602 5 10.1134ZM5 12.9026C4.84722 12.9026 4.70833 12.8615 4.58333 12.7792C4.45833 12.697 4.36806 12.5863 4.3125 12.4472C3.99306 11.5491 3.59028 10.7965 3.10417 10.1893C2.61806 9.58218 2.14583 9.00032 1.6875 8.44376C1.24306 7.8872 0.857639 7.31167 0.53125 6.71716C0.204861 6.12265 0.0416667 5.389 0.0416667 4.51622C0.0416667 3.25131 0.520833 2.18246 1.47917 1.30967C2.4375 0.436882 3.61111 0.000488281 5 0.000488281C6.38889 0.000488281 7.5625 0.436882 8.52083 1.30967C9.47917 2.18246 9.95833 3.25131 9.95833 4.51622C9.95833 5.389 9.79861 6.12265 9.47917 6.71716C9.15972 7.31167 8.77083 7.8872 8.3125 8.44376C7.86806 9.00032 7.39931 9.58218 6.90625 10.1893C6.41319 10.7965 6.00694 11.5491 5.6875 12.4472C5.63194 12.5863 5.54167 12.697 5.41667 12.7792C5.29167 12.8615 5.15278 12.9026 5 12.9026ZM5 6.12898C5.48611 6.12898 5.90278 5.97086 6.25 5.65463C6.59722 5.33841 6.77083 4.95893 6.77083 4.51622C6.77083 4.0735 6.59722 3.69402 6.25 3.3778C5.90278 3.06157 5.48611 2.90346 5 2.90346C4.51389 2.90346 4.09722 3.06157 3.75 3.3778C3.40278 3.69402 3.22917 4.0735 3.22917 4.51622C3.22917 4.95893 3.40278 5.33841 3.75 5.65463C4.09722 5.97086 4.51389 6.12898 5 6.12898Z"
                                            fill="#525252"
                                          />
                                        </svg>
                                      </i>
                                      <p>{item?.business_description}</p>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </>
                          )
                        )}
                      </div>
                    </SwiperSlide>
                  ) : null
                )
              : null}
          </Swiper>
        )}
      </Container>
    </div>
  );
};

export default RestaurantSection;
