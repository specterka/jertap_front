"use client";

import { HeroSection } from "@/components/landing";
import React from "react";
import { Container } from "react-bootstrap";
import { Form, Row, Col } from "react-bootstrap";
import { AllCategoriesIndex } from "../../../styles/visiter/all-categories.style";
import { CategoryIndex } from "../../../styles/visiter/category.style";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import {
  AllCategorySearchIcon,
  WhiteStarCategories,
  YellowRatingStarCategories,
} from "@/assets/svgs";
import { useMetaData } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import axios from "axios";
import {
  CategoriesItalian,
  CategoriesMore,
  CategoriesNoodles,
  CategoriesPizza,
  CategoriesSandwhich,
  CatogoriesBurger,
  CatogoriesBurger2,
  CatogoriesChoclate,
  CatogoriesIceCream,
  CatogoriesPastry,
  CatogoriesThai,
  HomeIceCream,
  HomeSpoon,
  HomeCuisine,
} from "@/assets/svgs";
const AllCategoriesPage = () => {
  // const [category] = useMetaData(API_ROUTER.GET_HOME_CATEGORIES);

  const dummyData = [
    {
      name: "Category 1",
      image: "/images/categories-img.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      rating: 5,
    },
    {
      name: "Category 2",
      image: "/images/categories-img.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      rating: 3,
    },
    {
      name: "Category 3",
      image: "/images/categories-img.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      rating: 1,
    },
    {
      name: "Category 4",
      image: "/images/categories-img.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      rating: 2,
    },
    {
      name: "Category 5",
      image: "/images/categories-img.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      rating: 4,
    },
    {
      name: "Category 6",
      image: "/images/categories-img.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      rating: 5,
    },
    {
      name: "Category 7",
      image: "/images/categories-img.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      rating: 3,
    },
    {
      name: "Category 8",
      image: "/images/categories-img.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      rating: 1,
    },
    {
      name: "Category 9",
      image: "/images/categories-img.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      rating: 2,
    },
    {
      name: "Category 10",
      image: "/images/categories-img.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      rating: 4,
    },
  ];
  const slideData = [
    {
      icon: <HomeIceCream />,
      title: "Desserts",
      subcategories: [
        { icon: <CatogoriesIceCream />, name: "Ice-cream", link: "#" },
        { icon: <CatogoriesPastry />, name: "Pastries", link: "#" },
        { icon: <CatogoriesChoclate />, name: "Chocolates", link: "#" },
        { icon: <CategoriesMore />, name: "More.....", link: "#" },
      ],
    },
    {
      icon: <CatogoriesBurger />,
      title: "Fast Food",
      subcategories: [
        { icon: <CatogoriesBurger2 />, name: "Burger", link: "#" },
        { icon: <CategoriesPizza />, name: "Pizza", link: "#" },
        { icon: <CategoriesSandwhich />, name: "Sandwich", link: "#" },
        { icon: <CategoriesMore />, name: "More.....", link: "#" },
      ],
    },
    {
      icon: <HomeCuisine />,
      title: "Global Cuisine",
      subcategories: [
        { icon: <CategoriesNoodles />, name: "Chinese", link: "#" },
        { icon: <CategoriesItalian />, name: "Italian", link: "#" },
        { icon: <CatogoriesThai />, name: "Thai", link: "#" },
        { icon: <CategoriesMore />, name: "More.....", link: "#" },
      ],
    },
    {
      icon: <CatogoriesBurger />,
      title: "Desserts",
      subcategories: [
        { icon: <CatogoriesIceCream />, name: "Ice-cream", link: "#" },
        { icon: <CatogoriesPastry />, name: "Pastries", link: "#" },
        { icon: <CatogoriesChoclate />, name: "Chocolates", link: "#" },
        { icon: <CategoriesMore />, name: "More.....", link: "#" },
      ],
    },
    {
      icon: <HomeIceCream />,
      title: "Fast Food",
      subcategories: [
        { icon: <CatogoriesBurger2 />, name: "Burger", link: "#" },
        { icon: <CategoriesPizza />, name: "Pizza", link: "#" },
        { icon: <CategoriesSandwhich />, name: "Sandwich", link: "#" },
        { icon: <CategoriesMore />, name: "More.....", link: "#" },
      ],
    },
    {
      icon: <HomeCuisine />,
      title: "Global Cuisine",
      subcategories: [
        { icon: <CategoriesNoodles />, name: "Chinese", link: "#" },
        { icon: <CategoriesItalian />, name: "Italian", link: "#" },
        { icon: <CatogoriesThai />, name: "Thai", link: "#" },
        { icon: <CategoriesMore />, name: "More.....", link: "#" },
      ],
    },
  ];
  return (
    <>
      <HeroSection />
      <AllCategoriesIndex className="section-block">
        <h2>
          All Categories<span></span>
        </h2>
        <Container className="px-3 px-xxl-0">
          <div className="categories-detail">
            <div className="categories-search">
              <Form.Select aria-label="Default select example">
                <option>Select Alphabetical</option>
                <option value="1">Select Alphabetical</option>
                <option value="2">Select Alphabetical</option>
                <option value="3">Select Alphabetical</option>
              </Form.Select>
            </div>
            <div className="jt-send-email">
              <span>
                <AllCategorySearchIcon />
                <Form.Control type="email" placeholder="Search Restaurant" />
              </span>
              <Link className="common-btn" href={"javascript:void(0)"}>
                Search
              </Link>
            </div>
          </div>
          <Row>
            {/* {dummyData.map((category, index) => (
              <Col md={4} key={index}>
                <div className="categories-box">
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
                          <img src={category.image} alt={`category-${index}`} />
                        </figure>
                      </SwiperSlide>
                      <SwiperSlide>
                        <figure>
                          <img src={category.image} alt={`category-${index}`} />
                        </figure>
                      </SwiperSlide>
                      <SwiperSlide>
                        <figure>
                          <img src={category.image} alt={`category-${index}`} />
                        </figure>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="restro-detail">
                    <h5>{category.name}</h5>
                    <p>{category.description}</p>
                    <div className="restro-review">
                      <span>
                        {[...Array(category.rating).keys()].map((i) => (
                          <i key={i}>
                            <YellowRatingStarCategories />
                          </i>
                        ))}
                        {[...Array(5 - category.rating).keys()].map((i) => (
                          <i key={i}>
                            <WhiteStarCategories />
                          </i>
                        ))}
                      </span>
                      <Link className="common-btn" href={"javascript:void(0)"}>
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            ))} */}
          </Row>
        </Container>
      </AllCategoriesIndex>
      <CategoryIndex>
        <div className="categories-section section-block">
          <Container>
            <Swiper
              pagination={true}
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              className="mySwiper"
              // autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: false,
              // }}
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
              {slideData.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="jt-food-menu">
                    <div className="jt-tital">
                      <i className="jt-icon">{slide.icon}</i>
                      <h3>{slide.title}</h3>
                    </div>
                    <div className="menu-bar">
                      <ul>
                        {slide.subcategories.map((subcategory, subIndex) => (
                          <li key={subIndex}>
                            <Link href={subcategory.link}>
                              <span>{subcategory.icon}</span>
                              <h5>{subcategory.name}</h5>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* <SwiperSlide>
            <div className="jt-food-menu">
              <div className="jt-tital">
                <i className="jt-icon">
                  <HomeIceCream />
                </i>
                <h3>Desserts</h3>
              </div>
              <div className="menu-bar">
                <ul>
                  <li>
                    <Link href="#">
                      <span>
                        <CatogoriesIceCream />
                      </span>
                      <h6>Ice-cream</h6>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span>
                        <CatogoriesPastry />
                      </span>
                      <h6>Pastries</h6>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span>
                        <CatogoriesChoclate />
                      </span>
                      <h6>Chocolates</h6>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span>
                        <CategoriesMore />
                      </span>
                      <h6>More.....</h6>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="jt-food-menu">
              <div className="jt-tital">
                <i className="jt-icon">
                  <CatogoriesBurger />
                </i>
                <h3>Fast Food</h3>
              </div>
              <div className="menu-bar">
                <ul>
                  <li>
                    <Link href="#">
                      <span>
                        <CatogoriesBurger2 />
                      </span>
                      <h6>Burger</h6>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span>
                        <CategoriesPizza />
                      </span>
                      <h6>Pizza</h6>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span>
                        <CategoriesSandwhich />
                      </span>
                      <h6>Sandwich</h6>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span>
                        <CategoriesMore />
                      </span>
                      <h6>More.....</h6>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="jt-food-menu">
              <div className="jt-tital">
                <i className="jt-icon">
                  <HomeCuisine />
                </i>
                <h3>Global Cuisine</h3>
              </div>
              <div className="menu-bar">
                <ul>
                  <li>
                    <Link href="#">
                      <span>
                        <CategoriesNoodles />
                      </span>
                      <h6>Chinese</h6>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span>
                        <CategoriesItalian />
                      </span>
                      <h6>Italian</h6>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span>
                        <CatogoriesThai />
                      </span>
                      <h6>Thai</h6>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span>
                        <CategoriesMore />
                      </span>
                      <h6>More.....</h6>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="jt-food-menu">
              <div className="jt-tital">
                <i className="jt-icon">
                  <CatogoriesBurger />
                </i>
                <h3>Desserts</h3>
              </div>
              <div className="menu-bar">
                <ul>
                  <li>
                    <Link href="#">
                      <span>
                        <CatogoriesIceCream />
                      </span>
                      <h6>Ice-cream</h6>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span>
                        <CatogoriesPastry />
                      </span>
                      <h6>Pastries</h6>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span>
                        <CatogoriesChoclate />
                      </span>
                      <h6>Chocolates</h6>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span>
                        <CategoriesMore />
                      </span>
                      <h6>More.....</h6>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="jt-food-menu">
              <div className="jt-tital">
                <i className="jt-icon">
                  <HomeIceCream />
                </i>
                <h3>Fast Food</h3>
              </div>
              <div className="menu-bar">
                <ul>
                  <li>
                    <Link href="#">
                      <span>
                        <CatogoriesBurger2 />
                      </span>
                      <h6>Burger</h6>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span>
                        <CategoriesPizza />
                      </span>
                      <h6>Pizza</h6>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span>
                        <CategoriesSandwhich />
                      </span>
                      <h6>Sandwich</h6>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span>
                        <CategoriesMore />
                      </span>
                      <h6>More.....</h6>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="jt-food-menu">
              <div className="jt-tital">
                <i className="jt-icon">
                  <HomeCuisine />
                </i>
                <h3>Global Cuisine</h3>
              </div>
              <div className="menu-bar">
                <ul>
                  <li>
                    <Link href="#">
                      <span>
                        <CategoriesNoodles />
                      </span>
                      <h6>Chinese</h6>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span>
                        <CategoriesItalian />
                      </span>
                      <h6>Italian</h6>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span>
                        <CatogoriesThai />
                      </span>
                      <h6>Thai</h6>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span>
                        <CategoriesMore />
                      </span>
                      <h6>More.....</h6>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide> */}
            </Swiper>
            {/* <div className="jt-dots">
      <span></span>
      <span className="swiper-slide-active"></span>
      <span></span>
    </div> */}
          </Container>
        </div>
      </CategoryIndex>
    </>
  );
};

export default AllCategoriesPage;
