"use client";
import { RestoDetail } from "../../../../../../../styles/restaurant-detail.style";
import { Row, Col } from "react-bootstrap";

import { AddImageDashboardSetting, DeleteIcon } from "@/assets/svgs";
import { useAuth, useMetaData } from "@/hooks";
import { getLabelFromValue } from "@/utils/helper";
import { USER_ROLES_ITEMS } from "@/constants/attributes";

import { API_ROUTER } from "@/services/apiRouter";

import { Loader, RestaurantDetailForm } from "@/components";

const RestaurantDetail = () => {
  // States
  const { user } = useAuth();
  // Hooks
  const [restroData, isFetching] = useMetaData(API_ROUTER.GET_BUSINESS_DETAIL);

  // Return

  return (
    <>
      <RestoDetail>
        <h1>Restaurant Detail</h1>
        {isFetching ? (
          <Loader />
        ) : (
          <Row>
            <Col lg={5} xl={4}>
              <div className="profile-detail">
                <div>
                  <h3>{user?.username}</h3>
                  <p>
                    {user?.role
                      ? getLabelFromValue(USER_ROLES_ITEMS, user?.role)
                      : "-"}
                  </p>
                  {/* <span>
                  <svg
                    width="18"
                    height="11"
                    viewBox="0 0 18 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.90909 10.3711C3.54545 10.3711 2.38636 9.86694 1.43182 8.85864C0.477273 7.85034 0 6.62598 0 5.18555C0 3.74512 0.477273 2.52075 1.43182 1.51245C2.38636 0.50415 3.54545 0 4.90909 0C5.80909 0 6.63409 0.237671 7.38409 0.713013C8.13409 1.18835 8.72727 1.81494 9.16364 2.59277H18V7.77832H16.3636V10.3711H11.4545V7.77832H9.16364C8.72727 8.55615 8.13409 9.18274 7.38409 9.65808C6.63409 10.1334 5.80909 10.3711 4.90909 10.3711ZM4.90909 8.64258C5.80909 8.64258 6.53182 8.35089 7.07727 7.76752C7.62273 7.18414 7.95 6.61157 8.05909 6.0498H13.0909V8.64258H14.7273V6.0498H16.3636V4.32129H8.05909C7.95 3.75952 7.62273 3.18695 7.07727 2.60358C6.53182 2.0202 5.80909 1.72852 4.90909 1.72852C4.00909 1.72852 3.23864 2.06702 2.59773 2.74402C1.95682 3.42102 1.63636 4.23486 1.63636 5.18555C1.63636 6.13623 1.95682 6.95007 2.59773 7.62708C3.23864 8.30408 4.00909 8.64258 4.90909 8.64258ZM4.90909 6.91406C5.35909 6.91406 5.74432 6.74481 6.06477 6.40631C6.38523 6.06781 6.54545 5.66089 6.54545 5.18555C6.54545 4.71021 6.38523 4.30328 6.06477 3.96478C5.74432 3.62628 5.35909 3.45703 4.90909 3.45703C4.45909 3.45703 4.07386 3.62628 3.75341 3.96478C3.43295 4.30328 3.27273 4.71021 3.27273 5.18555C3.27273 5.66089 3.43295 6.06781 3.75341 6.40631C4.07386 6.74481 4.45909 6.91406 4.90909 6.91406Z"
                      fill="#0F4DA2"
                    />
                  </svg>
                  <Link href={"javascript:void(0)"}>Change Password</Link>
                </span> */}
                </div>
                <i className="add-img">
                  <AddImageDashboardSetting />
                </i>
              </div>
              <div className="upload-image">
                <h3>Image Gallery</h3>
                <div className="gallery-img">
                  <div className="delet-img">
                    <figure>
                      <img src="/images/gallery1.png" alt="gallery1" />
                    </figure>
                    <i>
                      <DeleteIcon />
                    </i>
                  </div>
                  <div className="delet-img">
                    <figure>
                      <img src="/images/gallery2.png" alt="gallery2" />
                    </figure>
                    <i>
                      <DeleteIcon />
                    </i>
                  </div>
                  <div className="delet-img">
                    <figure>
                      <img src="/images/gallery3.png" alt="gallery3" />
                    </figure>
                    <i>
                      <DeleteIcon />
                    </i>
                  </div>
                  <div className="delet-img">
                    <figure>
                      <img src="/images/gallery4.png" alt="gallery4" />
                    </figure>
                    <i>
                      <DeleteIcon />
                    </i>
                  </div>
                </div>
                <div className="gallery-img">
                  <div className="delet-img">
                    <figure>
                      <img src="/images/gallery1.png" alt="gallery1" />
                    </figure>
                    <i>
                      <DeleteIcon />
                    </i>
                  </div>
                  <div className="delet-img">
                    <figure>
                      <img src="/images/gallery2.png" alt="gallery2" />
                    </figure>
                    <i>
                      <DeleteIcon />
                    </i>
                  </div>
                  <div className="delet-img">
                    <figure>
                      <img src="/images/gallery3.png" alt="gallery3" />
                    </figure>
                    <i>
                      <DeleteIcon />
                    </i>
                  </div>
                  <div className="upload-detail">
                    <span>
                      <input
                        className="Input_input__lvORT"
                        type="file"
                        id="file-input-1"
                        name="file-input-1"
                        required={true}
                        defaultValue=""
                        accept="image/*"
                      />
                    </span>
                    <label className="file-input-label" htmlFor="file-input-1">
                      <small>+</small>
                    </label>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={7} xl={8}>
              <div className="edit-profile">
                <div className="profile-tital">
                  <h3>Edit Restaurant Detail</h3>
                </div>
                <RestaurantDetailForm restroData1={restroData} />
              </div>
            </Col>
          </Row>
        )}
      </RestoDetail>
    </>
  );
};

export default RestaurantDetail;
