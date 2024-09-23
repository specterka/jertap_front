"use client";

import Link from "next/link";
import React from "react";
import { LoginMain } from "@/styles/auth.style";
import { PATH_DASHBOARD } from "@/routes/paths";
import { Logo } from "@/assets/svgs";

const BasicDetail = () => {
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
                  <a href="#" className="active">
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
                <div className="profile-img-block">
                  <h4>Profile Image</h4>
                  <div className="file-input">
                    <input
                      type="file"
                      name="file-input"
                      id="file-input"
                      className="file-input__input"
                    />
                    <label className="file-input__label" htmlFor="file-input">
                      <svg
                        width="42"
                        height="40"
                        viewBox="0 0 42 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.81818 39.4102C2.76818 39.4102 1.86932 39.0243 1.12159 38.2525C0.373864 37.4807 0 36.5529 0 35.4691V11.823C0 10.7393 0.373864 9.81149 1.12159 9.0397C1.86932 8.26792 2.76818 7.88203 3.81818 7.88203H9.83182L13.3636 3.94102H24.8182V7.88203H15.0341L11.55 11.823H3.81818V35.4691H34.3636V17.7346H38.1818V35.4691C38.1818 36.5529 37.808 37.4807 37.0602 38.2525C36.3125 39.0243 35.4136 39.4102 34.3636 39.4102H3.81818ZM34.3636 11.823V7.88203H30.5455V3.94102H34.3636V0H38.1818V3.94102H42V7.88203H38.1818V11.823H34.3636ZM19.0909 32.5134C21.4773 32.5134 23.5057 31.6513 25.1761 29.9271C26.8466 28.2029 27.6818 26.1092 27.6818 23.6461C27.6818 21.183 26.8466 19.0893 25.1761 17.3651C23.5057 15.6409 21.4773 14.7788 19.0909 14.7788C16.7045 14.7788 14.6761 15.6409 13.0057 17.3651C11.3352 19.0893 10.5 21.183 10.5 23.6461C10.5 26.1092 11.3352 28.2029 13.0057 29.9271C14.6761 31.6513 16.7045 32.5134 19.0909 32.5134ZM19.0909 28.5724C17.7545 28.5724 16.625 28.0962 15.7023 27.1437C14.7795 26.1913 14.3182 25.0254 14.3182 23.6461C14.3182 22.2667 14.7795 21.1009 15.7023 20.1484C16.625 19.196 17.7545 18.7198 19.0909 18.7198C20.4273 18.7198 21.5568 19.196 22.4795 20.1484C23.4023 21.1009 23.8636 22.2667 23.8636 23.6461C23.8636 25.0254 23.4023 26.1913 22.4795 27.1437C21.5568 28.0962 20.4273 28.5724 19.0909 28.5724Z"
                          fill="black"
                          fillOpacity="0.2"
                        />
                      </svg>
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Business Description"
                  ></input>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cuisines"
                  ></input>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Known for"
                  ></input>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Must Order"
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

export default BasicDetail;
