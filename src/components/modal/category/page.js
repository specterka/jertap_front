"use client";
import Link from "next/link";
import {
  Modal,
  Button,
  Form,
  InputGroup,
  Nav,
  NavDropdown,
} from "react-bootstrap";

const Category = ({ onClose }) => {
  return (
    <>
      <Modal
        show={true}
        onHide={onClose}
        animation={false}
        className="aad-modal category-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>More Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="food-category">
            <h6>Quick Filters</h6>
            <div className="food-btn">
              <Link className="common-btn trans-btn" href={""}>
                Book a Table
              </Link>
              <Link className="common-btn trans-btn" href={""}>
                Online Ordering
              </Link>
              <Link className="common-btn trans-btn" href={""}>
                Open Now
              </Link>
              <Link className="common-btn trans-btn" href={""}>
                Trending
              </Link>
              <Link className="common-btn trans-btn" href={""}>
                Top Rated
              </Link>
              <Link className="common-btn trans-btn" href={""}>
                Quick Response
              </Link>
              <Link className="common-btn trans-btn" href={""}>
                Verified
              </Link>
              <Link className="common-btn trans-btn" href={""}>
                Deals
              </Link>
            </div>
            <h6>Sort by</h6>
            <div className="food-btn">
              <Link className="common-btn trans-btn" href={""}>
                Relevance
              </Link>
              <Link className="common-btn trans-btn" href={""}>
                Rating
              </Link>
              <Link className="common-btn trans-btn" href={""}>
                Popular
              </Link>
              <Link className="common-btn trans-btn" href={""}>
                Distance
              </Link>
            </div>
            <h6>Price</h6>
            <div className="food-btn">
              <Link className="common-btn trans-btn" href={""}>
                0 - 500
              </Link>
              <Link className="common-btn trans-btn" href={""}>
                500 - 1000
              </Link>
              <Link className="common-btn trans-btn" href={""}>
                1000-1500
              </Link>
              <Link className="common-btn trans-btn" href={""}>
                1500 - 2000
              </Link>
              <Link className="common-btn trans-btn hotels-btn" href={""}>
                Restaurant in 5 Start Hotels
              </Link>
            </div>
            <h6>Cuisines</h6>
            <div className="food-btn">
              <Link className="common-btn trans-btn" href={""}>
                Chinese
              </Link>
              <Link className="common-btn trans-btn" href={""}>
                Italian
              </Link>
              <Link className="common-btn trans-btn" href={""}>
                Thai
              </Link>
              <Link className="common-btn trans-btn" href={""}>
                Korean
              </Link>
              <Link className="common-btn trans-btn" href={""}>
                Japanese
              </Link>
              <Link className="common-btn trans-btn" href={""}>
                Sea Food
              </Link>
              <Link className="common-btn trans-btn" href={""}>
                Indian
              </Link>
              <Link className="common-btn trans-btn" href={""}>
                Rajasthani
              </Link>
            </div>
            <h6>Amenities</h6>
            <div className="food-btn">
              <Link className="common-btn trans-btn" href={""}>
                Wi-Fi
              </Link>
              <Link className="common-btn trans-btn" href={""}>
                Happy Hour
              </Link>
              <Link className="common-btn trans-btn" href={""}>
                Dine-in
              </Link>
              <Link className="common-btn trans-btn" href={""}>
                Parking
              </Link>
            </div>
            <h6>Ratings</h6>
            <div className="food-btn">
              <Link className="common-btn trans-btn" href={""}>
                3.5 +
              </Link>
              <Link className="common-btn trans-btn" href={""}>
                4 +
              </Link>
              <Link className="common-btn trans-btn" href={""}>
                4.5 +
              </Link>
              <Link className="common-btn trans-btn" href={""}>
                5 +
              </Link>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="common-btn">Reset Filters</Button>
          <Button variant="common-btn">Apply Filters</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Category;
