import { React, useState } from "react";
import { Container } from "react-bootstrap";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { BannerDetail } from "@/styles/banner-section.style";
import { useMetaData } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";

const HeroSection = () => {
  const [bannerDetails, isLoading, fetchBannerDetails] = useMetaData(
    API_ROUTER.HERO_SECTION_BENNAR
  );

  return (
    <BannerDetail>
      <Swiper
        pagination={true}
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {bannerDetails?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="jt-banner-img">
              <figure>
                <img src={item.cover_img} alt={item.alt} />
              </figure>
              <Container>
                <div className="jt-banner-tital">
                  <h3> {item.title} </h3> <p> {item.description} </p>
                  {item.link && (
                    <Link className="common-btn trans-btn" href={item.link}>
                      Get Started
                    </Link>
                  )}
                </div>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"> </div>
    </BannerDetail>
  );
};

export default HeroSection;
