import { HomeSpoon, MoreIcon } from "@/assets/svgs";
import { useMetaData } from "@/hooks";
import { PATH_VISITOR } from "@/routes/paths";
import { API_ROUTER } from "@/services/apiRouter";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper } from "swiper/react";
import Loader from "../shared/Loader";
import CategoryModal from "@/sections/dashboard/home/CategoryModal";
import { useRouter } from "next/navigation";

const CategoriesSection = () => {
  // States
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  // Hooks
  const [categories, isLoading] = useMetaData(API_ROUTER.GET_HOME_CATEGORIES);
  const router = useRouter();
  const handelCategoty = (id) => {
    router.push(`/businesses?category=${encodeURIComponent(id)}`);
  };
  // Renders
  const renderCategoryModal = useMemo(
    () => (
      <CategoryModal
        open={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        categories={categories}
      />
    ),
    [isCategoryModalOpen, categories, setIsCategoryModalOpen]
  );
  const handleMouseEnter = () => {
    setIsCategoryModalOpen(true);
  };

  const handleMouseLeave = () => {
    setIsCategoryModalOpen(false);
  };
  return (
    <div
      className="categories-section section-block"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Container>
        <h2>
          Categories <span></span>
        </h2>
        <div className="jt-restro" data-aos="fade-up" data-aos-duration="1000">
          <div className="d-flex align-items-center mb-5 mb-md-0">
            <HomeSpoon />
            <h3>Restaurant</h3>
          </div>
          <Link className="common-btn" href={PATH_VISITOR.businesses}>
            View All Businesses
          </Link>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            className="mySwiper"
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
            <div className="row" data-aos="fade-up" data-aos-duration="1000">
              {categories &&
                categories.length > 0 &&
                categories.slice(0, 3).map((slide, index) => (
                  <>
                    <div className="col-md-6 col-lg-3">
                      <div className="jt-food-menu" key={index}>
                        <div
                          className="jt-tital"
                          onClick={() => handelCategoty(slide?.id)}
                        >
                          <figure className="jt-icon">
                            <img
                              src={
                                slide.icon ||
                                `https://eu.ui-avatars.com/api/?name=${slide.name}&size=164`
                              }
                            />
                          </figure>
                          <h3>{slide.name}</h3>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              <div className="col-md-6 col-lg-3">
                {categories?.length > 3 ? (
                  <button
                    type="button"
                    className="trans-btn dot-btn"
                    onClick={() => setIsCategoryModalOpen(true)}
                  >
                    <MoreIcon />
                  </button>
                ) : null}
                {renderCategoryModal}
              </div>
              {/* <div className="col-md-6 col-lg-3">
                {categories?.length > 3 ? (
                  <button
                    type="button"
                    className="trans-btn dot-btn"
                    onMouseEnter={handleMouseEnter} // Trigger modal open on hover
                    onMouseLeave={handleMouseLeave} // Close modal when the mouse leaves the button
                  >
                    <MoreIcon />
                  </button>
                ) : null}
                {isCategoryModalOpen && (
                  <div
                    className="modal-container"
                    onMouseEnter={handleMouseEnter} // Keep modal open if hovering over the modal
                    onMouseLeave={handleMouseLeave} // Close modal when mouse leaves the modal area
                  >
                    {renderCategoryModal}
                  </div>
                )}
              </div> */}
            </div>
          </Swiper>
        )}
      </Container>
    </div>
  );
};

export default CategoriesSection;
