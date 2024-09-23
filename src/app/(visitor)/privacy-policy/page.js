"use client";

import React from "react";
import { Container } from "react-bootstrap";
import { TermsDetail } from "../../../styles/visiter/terms-policy.style";
import BannerSection from "@/components/BannerSection";

const defaultData = [
  {
    id: 1,
    title: "Privacy & Policy",
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
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div className="terms-service" key={item}>
              <h5>
                {`${item}.`} Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          ))}
        </Container>
      </TermsDetail>
    </>
  );
};

export default TermsofService;
