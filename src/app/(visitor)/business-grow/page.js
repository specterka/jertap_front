"use client";

import { HeroSection } from "@/components/landing";
import { React, useState } from "react";
import { Container, Form, Row, Col, Accordion } from "react-bootstrap";
import Link from "next/link";
import { BusinessGrowDetail } from "@/styles/visiter/business-grow.style";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import DatePicker from "react-datepicker";
import {
  CalenderBusinessCrow,
  ArrowBusinessCrow,
  VerifiedSignBusinessCrow,
  ForwardSignBusinessCrow,
} from "../../../assets/svgs/index";

const BusinessGrowIndex = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <HeroSection />
      <BusinessGrowDetail>
        <Container className="px-3 px-xxl-0">
          <div className="guide-section section-block">
            <Row>
              <h2>
                Business Guide for Businesses<span></span>
              </h2>
              <Col md={6} className="ps-4 pe-lg-0">
                <div className="guide-detail">
                  <figure className="guide-img">
                    <img src="/images/grow-img.png" alt="grow-img" />
                  </figure>
                  <figure className="small-guide-img">
                    <img src="/images/grow-img1.png" alt="grow-img1" />
                  </figure>
                </div>
              </Col>
              <Col md={6} className="pe-4 pe-xxl-0">
                <div className="listing-tital">
                  <h4>Is your business on Jer Tap ?</h4>
                  <p>
                    If not, let’s change that. Adding your business is free and
                    easy.
                  </p>
                </div>
                <div className="listing-customers">
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </li>
                  </ul>
                </div>
                <div className="jt-send-email">
                  <Form.Control
                    type="email"
                    placeholder="Enter Your Business Name"
                  />
                  <Link className="common-btn" href={"javascript:void(0)"}>
                    Continue
                    <ArrowBusinessCrow />
                  </Link>
                </div>
                <p>By continuing to verify free listing your Business</p>
              </Col>
            </Row>
          </div>
          <div className="listing-section section-block">
            <Row>
              <h2>
                How to Grow Your Business<span></span>
              </h2>
              <Col md={3}>
                <div className="listing-detail">
                  <span>
                    <h3>01</h3>
                    <ForwardSignBusinessCrow />
                  </span>
                  <h5>Upload Photos & Videos</h5>
                  <p>Lorem ipsum dolor sit amet,</p>
                </div>
              </Col>
              <Col md={3}>
                <div className="listing-detail">
                  <span>
                    <h3>02</h3>
                    <ForwardSignBusinessCrow />
                  </span>
                  <h5>Add Menu</h5>
                  <p>Lorem ipsum dolor sit amet,</p>
                </div>
              </Col>
              <Col md={3}>
                <div className="listing-detail">
                  <span>
                    <h3>03</h3>
                    <ForwardSignBusinessCrow />
                  </span>
                  <h5>Add Amenities</h5>
                  <p>Lorem ipsum dolor sit amet,</p>
                </div>
              </Col>
              <Col md={3}>
                <div className="listing-detail border-end-0 border-bottom-0">
                  <span>
                    <h3>04</h3>
                    <ForwardSignBusinessCrow />
                  </span>
                  <h5>Change Location & Working Hour</h5>
                  <p>Lorem ipsum dolor sit amet,</p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="video-section section-block">
          <Container className="px-3 px-xxl-0">
            <Row>
              <h2>
                How to Manage Your Business<span></span>
              </h2>
              <Col md={6}>
                <div className="video-menu">
                  <h4>For great idea to a successful </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                  </p>
                  <ul>
                    <li>
                      <VerifiedSignBusinessCrow />
                      <p>Manage Listing</p>
                    </li>
                    <li>
                      <VerifiedSignBusinessCrow />
                      <p>Manage Views & Stats</p>
                    </li>
                    <li>
                      <VerifiedSignBusinessCrow />
                      <p>Respond to Question & Answer</p>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={6}>
                <div className="restro-video">
                  <iframe
                    width="710"
                    height="420"
                    src="https://www.youtube.com/embed/GWaQiFeQ87g"
                    title="Cinematic Restaurant Video - Sony FX3 &amp; Sony GM 35mm f1.4"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <i>
                    <svg
                      width="88"
                      height="88"
                      viewBox="0 0 88 88"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_1_4929)">
                        <circle cx="44" cy="40" r="40" fill="#0F4DA2" />
                      </g>
                      <path
                        d="M39.75 47.65L51.65 40L39.75 32.35V47.65ZM44 57C41.6483 57 39.4383 56.5537 37.37 55.6613C35.3017 54.7688 33.5025 53.5575 31.9725 52.0275C30.4425 50.4975 29.2313 48.6983 28.3388 46.63C27.4462 44.5617 27 42.3517 27 40C27 37.6483 27.4462 35.4383 28.3388 33.37C29.2313 31.3017 30.4425 29.5025 31.9725 27.9725C33.5025 26.4425 35.3017 25.2313 37.37 24.3388C39.4383 23.4462 41.6483 23 44 23C46.3517 23 48.5617 23.4462 50.63 24.3388C52.6983 25.2313 54.4975 26.4425 56.0275 27.9725C57.5575 29.5025 58.7688 31.3017 59.6613 33.37C60.5537 35.4383 61 37.6483 61 40C61 42.3517 60.5537 44.5617 59.6613 46.63C58.7688 48.6983 57.5575 50.4975 56.0275 52.0275C54.4975 53.5575 52.6983 54.7688 50.63 55.6613C48.5617 56.5537 46.3517 57 44 57ZM44 53.6C47.7967 53.6 51.0125 52.2825 53.6475 49.6475C56.2825 47.0125 57.6 43.7967 57.6 40C57.6 36.2033 56.2825 32.9875 53.6475 30.3525C51.0125 27.7175 47.7967 26.4 44 26.4C40.2033 26.4 36.9875 27.7175 34.3525 30.3525C31.7175 32.9875 30.4 36.2033 30.4 40C30.4 43.7967 31.7175 47.0125 34.3525 49.6475C36.9875 52.2825 40.2033 53.6 44 53.6Z"
                        fill="#F6F6F6"
                      />
                      <defs>
                        <filter
                          id="filter0_d_1_4929"
                          x="0"
                          y="0"
                          width="88"
                          height="88"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_1_4929"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_1_4929"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </i>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="events-section section-block">
          <h2>
            Our Events & Updates<span></span>
          </h2>
          <Container className="px-3 px-xxl-0">
            <Row>
              <Col md={6}>
                <figure>
                  <img src="/images/event-img.png" alt="event-img" />
                </figure>
                <div className="events-detail">
                  <div className="event-tital">
                    <h5>Grow Your Business Successfully</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="date-calender">
                    <div className="d-flex">
                      {/* <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      /> */}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.5023 23.9456H2.38914C1.08597 23.9456 0 22.8597 0 21.5565V4.01805C0 2.71488 0.868778 1.62891 2.00905 1.62891H3.20362V3.20357H2.00905C1.84615 3.20357 1.62896 3.52936 1.62896 4.01805V21.5565C1.62896 21.9909 2.00905 22.371 2.44344 22.371H21.5566C21.9909 22.371 22.371 21.9909 22.371 21.5565V4.01805C22.371 3.52936 22.0995 3.20357 21.9909 3.20357H20.7964V1.62891H21.9909C23.0769 1.62891 24 2.71488 24 4.01805V21.5565C23.8914 22.8597 22.8054 23.9456 21.5023 23.9456Z"
                          fill="#0F4DA2"
                        />
                        <path
                          d="M5.59329 4.83258C5.15891 4.83258 4.77881 4.45249 4.77881 4.0181V0.81448C4.77881 0.38009 5.15891 0 5.59329 0C6.02768 0 6.40777 0.38009 6.40777 0.81448V4.0181C6.35348 4.45249 6.02768 4.83258 5.59329 4.83258ZM18.2992 4.83258C17.8648 4.83258 17.4847 4.45249 17.4847 4.0181V0.81448C17.4847 0.38009 17.8648 0 18.2992 0C18.7336 0 19.1137 0.38009 19.1137 0.81448V4.0181C19.1137 4.45249 18.7336 4.83258 18.2992 4.83258ZM7.98244 1.62896H15.91V3.25792H7.98244V1.62896ZM1.5752 6.40724H22.3173V8.0362H1.5752V6.40724ZM19.1137 9.61086H20.6883V11.1855H19.1137V9.61086ZM15.91 9.61086H17.539V11.1855H15.91V9.61086ZM12.7607 9.61086H14.3354V11.1855H12.7607V9.61086ZM9.5571 9.61086H11.1318V11.1855H9.5571V9.61086ZM6.35348 9.61086H7.98244V11.1855H6.35348V9.61086ZM19.1137 12.8145H20.6883V14.3891H19.1137V12.8145ZM15.91 12.8145H17.539V14.3891H15.91V12.8145ZM12.7607 12.8145H14.3354V14.3891H12.7607V12.8145ZM9.5571 12.8145H11.1318V14.3891H9.5571V12.8145ZM6.35348 12.8145H7.98244V14.3891H6.35348V12.8145ZM3.20415 12.8145H4.77881V14.3891H3.20415V12.8145ZM19.1137 15.9638H20.6883V17.5928H19.1137V15.9638ZM15.91 15.9638H17.539V17.5928H15.91V15.9638ZM12.7607 15.9638H14.3354V17.5928H12.7607V15.9638ZM9.5571 15.9638H11.1318V17.5928H9.5571V15.9638ZM6.35348 15.9638H7.98244V17.5928H6.35348V15.9638ZM3.20415 15.9638H4.77881V17.5928H3.20415V15.9638ZM15.91 19.1674H17.539V20.7421H15.91V19.1674ZM12.7607 19.1674H14.3354V20.7421H12.7607V19.1674ZM9.5571 19.1674H11.1318V20.7421H9.5571V19.1674ZM6.35348 19.1674H7.98244V20.7421H6.35348V19.1674ZM3.20415 19.1674H4.77881V20.7421H3.20415V19.1674Z"
                          fill="#0F4DA2"
                        />
                      </svg>
                      <p>7 December, 2023</p>
                    </div>
                    <Link
                      className="d-flex align-items-center"
                      href={"javascript:void(0)"}
                    >
                      <svg
                        width="22"
                        height="15"
                        viewBox="0 0 22 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 12C12.25 12 13.3125 11.5625 14.1875 10.6875C15.0625 9.8125 15.5 8.75 15.5 7.5C15.5 6.25 15.0625 5.1875 14.1875 4.3125C13.3125 3.4375 12.25 3 11 3C9.75 3 8.6875 3.4375 7.8125 4.3125C6.9375 5.1875 6.5 6.25 6.5 7.5C6.5 8.75 6.9375 9.8125 7.8125 10.6875C8.6875 11.5625 9.75 12 11 12ZM11 10.2C10.25 10.2 9.6125 9.9375 9.0875 9.4125C8.5625 8.8875 8.3 8.25 8.3 7.5C8.3 6.75 8.5625 6.1125 9.0875 5.5875C9.6125 5.0625 10.25 4.8 11 4.8C11.75 4.8 12.3875 5.0625 12.9125 5.5875C13.4375 6.1125 13.7 6.75 13.7 7.5C13.7 8.25 13.4375 8.8875 12.9125 9.4125C12.3875 9.9375 11.75 10.2 11 10.2ZM11 15C8.56667 15 6.35 14.3208 4.35 12.9625C2.35 11.6042 0.9 9.78333 0 7.5C0.9 5.21667 2.35 3.39583 4.35 2.0375C6.35 0.679167 8.56667 0 11 0C13.4333 0 15.65 0.679167 17.65 2.0375C19.65 3.39583 21.1 5.21667 22 7.5C21.1 9.78333 19.65 11.6042 17.65 12.9625C15.65 14.3208 13.4333 15 11 15ZM11 13C12.8833 13 14.6125 12.5042 16.1875 11.5125C17.7625 10.5208 18.9667 9.18333 19.8 7.5C18.9667 5.81667 17.7625 4.47917 16.1875 3.4875C14.6125 2.49583 12.8833 2 11 2C9.11667 2 7.3875 2.49583 5.8125 3.4875C4.2375 4.47917 3.03333 5.81667 2.2 7.5C3.03333 9.18333 4.2375 10.5208 5.8125 11.5125C7.3875 12.5042 9.11667 13 11 13Z"
                          fill="#0F4DA2"
                        />
                      </svg>
                      <p>50</p>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="events-detail shadow-none">
                  <div className="event-tital">
                    <h5>Grow Your Business Successfully</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="date-calender">
                    <div className="d-flex">
                      <CalenderBusinessCrow />
                      <p>8 December, 2023</p>
                    </div>
                    <Link
                      className="d-flex align-items-center"
                      href={"javascript:void(0)"}
                    >
                      <svg
                        width="22"
                        height="15"
                        viewBox="0 0 22 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 12C12.25 12 13.3125 11.5625 14.1875 10.6875C15.0625 9.8125 15.5 8.75 15.5 7.5C15.5 6.25 15.0625 5.1875 14.1875 4.3125C13.3125 3.4375 12.25 3 11 3C9.75 3 8.6875 3.4375 7.8125 4.3125C6.9375 5.1875 6.5 6.25 6.5 7.5C6.5 8.75 6.9375 9.8125 7.8125 10.6875C8.6875 11.5625 9.75 12 11 12ZM11 10.2C10.25 10.2 9.6125 9.9375 9.0875 9.4125C8.5625 8.8875 8.3 8.25 8.3 7.5C8.3 6.75 8.5625 6.1125 9.0875 5.5875C9.6125 5.0625 10.25 4.8 11 4.8C11.75 4.8 12.3875 5.0625 12.9125 5.5875C13.4375 6.1125 13.7 6.75 13.7 7.5C13.7 8.25 13.4375 8.8875 12.9125 9.4125C12.3875 9.9375 11.75 10.2 11 10.2ZM11 15C8.56667 15 6.35 14.3208 4.35 12.9625C2.35 11.6042 0.9 9.78333 0 7.5C0.9 5.21667 2.35 3.39583 4.35 2.0375C6.35 0.679167 8.56667 0 11 0C13.4333 0 15.65 0.679167 17.65 2.0375C19.65 3.39583 21.1 5.21667 22 7.5C21.1 9.78333 19.65 11.6042 17.65 12.9625C15.65 14.3208 13.4333 15 11 15ZM11 13C12.8833 13 14.6125 12.5042 16.1875 11.5125C17.7625 10.5208 18.9667 9.18333 19.8 7.5C18.9667 5.81667 17.7625 4.47917 16.1875 3.4875C14.6125 2.49583 12.8833 2 11 2C9.11667 2 7.3875 2.49583 5.8125 3.4875C4.2375 4.47917 3.03333 5.81667 2.2 7.5C3.03333 9.18333 4.2375 10.5208 5.8125 11.5125C7.3875 12.5042 9.11667 13 11 13Z"
                          fill="#0F4DA2"
                        />
                      </svg>
                      <p>50</p>
                    </Link>
                  </div>
                </div>
                <div className="events-detail shadow-none">
                  <div className="event-tital">
                    <h5>
                      All City Cafes And Restaurants Switched To Delivery Mode
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="date-calender">
                    <div className="d-flex">
                      <CalenderBusinessCrow />
                      <p>9 December, 2023</p>
                    </div>
                    <Link
                      className="d-flex align-items-center"
                      href={"javascript:void(0)"}
                    >
                      <svg
                        width="22"
                        height="15"
                        viewBox="0 0 22 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 12C12.25 12 13.3125 11.5625 14.1875 10.6875C15.0625 9.8125 15.5 8.75 15.5 7.5C15.5 6.25 15.0625 5.1875 14.1875 4.3125C13.3125 3.4375 12.25 3 11 3C9.75 3 8.6875 3.4375 7.8125 4.3125C6.9375 5.1875 6.5 6.25 6.5 7.5C6.5 8.75 6.9375 9.8125 7.8125 10.6875C8.6875 11.5625 9.75 12 11 12ZM11 10.2C10.25 10.2 9.6125 9.9375 9.0875 9.4125C8.5625 8.8875 8.3 8.25 8.3 7.5C8.3 6.75 8.5625 6.1125 9.0875 5.5875C9.6125 5.0625 10.25 4.8 11 4.8C11.75 4.8 12.3875 5.0625 12.9125 5.5875C13.4375 6.1125 13.7 6.75 13.7 7.5C13.7 8.25 13.4375 8.8875 12.9125 9.4125C12.3875 9.9375 11.75 10.2 11 10.2ZM11 15C8.56667 15 6.35 14.3208 4.35 12.9625C2.35 11.6042 0.9 9.78333 0 7.5C0.9 5.21667 2.35 3.39583 4.35 2.0375C6.35 0.679167 8.56667 0 11 0C13.4333 0 15.65 0.679167 17.65 2.0375C19.65 3.39583 21.1 5.21667 22 7.5C21.1 9.78333 19.65 11.6042 17.65 12.9625C15.65 14.3208 13.4333 15 11 15ZM11 13C12.8833 13 14.6125 12.5042 16.1875 11.5125C17.7625 10.5208 18.9667 9.18333 19.8 7.5C18.9667 5.81667 17.7625 4.47917 16.1875 3.4875C14.6125 2.49583 12.8833 2 11 2C9.11667 2 7.3875 2.49583 5.8125 3.4875C4.2375 4.47917 3.03333 5.81667 2.2 7.5C3.03333 9.18333 4.2375 10.5208 5.8125 11.5125C7.3875 12.5042 9.11667 13 11 13Z"
                          fill="#0F4DA2"
                        />
                      </svg>
                      <p>50</p>
                    </Link>
                  </div>
                </div>
                <div className="events-detail shadow-none pb-0">
                  <div className="event-tital">
                    <h5>Grow Your Business Successfully</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="date-calender">
                    <div className="d-flex">
                      <CalenderBusinessCrow />
                      <p>10 December, 2023</p>
                    </div>
                    <Link
                      className="d-flex align-items-center"
                      href={"javascript:void(0)"}
                    >
                      <svg
                        width="22"
                        height="15"
                        viewBox="0 0 22 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 12C12.25 12 13.3125 11.5625 14.1875 10.6875C15.0625 9.8125 15.5 8.75 15.5 7.5C15.5 6.25 15.0625 5.1875 14.1875 4.3125C13.3125 3.4375 12.25 3 11 3C9.75 3 8.6875 3.4375 7.8125 4.3125C6.9375 5.1875 6.5 6.25 6.5 7.5C6.5 8.75 6.9375 9.8125 7.8125 10.6875C8.6875 11.5625 9.75 12 11 12ZM11 10.2C10.25 10.2 9.6125 9.9375 9.0875 9.4125C8.5625 8.8875 8.3 8.25 8.3 7.5C8.3 6.75 8.5625 6.1125 9.0875 5.5875C9.6125 5.0625 10.25 4.8 11 4.8C11.75 4.8 12.3875 5.0625 12.9125 5.5875C13.4375 6.1125 13.7 6.75 13.7 7.5C13.7 8.25 13.4375 8.8875 12.9125 9.4125C12.3875 9.9375 11.75 10.2 11 10.2ZM11 15C8.56667 15 6.35 14.3208 4.35 12.9625C2.35 11.6042 0.9 9.78333 0 7.5C0.9 5.21667 2.35 3.39583 4.35 2.0375C6.35 0.679167 8.56667 0 11 0C13.4333 0 15.65 0.679167 17.65 2.0375C19.65 3.39583 21.1 5.21667 22 7.5C21.1 9.78333 19.65 11.6042 17.65 12.9625C15.65 14.3208 13.4333 15 11 15ZM11 13C12.8833 13 14.6125 12.5042 16.1875 11.5125C17.7625 10.5208 18.9667 9.18333 19.8 7.5C18.9667 5.81667 17.7625 4.47917 16.1875 3.4875C14.6125 2.49583 12.8833 2 11 2C9.11667 2 7.3875 2.49583 5.8125 3.4875C4.2375 4.47917 3.03333 5.81667 2.2 7.5C3.03333 9.18333 4.2375 10.5208 5.8125 11.5125C7.3875 12.5042 9.11667 13 11 13Z"
                          fill="#0F4DA2"
                        />
                      </svg>
                      <p>50</p>
                    </Link>
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
                delay: 1000,
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
                <figure className="moblie-view">
                  <img src="/images/event-img.png" alt="event-img" />
                </figure>
                <div className="events-detail moblie-view">
                  <div className="event-tital">
                    <h5>Grow Your Business Successfully</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="date-calender">
                    <div className="d-flex">
                      <CalenderBusinessCrow />
                      <p>7 December, 2023</p>
                    </div>
                    <Link
                      className="d-flex align-items-center"
                      href={"javascript:void(0)"}
                    >
                      <svg
                        width="22"
                        height="15"
                        viewBox="0 0 22 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 12C12.25 12 13.3125 11.5625 14.1875 10.6875C15.0625 9.8125 15.5 8.75 15.5 7.5C15.5 6.25 15.0625 5.1875 14.1875 4.3125C13.3125 3.4375 12.25 3 11 3C9.75 3 8.6875 3.4375 7.8125 4.3125C6.9375 5.1875 6.5 6.25 6.5 7.5C6.5 8.75 6.9375 9.8125 7.8125 10.6875C8.6875 11.5625 9.75 12 11 12ZM11 10.2C10.25 10.2 9.6125 9.9375 9.0875 9.4125C8.5625 8.8875 8.3 8.25 8.3 7.5C8.3 6.75 8.5625 6.1125 9.0875 5.5875C9.6125 5.0625 10.25 4.8 11 4.8C11.75 4.8 12.3875 5.0625 12.9125 5.5875C13.4375 6.1125 13.7 6.75 13.7 7.5C13.7 8.25 13.4375 8.8875 12.9125 9.4125C12.3875 9.9375 11.75 10.2 11 10.2ZM11 15C8.56667 15 6.35 14.3208 4.35 12.9625C2.35 11.6042 0.9 9.78333 0 7.5C0.9 5.21667 2.35 3.39583 4.35 2.0375C6.35 0.679167 8.56667 0 11 0C13.4333 0 15.65 0.679167 17.65 2.0375C19.65 3.39583 21.1 5.21667 22 7.5C21.1 9.78333 19.65 11.6042 17.65 12.9625C15.65 14.3208 13.4333 15 11 15ZM11 13C12.8833 13 14.6125 12.5042 16.1875 11.5125C17.7625 10.5208 18.9667 9.18333 19.8 7.5C18.9667 5.81667 17.7625 4.47917 16.1875 3.4875C14.6125 2.49583 12.8833 2 11 2C9.11667 2 7.3875 2.49583 5.8125 3.4875C4.2375 4.47917 3.03333 5.81667 2.2 7.5C3.03333 9.18333 4.2375 10.5208 5.8125 11.5125C7.3875 12.5042 9.11667 13 11 13Z"
                          fill="#0F4DA2"
                        />
                      </svg>
                      <p>50</p>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="moblie-view">
                  <img src="/images/event-img.png" alt="event-img" />
                </figure>
                <div className="events-detail moblie-view">
                  <div className="event-tital">
                    <h5>Grow Your Business Successfully</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="date-calender">
                    <div className="d-flex">
                      <CalenderBusinessCrow />
                      <p>8 December, 2023</p>
                    </div>
                    <Link
                      className="d-flex align-items-center"
                      href={"javascript:void(0)"}
                    >
                      <svg
                        width="22"
                        height="15"
                        viewBox="0 0 22 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 12C12.25 12 13.3125 11.5625 14.1875 10.6875C15.0625 9.8125 15.5 8.75 15.5 7.5C15.5 6.25 15.0625 5.1875 14.1875 4.3125C13.3125 3.4375 12.25 3 11 3C9.75 3 8.6875 3.4375 7.8125 4.3125C6.9375 5.1875 6.5 6.25 6.5 7.5C6.5 8.75 6.9375 9.8125 7.8125 10.6875C8.6875 11.5625 9.75 12 11 12ZM11 10.2C10.25 10.2 9.6125 9.9375 9.0875 9.4125C8.5625 8.8875 8.3 8.25 8.3 7.5C8.3 6.75 8.5625 6.1125 9.0875 5.5875C9.6125 5.0625 10.25 4.8 11 4.8C11.75 4.8 12.3875 5.0625 12.9125 5.5875C13.4375 6.1125 13.7 6.75 13.7 7.5C13.7 8.25 13.4375 8.8875 12.9125 9.4125C12.3875 9.9375 11.75 10.2 11 10.2ZM11 15C8.56667 15 6.35 14.3208 4.35 12.9625C2.35 11.6042 0.9 9.78333 0 7.5C0.9 5.21667 2.35 3.39583 4.35 2.0375C6.35 0.679167 8.56667 0 11 0C13.4333 0 15.65 0.679167 17.65 2.0375C19.65 3.39583 21.1 5.21667 22 7.5C21.1 9.78333 19.65 11.6042 17.65 12.9625C15.65 14.3208 13.4333 15 11 15ZM11 13C12.8833 13 14.6125 12.5042 16.1875 11.5125C17.7625 10.5208 18.9667 9.18333 19.8 7.5C18.9667 5.81667 17.7625 4.47917 16.1875 3.4875C14.6125 2.49583 12.8833 2 11 2C9.11667 2 7.3875 2.49583 5.8125 3.4875C4.2375 4.47917 3.03333 5.81667 2.2 7.5C3.03333 9.18333 4.2375 10.5208 5.8125 11.5125C7.3875 12.5042 9.11667 13 11 13Z"
                          fill="#0F4DA2"
                        />
                      </svg>
                      <p>50</p>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="moblie-view">
                  <img src="/images/event-img.png" alt="event-img" />
                </figure>
                <div className="events-detail moblie-view">
                  <div className="event-tital">
                    <h5>Grow Your Business Successfully</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="date-calender">
                    <div className="d-flex">
                      <CalenderBusinessCrow />
                      <p>9 December, 2023</p>
                    </div>
                    <Link
                      className="d-flex align-items-center"
                      href={"javascript:void(0)"}
                    >
                      <svg
                        width="22"
                        height="15"
                        viewBox="0 0 22 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 12C12.25 12 13.3125 11.5625 14.1875 10.6875C15.0625 9.8125 15.5 8.75 15.5 7.5C15.5 6.25 15.0625 5.1875 14.1875 4.3125C13.3125 3.4375 12.25 3 11 3C9.75 3 8.6875 3.4375 7.8125 4.3125C6.9375 5.1875 6.5 6.25 6.5 7.5C6.5 8.75 6.9375 9.8125 7.8125 10.6875C8.6875 11.5625 9.75 12 11 12ZM11 10.2C10.25 10.2 9.6125 9.9375 9.0875 9.4125C8.5625 8.8875 8.3 8.25 8.3 7.5C8.3 6.75 8.5625 6.1125 9.0875 5.5875C9.6125 5.0625 10.25 4.8 11 4.8C11.75 4.8 12.3875 5.0625 12.9125 5.5875C13.4375 6.1125 13.7 6.75 13.7 7.5C13.7 8.25 13.4375 8.8875 12.9125 9.4125C12.3875 9.9375 11.75 10.2 11 10.2ZM11 15C8.56667 15 6.35 14.3208 4.35 12.9625C2.35 11.6042 0.9 9.78333 0 7.5C0.9 5.21667 2.35 3.39583 4.35 2.0375C6.35 0.679167 8.56667 0 11 0C13.4333 0 15.65 0.679167 17.65 2.0375C19.65 3.39583 21.1 5.21667 22 7.5C21.1 9.78333 19.65 11.6042 17.65 12.9625C15.65 14.3208 13.4333 15 11 15ZM11 13C12.8833 13 14.6125 12.5042 16.1875 11.5125C17.7625 10.5208 18.9667 9.18333 19.8 7.5C18.9667 5.81667 17.7625 4.47917 16.1875 3.4875C14.6125 2.49583 12.8833 2 11 2C9.11667 2 7.3875 2.49583 5.8125 3.4875C4.2375 4.47917 3.03333 5.81667 2.2 7.5C3.03333 9.18333 4.2375 10.5208 5.8125 11.5125C7.3875 12.5042 9.11667 13 11 13Z"
                          fill="#0F4DA2"
                        />
                      </svg>
                      <p>50</p>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Container>
        </div>
      </BusinessGrowDetail>
    </>
  );
};

export default BusinessGrowIndex;
