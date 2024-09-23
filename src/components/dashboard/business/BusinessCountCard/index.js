import Link from "next/link";
import React from "react";
import { Col } from "react-bootstrap";

const BusinessCountCard = ({ icon, title, dataCount = 0, actionHandler }) => {
  return (
    <Col lg={6}>
      <div className="jt-count">
        <div className="d-flex align-items-center">
          <span>{icon}</span>
          <div className="count-number">
            <p>{title}</p>
            <h3>{dataCount}</h3>
          </div>
        </div>
        <Link className="common-btn" href="#" onClick={actionHandler}>
          + Add
        </Link>
      </div>
    </Col>
  );
};

export default BusinessCountCard;
