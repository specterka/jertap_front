"use client";

import { HeroSection } from "@/components/landing";
import React, { useEffect } from "react";
import { Container, Form, Row, Col, Accordion } from "react-bootstrap";
import Link from "next/link";
import { BusinessDetail } from "@/styles/visiter/business.style";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowBusinessCrow, ForwardSignBusinessCrow } from "@/assets/svgs";
import { PATH_AUTH, PATH_VISITOR } from "@/routes/paths";
import JoinNowForm from "../join-now-form";
import AOS from "aos";
import "aos/dist/aos.css";
const dummySwiperData = [
  { name: "John Duo", restaurantName: "Restaurant 1", yearsSinceCustomer: 9 },
  {
    name: "Jane Smith",
    restaurantName: "Restaurant 2",
    yearsSinceCustomer: 8,
  },
  {
    name: "Bob Johnson",
    restaurantName: "Restaurant 3",
    yearsSinceCustomer: 7,
  },
  {
    name: "Alice Brown",
    restaurantName: "Restaurant 4",
    yearsSinceCustomer: 6,
  },
  {
    name: "Jacob Hunter",
    restaurantName: "Restaurant 5",
    yearsSinceCustomer: 5,
  },
];

const dummyData = [
  {
    stepNumber: "01",
    title: "Create Account",
    description: "Enter your mobile number to get started",
  },
  {
    stepNumber: "02",
    title: "Enter Business Details",
    description: "Add name, address, business hours and photos",
  },
  {
    stepNumber: "03",
    title: "Select Categories",
    description: "Add relevant categories to your free listing page",
  },
];

const BusinessListingView = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <HeroSection />
      <BusinessDetail>
        <Container>
          <h2 data-aos="fade-up" data-aos-duration="1000">
            Listing Made Easy<span></span>
          </h2>
          <div
            className="listing-section section-block"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Row>
              {dummyData.map((item, index) => (
                <Col md={4} key={index}>
                  <div className="listing-detail">
                    <span>
                      <h3>{item.stepNumber}</h3>
                      <ForwardSignBusinessCrow />
                    </span>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div className="customers-section section-block">
            <Row>
              <h2 data-aos="fade-up" data-aos-duration="1000">
                Get a Free Listing Page<span></span>
              </h2>
              <Col lg={4} data-aos="fade-right" data-aos-duration="1000">
                <div className="listing-img">
                  <img src="/images/listing-img.png" alt="listing-img" />
                </div>
              </Col>
              <Col
                lg={8}
                className="ps-lg-5"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="listing-tital">
                  <h4>Connect with New Customers & Grow Your Business</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="listing-customers">
                  <ul>
                    {[1, 2, 3].map((item) => (
                      <li key={item}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </li>
                    ))}
                  </ul>
                </div>
                <JoinNowForm />
                <p>
                  By continuing, you agree to our{" "}
                  <b>
                    <Link href="/terms-of-service">Terms of Service</Link> &{" "}
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </b>
                </p>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="story-secction section-block">
          <Container id="success-stories">
            <h2 data-aos="fade-up" data-aos-duration="1000"  >
              Success Stories<span></span>
            </h2>
            <Swiper
              pagination={true}
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              className="mySwiper"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
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
              {dummySwiperData.map((data, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="d-block d-xxl-flex"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div className="restro-detail">
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
                              <h5>{data.name}</h5>

                              <p>{data.restaurantName}</p>
                            </div>
                          </div>
                          <div className="jt-sub-tital">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                            <div className="d-flex align-items-center justify-content-between">
                              <h6>
                                Customer Since {data.yearsSinceCustomer} Years
                              </h6>
                              <svg
                                width="73"
                                height="51"
                                viewBox="0 0 73 51"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M22.8125 27.8762H9.125V41.5126H22.8125V27.8762ZM63.875 27.8762H50.1875V41.5126H63.875V27.8762ZM22.8125 0.603516L13.6875 18.7853H31.9375V50.6035H0V18.7853L9.125 0.603516H22.8125ZM63.875 0.603516L54.75 18.7853H73V50.6035H41.0625V18.7853L50.1875 0.603516H63.875Z"
                                  fill="#0F4DA2"
                                  fillOpacity="0.5"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </div>
        <Container>
          <div className="customers-section section-block">
            <Row>
              <h2 data-aos="fade-up" data-aos-duration="1000">
                Advertise<span></span>
              </h2>
              <Col lg={4} data-aos="fade-right" data-aos-duration="1000">
                <div className="listing-img">
                  <img src="/images/advertise-img.png" alt="advertise-img" />
                  <Link href={PATH_VISITOR.advertise} className="common-btn">
                    Advertise Now{" "}
                  </Link>
                </div>
              </Col>
              <Col
                lg={8}
                className="ps-lg-5"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="listing-tital">
                  <h4>Grow your business by advertising on Jer Tap</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
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
              </Col>
            </Row>
          </div>
        </Container>
        <div className="qa-section section-block">
          <Container>
            <h2 data-aos="fade-up" data-aos-duration="1000">
              Frequently Asked Questions<span></span>
            </h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item
                eventKey="0"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Accordion.Header>
                  1. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="1"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Accordion.Header>
                  {" "}
                  2. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="2"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Accordion.Header>
                  {" "}
                  3. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="3"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Accordion.Header>
                  {" "}
                  4. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Accordion.Header>
                  {" "}
                  5. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="5"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Accordion.Header>
                  {" "}
                  6. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
        </div>
      </BusinessDetail>
    </>
  );
};

export default BusinessListingView;
