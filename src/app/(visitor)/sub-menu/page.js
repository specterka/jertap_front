"use client";

import {
  QuickBiteIconCategoryPage,
  DessertIconCategoryPage,
  FoodieIconCategoryPage,
  NightLifeIconCategoryPage,
  BurgerIconCategoryPage,
  PizzaIconCategoryPage,
  LikeIconCategoryPage,
  LocationIconCategoryPage,
  YellowRatingStarCategories,
  WhiteStarCategories,
  PhoneIconCategory,
  GlobalCuisineIconCategoryPage,
  JapaneseIconCategory,
  KoreanIconCategory,
  ThaiIconCategory,
  ItalianIconCategory,
  ChineseIconCategory,
  SolidHeart,
} from "@/assets/svgs";
import { HeroSection } from "@/components/landing";
import { React, useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Form, Row, Col } from "react-bootstrap";
import { SubMenuIndex } from "../../../styles/visiter/sub-menu.style";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Select from "react-select";
import Link from "next/link";
import Category from "@/components/modal/category/page";

const SubMenu = () => {
  return (
    <>
      <HeroSection />
      <SubMenuIndex className="section-block">
        <h2>
          Menu List<span></span>
        </h2>
        <Container className="px-3">
          <div className="main-food-menu">
            <Button type="button" className="trans-btn">
              Desserts
            </Button>
            <Button type="button" className="trans-btn">
              Fast Food
            </Button>
            <Button type="button" className="trans-btn">
              Global Cuisine
            </Button>
            <Button type="button" className="trans-btn dot-btn">
              <svg
                width="33"
                height="9"
                viewBox="0 0 33 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.21921 8.86237C3.11586 8.86237 2.17133 8.46683 1.38561 7.67575C0.59989 6.88466 0.207031 5.93367 0.207031 4.82279C0.207031 3.7119 0.59989 2.76092 1.38561 1.96983C2.17133 1.17875 3.11586 0.783203 4.21921 0.783203C5.32256 0.783203 6.26709 1.17875 7.05281 1.96983C7.83852 2.76092 8.23138 3.7119 8.23138 4.82279C8.23138 5.93367 7.83852 6.88466 7.05281 7.67575C6.26709 8.46683 5.32256 8.86237 4.21921 8.86237ZM16.2557 8.86237C15.1524 8.86237 14.2079 8.46683 13.4221 7.67575C12.6364 6.88466 12.2436 5.93367 12.2436 4.82279C12.2436 3.7119 12.6364 2.76092 13.4221 1.96983C14.2079 1.17875 15.1524 0.783203 16.2557 0.783203C17.3591 0.783203 18.3036 1.17875 19.0893 1.96983C19.8751 2.76092 20.2679 3.7119 20.2679 4.82279C20.2679 5.93367 19.8751 6.88466 19.0893 7.67575C18.3036 8.46683 17.3591 8.86237 16.2557 8.86237ZM28.2923 8.86237C27.1889 8.86237 26.2444 8.46683 25.4587 7.67575C24.6729 6.88466 24.2801 5.93367 24.2801 4.82279C24.2801 3.7119 24.6729 2.76092 25.4587 1.96983C26.2444 1.17875 27.1889 0.783203 28.2923 0.783203C29.3956 0.783203 30.3401 1.17875 31.1259 1.96983C31.9116 2.76092 32.3044 3.7119 32.3044 4.82279C32.3044 5.93367 31.9116 6.88466 31.1259 7.67575C30.3401 8.46683 29.3956 8.86237 28.2923 8.86237Z"
                  fill="#525252"
                />
              </svg>
            </Button>
          </div>
          <div className="food-section">
            <div className="jt-send-email">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9111 14L8.01111 9.1C7.62222 9.41111 7.175 9.65741 6.66944 9.83889C6.16389 10.0204 5.62593 10.1111 5.05556 10.1111C3.64259 10.1111 2.44676 9.62176 1.46806 8.64306C0.489352 7.66435 0 6.46852 0 5.05556C0 3.64259 0.489352 2.44676 1.46806 1.46806C2.44676 0.489352 3.64259 0 5.05556 0C6.46852 0 7.66435 0.489352 8.64306 1.46806C9.62176 2.44676 10.1111 3.64259 10.1111 5.05556C10.1111 5.62593 10.0204 6.16389 9.83889 6.66944C9.65741 7.175 9.41111 7.62222 9.1 8.01111L14 12.9111L12.9111 14ZM5.05556 8.55556C6.02778 8.55556 6.85417 8.21528 7.53472 7.53472C8.21528 6.85417 8.55556 6.02778 8.55556 5.05556C8.55556 4.08333 8.21528 3.25694 7.53472 2.57639C6.85417 1.89583 6.02778 1.55556 5.05556 1.55556C4.08333 1.55556 3.25694 1.89583 2.57639 2.57639C1.89583 3.25694 1.55556 4.08333 1.55556 5.05556C1.55556 6.02778 1.89583 6.85417 2.57639 7.53472C3.25694 8.21528 4.08333 8.55556 5.05556 8.55556Z"
                  fill="#6E768E"
                />
              </svg>
              <Form.Control placeholder="Search Chinese Food" type="text" />
              {/* <input type="text" class="form-control" /> */}
              <a className="common-btn" href="javascript:void(0)">
                Search
              </a>
            </div>
            <div className="select-food">
              <Form.Select aria-label="Default select example">
                <option>Velocity</option>
                <option value="1">Velocity</option>
                <option value="2">Velocity</option>
                <option value="3">Velocity</option>
              </Form.Select>
            </div>
            <div className="select-food">
              <Form.Select aria-label="Default select example">
                <option>Price</option>
                <option value="1">Price</option>
                <option value="2">Price</option>
                <option value="3">Price</option>
              </Form.Select>
            </div>
            {/* <div className="food-sub-menu">
              <span>
                <ChineseIconCategory />
              </span>
              <h6>Chinese</h6>
            </div>
            <div className="food-sub-menu">
              <span>
                <ItalianIconCategory />
              </span>
              <h6>Italian</h6>
            </div>
            <div className="food-sub-menu">
              <span>
                <ThaiIconCategory />
              </span>
              <h6>Thai</h6>
            </div>
            <div className="food-sub-menu">
              <span>
                <KoreanIconCategory />
              </span>
              <h6>Korean</h6>
            </div>
            <div className="food-sub-menu">
              <span>
                <JapaneseIconCategory />
              </span>
              <h6>Japanese</h6>
            </div> */}
          </div>
          <div className="categories-box">
            <div className="categories-img">
              <img src="/images/category-img-1.png" alt="categories-img.png" />
            </div>
            <div className="restro-detail">
              <div className="restro-plus">
                <div className="mb-4 mb-md-5">
                  <div className="d-flex align-items-center">
                    <h5>Chinese Noodles</h5>
                    <span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="5.99935"
                          cy="6.00008"
                          r="5.33333"
                          fill="#34A853"
                        />
                      </svg>
                    </span>
                    <small>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="5.99935"
                          cy="6.00008"
                          r="5.33333"
                          fill="#34A853"
                        />
                      </svg>
                    </small>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                  </p>
                </div>
                <div className="plus-icon">
                  <Button className="common-btn trans-btn">+</Button>
                </div>
              </div>
              <div className="restro-btn">
                <Link className="common-btn" href={"javascript:void(0)"}>
                  +Add ingredients
                </Link>
                <Link className="common-btn" href={"javascript:void(0)"}>
                  100 $
                </Link>
              </div>
              <div className="mobile-btn">
                <div className="restro-btn">
                  <Link className="common-btn" href={"javascript:void(0)"}>
                    + Add ingredients
                  </Link>
                  <Link className="common-btn" href={"javascript:void(0)"}>
                    100 $
                  </Link>
                </div>
                <div className="plus-icon">
                  <Button className="common-btn trans-btn">+</Button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="main-food-menu">
            <BurgerIconCategoryPage />
                <h6>Fast Food</h6>
          </div>
          <div className="main-food-menu">
            <GlobalCuisineIconCategoryPage />
                <h6>Global Cuisine</h6>
          </div>
          <div className="main-food-menu">
            <DessertIconCategoryPage />
                <h6>Desserts</h6>
          </div>
 */}
        </Container>
      </SubMenuIndex>
    </>
  );
};

export default SubMenu;
