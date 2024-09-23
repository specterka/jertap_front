"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { LoginMain } from "@/styles/auth.style";
import { BUSINESS_STATUS, USER_TYPES } from "@/constants/keywords";
import { PATH_BUSINESS, PATH_DASHBOARD } from "@/routes/paths";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { Logo } from "@/assets/svgs";

const AddressDetail = () => {
  return (
    <LoginMain className="deatails-step-block">
      <div className="login-left">
        <h1>Address Detail</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
      </div>
      <div className="login-right">
        <div className="login-right-inner">
          <div className="login-right-inner-link">
            <Link href={PATH_DASHBOARD.root}>
              <Logo />
            </Link>
          </div>
          <div className="step-block-points">
            <div className="step-block-points-inner">
              <ul>
                <li>
                  <a href="#" className="active">
                    <span>1</span>
                    <p>
                      Basic <br></br>Detail
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>2</span>
                    <p>
                      Address<br></br> Detail
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>3</span>
                    <p>
                      Service &<br></br> Amenities
                    </p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="login-right-inner-link">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  ></input>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                  ></input>
                </div>
                <div className="form-group select-arrow-before">
                  <Form.Select aria-label="Default select example">
                    <option>Year of Established</option>
                    <option value="1">2024</option>
                    <option value="2">2024</option>
                    <option value="3">2024</option>
                  </Form.Select>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type"
                  ></input>
                </div>
                <button type="submit" className="common-btn btn btn-primary">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </LoginMain>
  );
};

export default AddressDetail;
