"use client";
import { useState } from "react";
import { Table, Pagination, Form } from "react-bootstrap";
import Link from "next/link";
import AddModal from "@/components/modal/dashboard/addmodal";
import ProductCard from "@/components/Cards/Dashboard/listing/ListingProductCard";

import { toast } from "react-toastify";
import { ListingDetail } from "@/styles/listing.style";
import { TimingIcon } from "@/assets/svgs";

const Listings = () => {
  const [show, setShow] = useState(false);
  const handleShow = (flag) => () => setShow(flag);
  const [products, setProducts] = useState([
    {
      sr: 1,
      name: "Test 1",
      address: "Test Address 1",
      description: "Near Test Test 1",
      photo1: "/images/food-img1.png",
      photo2: "/images/food-img2.png",
    },
    {
      sr: 2,
      name: "Test 2",
      address: "Test Address 2",
      description: "Near Test Test 2",
      photo1: "/images/food-img1.png",
      photo2: "/images/food-img2.png",
    },
    {
      sr: 3,
      name: "Test 3",
      address: "Test Address 3",
      description: "Near Test Test 3",
      photo1: "/images/food-img1.png",
      photo2: "/images/food-img2.png",
    },
    {
      sr: 4,
      name: "Test 4",
      address: "Test Address 4",
      description: "Near Test Test 4",
      photo1: "/images/food-img1.png",
      photo2: "/images/food-img2.png",
    },
    {
      sr: 5,
      name: "Test 5",
      address: "Test Address 5",
      description: "Near Test Test 5",
      photo1: "/images/food-img1.png",
      photo2: "/images/food-img2.png",
    },
  ]);

  const handleDelete = (sr) => {
    const updatedProducts = products.filter((product) => product.sr !== sr);
    setProducts(updatedProducts);
    toast.success("Product Successfully deleted");
  };

  return (
    <>
      <ListingDetail>
        <h1>Restaurant Timings</h1>
        <div className="jt-table restro-time">
          <div className="gray-line">
            <h3>Restaurant Timings</h3>
          </div>
          <div className="restro-table">
            <Table responsive bordered>
              <thead>
                <tr>
                  <th style={{ width: "27%" }}>Day</th>
                  <th style={{ width: "30%" }}>Open at</th>
                  <th style={{ width: "30%" }}>Close at</th>
                  <th style={{ width: "13%" }}>Update</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ width: "27%" }}>
                    <h6>Sunday</h6>
                  </td>
                  <td style={{ width: "30%" }}>
                    <Form className="time-out">
                      <Form.Control type="text" placeholder="Timing input" />
                      <i>
                        <TimingIcon />
                      </i>
                    </Form>
                  </td>
                  <td style={{ width: "30%" }}>
                    <Form className="time-out">
                      <Form.Control type="text" placeholder="Timing input" />
                      <i>
                        <TimingIcon />
                      </i>
                    </Form>
                  </td>
                  <td style={{ width: "13%" }}>
                    <Link className="common-btn" href={"javascript:void(0)"}>
                      Update
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "27%" }}>
                    <h6>Monday</h6>
                  </td>
                  <td style={{ width: "30%" }}>
                    <Form className="time-out">
                      <Form.Control type="text" placeholder="Timing input" />
                      <i>
                        <TimingIcon />
                      </i>
                    </Form>
                  </td>
                  <td style={{ width: "30%" }}>
                    <Form className="time-out">
                      <Form.Control type="text" placeholder="Timing input" />
                      <i>
                        <TimingIcon />
                      </i>
                    </Form>
                  </td>
                  <td style={{ width: "13%" }}>
                    <Link className="common-btn" href={"javascript:void(0)"}>
                      Update
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "27%" }}>
                    <h6>Tuesday</h6>
                  </td>
                  <td style={{ width: "30%" }}>
                    <Form className="time-out">
                      <Form.Control type="text" placeholder="Timing input" />
                      <i>
                        <TimingIcon />
                      </i>
                    </Form>
                  </td>
                  <td style={{ width: "30%" }}>
                    <Form className="time-out">
                      <Form.Control type="text" placeholder="Timing input" />
                      <i>
                        <TimingIcon />
                      </i>
                    </Form>
                  </td>
                  <td style={{ width: "13%" }}>
                    <Link className="common-btn" href={"javascript:void(0)"}>
                      Update
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "27%" }}>
                    <h6>Wednesday</h6>
                  </td>
                  <td style={{ width: "30%" }}>
                    <Form className="time-out">
                      <Form.Control type="text" placeholder="Timing input" />
                      <i>
                        <TimingIcon />
                      </i>
                    </Form>
                  </td>
                  <td style={{ width: "30%" }}>
                    <Form className="time-out">
                      <Form.Control type="text" placeholder="Timing input" />
                      <i>
                        <TimingIcon />
                      </i>
                    </Form>
                  </td>
                  <td style={{ width: "13%" }}>
                    <Link className="common-btn" href={"javascript:void(0)"}>
                      Update
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "27%" }}>
                    <h6>Thursday</h6>
                  </td>
                  <td style={{ width: "30%" }}>
                    <Form className="time-out">
                      <Form.Control type="text" placeholder="Timing input" />
                      <i>
                        <TimingIcon />
                      </i>
                    </Form>
                  </td>
                  <td style={{ width: "30%" }}>
                    <Form className="time-out">
                      <Form.Control type="text" placeholder="Timing input" />
                      <i>
                        <TimingIcon />
                      </i>
                    </Form>
                  </td>
                  <td style={{ width: "13%" }}>
                    <Link className="common-btn" href={"javascript:void(0)"}>
                      Update
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "27%" }}>
                    <h6>Friday</h6>
                  </td>
                  <td style={{ width: "30%" }}>
                    <Form className="time-out">
                      <Form.Control type="text" placeholder="Timing input" />
                      <i>
                        <TimingIcon />
                      </i>
                    </Form>
                  </td>
                  <td style={{ width: "30%" }}>
                    <Form className="time-out">
                      <Form.Control type="text" placeholder="Timing input" />
                      <i>
                        <TimingIcon />
                      </i>
                    </Form>
                  </td>
                  <td style={{ width: "13%" }}>
                    <Link className="common-btn" href={"javascript:void(0)"}>
                      Update
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "27%" }}>
                    <h6>Saturday</h6>
                  </td>
                  <td style={{ width: "30%" }}>
                    <Form className="time-out">
                      <Form.Control type="text" placeholder="Timing input" />
                      <i>
                        <TimingIcon />
                      </i>
                    </Form>
                  </td>
                  <td style={{ width: "30%" }}>
                    <Form className="time-out">
                      <Form.Control type="text" placeholder="Timing input" />
                      <i>
                        <TimingIcon />
                      </i>
                    </Form>
                  </td>
                  <td style={{ width: "13%" }}>
                    <Link className="common-btn" href={"javascript:void(0)"}>
                      Update
                    </Link>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </ListingDetail>

      {show && <AddModal onClose={handleShow(false)} />}
    </>
  );
};

export default Listings;
