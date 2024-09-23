"use client";
import Link from "next/link";
import { VerificationIconRestroDetail } from "@/assets/svgs";
import {
  Modal,
  Button,
  Form,
  InputGroup,
  Nav,
  NavDropdown,
} from "react-bootstrap";

const RestoDetails = ({ onClose }) => {
  return (
    <>
      <Modal
        show={true}
        onHide={onClose}
        animation={false}
        className="service-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="info-services ">
            <h4>Amenities</h4>
            <div className="info-detail border-0">
              <ul>
                <li>
                  <VerificationIconRestroDetail />
                  <p>Parking</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="info-services ">
            <h4>Services</h4>
            <div className="info-detail border-0">
              <ul>
                <li>
                  <VerificationIconRestroDetail />
                  <p>Home-Delivery</p>
                </li>
                <li>
                  <VerificationIconRestroDetail />
                  <p>Dine-in</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="info-services ">
            <h4>Crowd</h4>
            <div className="info-detail border-0">
              <ul>
                <li>
                  <VerificationIconRestroDetail />
                  <p>Group Crowd</p>
                </li>
                <li>
                  <VerificationIconRestroDetail />
                  <p>Good Place for Kids</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="info-services ">
            <h4>Seating type</h4>
            <div className="info-detail border-0">
              <ul>
                <li>
                  <VerificationIconRestroDetail />
                  <p>Indoor Seating</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="info-services ">
            <h4>Serves</h4>
            <div className="info-detail border-0">
              <ul>
                <li>
                  <VerificationIconRestroDetail />
                  <p>Dinner Menu</p>
                </li>
              </ul>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default RestoDetails;
