"use client";

import { HeroSection } from "@/components/landing";
import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import { TermsDetail } from "../../../styles/visiter/terms-policy.style";
import BannerSection from "@/components/BannerSection";

const defaultData = [
  {
    id: 1,
    title: "Terms Of Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageSrc: "/images/banner-img1.png",
    alt: "banner-img1",
    link: "#",
  },
];

const TermsofService = () => {
  return (
    <>
      <BannerSection DummyData={defaultData} />
      <TermsDetail className="section-block">
        <Container>
          <div className="terms-service">
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="terms-service">
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="terms-service">
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="terms-service">
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="terms-service">
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="terms-service">
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </Container>
      </TermsDetail>
    </>
  );
};

export default TermsofService;
