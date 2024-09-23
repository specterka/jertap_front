"use client";

import { HeroSection } from "@/components/landing";
import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import { AdvertiseForm } from "@/styles/visiter/advertise.style";

const AdvertiseIndex = () => {
  return (
    <>
      <HeroSection />
      <AdvertiseForm>
        <Container>
          <h2>
            Advertise your business on Jer Tap<span></span>
          </h2>
          <div className="advertise-detail">
            <div className="advertise-tital">
              <h4>Get the Top Position</h4>
              <p>Enter Your Details Below</p>
            </div>
            <div className="advertise-form">
              <Form>
                <Form.Group
                  className="mb-4"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="text" placeholder="Company Name" />
                </Form.Group>
                <Form.Group
                  className="d-md-flex"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    className=" mb-4 me-md-4"
                    type="text"
                    placeholder="First Name"
                  />
                  <Form.Control
                    className="mb-4"
                    type="text"
                    placeholder="Last Name"
                  />
                </Form.Group>
                <Form.Group
                  className="d-md-flex"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    className="me-4 mb-4 mb-md-0"
                    type="text"
                    placeholder="Mobile Number"
                  />
                  <Form.Control type="text" placeholder="Location" />
                </Form.Group>
              </Form>
            </div>
            <div className="text-center">
              <Button className="common-btn border-0" href="#" type="#">
                Submit
              </Button>
            </div>
          </div>
        </Container>
      </AdvertiseForm>
    </>
  );
};

export default AdvertiseIndex;
