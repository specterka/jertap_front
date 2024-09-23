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

const ServicesAmenities = () => {
  return (
    <LoginMain className="deatails-step-block">
      <div className="login-left">
        <h1>Services and Amenities</h1>
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
                  <a href="#" className="active">
                    <span>2</span>
                    <p>
                      Address<br></br> Detail
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#" className="active">
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
                    placeholder="Address"
                  ></input>
                </div>
                <div className="form-group-flex">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Location"
                    ></input>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                    ></input>
                  </div>
                </div>

                <div className="form-group-flex">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="State"
                    ></input>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Zip Code"
                    ></input>
                  </div>
                </div>
                <div className="profile-img-block">
                  <h4>Latitude and Longitude</h4>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224097.62385144556!2d76.92842206824429!3d28.643983879973064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1705659182637!5m2!1sen!2sin"></iframe>
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

export default ServicesAmenities;
