import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

const GuideSection = () => {
  return (
    <div className="guid-section section-block">
      <Container>
        <div className="guide-detail">
          <figure
            className="guide-img"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="/images/guide-img.png" alt="guide-img" />
          </figure>
          <div
            className="guide-tital"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3>Guide for all</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <Link className="common-btn trans-btn" href={"javascript:void(0)"}>
              More detail
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GuideSection;
