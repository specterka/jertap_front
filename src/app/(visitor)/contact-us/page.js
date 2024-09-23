"use client";

import {
  EmailIconContactUs,
  LocationIconCategoryPage,
  PhoneIconContactUs,
} from "@/assets/svgs";
import React, { useEffect, useState } from "react";
import { Container, Form, Row, Col, Button, Accordion } from "react-bootstrap";
import { ContactusIndex } from "@/styles/visiter/contact-us.style";
import BannerSection from "@/components/BannerSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { axiosPost } from "@/services/axiosHelper";
import { API_ROUTER } from "@/services/apiRouter";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { useToaster } from "@/hooks";

const defaultData = [
  {
    id: 1,
    title: "Contact Us",
    imageSrc: "/images/banner-img1.png",
    alt: "banner-img1",
    link: "#",
  },
];

const ContactUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { toaster } = useToaster();

  const [formData, setFormData] = useState({ query: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.query) {
      setErrors({ query: "This field is required." });
      return;
    }

    try {
      const res = await axiosPost(API_ROUTER.ADD_USER_DISPUTE, {
        query: formData.query,
      });
      toaster(TOAST_ALERTS.RESTAURANT_QUERY_SUCCESS, TOAST_TYPES.SUCCESS);
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  return (
    <>
      <div className="contact-us-banner">
        <BannerSection DummyData={defaultData} />
      </div>
      <ContactusIndex>
        <Container className="px-3 px-xxl-0">
          <Row className="section-block">
            <h2 data-aos="fade-up" data-aos-duration="1000">
              General Contact Information <span></span>
            </h2>
            <Col md={4} data-aos="fade-up" data-aos-duration="1000">
              <div className="contact-us-info">
                <LocationIconCategoryPage />
                <div>
                  <h5>Location</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur </p>
                </div>
              </div>
            </Col>
            <Col md={4} data-aos="fade-up" data-aos-duration="1000">
              <div className="contact-us-info">
                <EmailIconContactUs />
                <div>
                  <h5>Email</h5>
                  <p>jertap@gmail.com</p>
                </div>
              </div>
            </Col>
            <Col md={4} data-aos="fade-up" data-aos-duration="1000">
              <div className="contact-us-info">
                <PhoneIconContactUs />
                <div>
                  <h5>Call Now</h5>
                  <p>+999999999999</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="pt-0 section-block">
            <h2 data-aos="fade-up" data-aos-duration="1000">
              Interested to Contact Us <span></span>
            </h2>
            <Col md={12} className="px-3">
              <div
                className="advertise-detail"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="advertise-form">
                  <Form>
                    <Form.Group
                      className="mb-4"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Ask a Question"
                        name="query"
                        value={formData.query}
                        onChange={handleChange}
                        isInvalid={!!errors.query}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.query}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form>
                  <div className="text-center">
                    <Button
                      className="common-btn border-0"
                      href="#"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="section-block">
            <Col md={12}>
              <div className="qa-section">
                <h2 data-aos="fade-up" data-aos-duration="1000">
                  Any Other Questions?<span></span>
                </h2>
                <Accordion defaultActiveKey={0}>
                  {[0, 1, 2, 3, 4, 5, 6].map((item) => (
                    <Accordion.Item
                      eventKey={item}
                      key={item}
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <Accordion.Header>
                        {`${item + 1}.`} Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit.
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </Col>
          </Row>
        </Container>
      </ContactusIndex>
    </>
  );
};

export default ContactUs;
