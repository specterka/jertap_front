"use client";

import { HeroSection } from "@/components/landing";
import { React, useState } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Tab,
  Tabs,
  Button,
  Dropdown,
} from "react-bootstrap";
import Link from "next/link";
import { SocialDetail } from "@/styles/visiter/social-features.style";

import { useAuth, useMetaData, useToaster } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import { useSearchParams } from "next/navigation";

import { axiosPost } from "@/services/axiosHelper";

import { generateArray } from "@/utils/helper";
import { BlueStarRatingReviews, WhiteStarReviews } from "@/assets/svgs";
import { PATH_VISITOR } from "@/routes/paths";

const SocialUserPage = () => {
  const searchParams = useSearchParams();

  // Get the 'id' parameter from the query string
  const userId = searchParams.get("id");

  const [showComment, setShowComment] = useState(false);

  const [userPost, isUserPost, fetchUserPost] = useMetaData(
    API_ROUTER.USER_POST(userId)
  );

  const [socailUser, isSocailUser, fetchSocailUser] = useMetaData(
    API_ROUTER.USER_SOCIAL_PROFILE(userId)
  );

  const [userReview, isUserReview, fetchUserReview] = useMetaData(
    API_ROUTER.USER_REVIEW(userId)
  );

  const [likecheck, setLikeCheck] = useState("Like removed successfully.");

  const handelLike = async (post_id) => {
    const res = await axiosPost(API_ROUTER.LIKE_UNLIKE_POST(post_id));
    fetchUserPost();
    setLikeCheck(res?.detail);
  };
  const [content, setContent] = useState("");
  const handleComment = async (e, post_id) => {
    e.preventDefault();
    try {
      const res = await axiosPost(API_ROUTER.ADD_COMMENT(post_id), { content });

      setContent();
      fetchUserPost();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <>
      <HeroSection />
      <SocialDetail>
        <div className="activity-section section-block">
          <h2>
            User Feed<span></span>
          </h2>
          <Container className="px-3 px-xxl-0">
            <Row>
              <Col lg={5}>
                <div className="user-profile">
                  <div className="blue-part"></div>
                  <figure>
                    <img
                      src={
                        socailUser?.profile_image
                          ? socailUser?.profile_image
                          : "/images/avatar-dummy.png"
                      }
                      // alt="avatar-dummy"
                    />
                  </figure>
                  <div className="profile-tital">
                    <div className="d-flex align-items-center justify-content-center">
                      <h4>{socailUser?.username}</h4>
                    </div>
                    <p>{socailUser?.bio}</p>
                  </div>
                  <div className="followrs-detail border-none-follow">
                    <ul>
                      <li>
                        <Link href={"javascript:void(0)"}>
                          <p>Following</p>
                          <h4>{socailUser?.following_count}</h4>
                        </Link>
                      </li>
                      <li>
                        <Link href={"javascript:void(0)"}>
                          <p>Followers</p>
                          <h4>{socailUser?.follower_count}</h4>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tabs-section user-tabs">
                  <div className="suggestion-tital"></div>
                  <div className="social-feture-block-tab">
                    <Tabs>
                      <Tab eventKey="Following" title="User Review List">
                        <div className="suggestion-user">
                          {userReview?.results &&
                          userReview?.results.length > 0 ? (
                            userReview?.results.map((item, index) => {
                              const rating = item?.rating || 0;
                              const yellowStarsCount = Math.max(
                                0,
                                Math.min(5, Math.floor(rating))
                              );
                              const whiteStarsCount = 5 - yellowStarsCount;
                              return (
                                <>
                                  <div key={index} className="reviewitem-main" style={{padding : "30px"}}>
                                    <div className="ReviewItem" key={index}>
                                      <div className="user-section">
                                        <div className="restro-detail">
                                          <div className="restro-name">
                                            <div className="jt-tital">
                                              <div className="user-img">
                                                <div className="flex-block-time-name">
                                                  <div>
                                                    <Link
                                                      href={PATH_VISITOR.businessDetail(
                                                        item.restaurant.id
                                                      )}
                                                    >
                                                      <h5>
                                                        {item.restaurant.name}
                                                      </h5>
                                                    </Link>
                                                  </div>
                                                  <div className="review-date"></div>
                                                </div>
                                              </div>
                                              <div className="jt-sub-tital">
                                                <p>{item.comment}</p>
                                                <div className="user-view">
                                                  <div>
                                                    <span>
                                                      <div>
                                                        {generateArray(
                                                          yellowStarsCount
                                                        )?.map((_, i) => (
                                                          <span key={i}>
                                                            <BlueStarRatingReviews />
                                                          </span>
                                                        ))}
                                                        {generateArray(
                                                          whiteStarsCount
                                                        ).map((_, i) => (
                                                          <span
                                                            className="wh-star"
                                                            key={i}
                                                          >
                                                            <WhiteStarReviews />
                                                          </span>
                                                        ))}
                                                      </div>
                                                    </span>
                                                  </div>
                                                  <div className="share-comment"></div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              );
                            })
                          ) : (
                            <p style={{ padding: "20px", textAlign: "center" }}>
                              No Review found For this User
                            </p>
                          )}
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </Col>
              <Col lg={7}>
                <div className="tabs-section">
                  <Tabs
                    defaultActiveKey="All Updates"
                    transition={false}
                    id="noanim-tab-example"
                  >
                    <Tab eventKey="All Updates" title="All Updates">
                      {userPost?.results && userPost?.results.length > 0 ? (
                        userPost?.results.map((item, index) => {
                          return (
                            <>
                              <div
                                className="activity-detail shadow-none"
                                key={index}
                              >
                                <div className="activity-tital">
                                  <div className="d-flex">
                                    <figure>
                                      <img
                                        style={{
                                          width: "63px",
                                          height: "63px",
                                          borderRadius: "50%",
                                        }}
                                        src={
                                          item.user.profile_image
                                            ? item.user.profile_image
                                            : "/images/avatar-dummy.png"
                                        }
                                      />
                                    </figure>
                                    <div className="user-tital">
                                      <h6>{item.user.username}</h6>
                                      <p>{item.content}</p>
                                    </div>
                                  </div>
                                </div>
                                <figure>
                                  <img
                                    className="main-img"
                                    src={item.post_image}
                                    alt="activity-img"
                                  />
                                  <img
                                    className="mobile-img"
                                    src="/images/activity-mobile.png"
                                    alt="activity-mobile"
                                  />
                                </figure>
                                <p>{item.restaurant}</p>
                                <div className="like-comment">
                                  <Link
                                    className="d-flex"
                                    href={"javascript:void(0)"}
                                  >
                                    <svg
                                      width="21"
                                      height="20"
                                      viewBox="0 0 21 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M15.9775 20H4.99296V7L11.9831 0L13.2313 1.25C13.3478 1.36667 13.4435 1.525 13.5184 1.725C13.5933 1.925 13.6308 2.11667 13.6308 2.3V2.65L12.5323 7H18.9732C19.5058 7 19.9718 7.2 20.3713 7.6C20.7707 8 20.9704 8.46667 20.9704 9V11C20.9704 11.1167 20.9538 11.2417 20.9205 11.375C20.8872 11.5083 20.8539 11.6333 20.8206 11.75L17.8249 18.8C17.6751 19.1333 17.4254 19.4167 17.0759 19.65C16.7264 19.8833 16.3603 20 15.9775 20ZM6.99014 18H15.9775L18.9732 11V9H9.98592L11.334 3.5L6.99014 7.85V18ZM4.99296 7V9H1.99718V18H4.99296V20H0V7H4.99296Z"
                                        fill="black"
                                      />
                                    </svg>
                                    <p>{item.like_count}</p>
                                  </Link>
                                  <div className="d-flex align-items-center">
                                    <p style={{ cursor: "pointer" }}>
                                      {item.comment_count} Comments
                                    </p>
                                  </div>
                                </div>
                                <div className="share-post">
                                  <ul>
                                    <li
                                      onClick={() => handelLike(item.post_id)}
                                    >
                                      <svg
                                        className={`${
                                          likecheck === "Liked successfully."
                                            ? "like-post"
                                            : ""
                                        }`}
                                        width="21"
                                        height="20"
                                        viewBox="0 0 21 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M15.9775 20H4.99296V7L11.9831 0L13.2313 1.25C13.3478 1.36667 13.4435 1.525 13.5184 1.725C13.5933 1.925 13.6308 2.11667 13.6308 2.3V2.65L12.5323 7H18.9732C19.5058 7 19.9718 7.2 20.3713 7.6C20.7707 8 20.9704 8.46667 20.9704 9V11C20.9704 11.1167 20.9538 11.2417 20.9205 11.375C20.8872 11.5083 20.8539 11.6333 20.8206 11.75L17.8249 18.8C17.6751 19.1333 17.4254 19.4167 17.0759 19.65C16.7264 19.8833 16.3603 20 15.9775 20ZM6.99014 18H15.9775L18.9732 11V9H9.98592L11.334 3.5L6.99014 7.85V18ZM4.99296 7V9H1.99718V18H4.99296V20H0V7H4.99296Z"
                                          fill="black"
                                        />
                                      </svg>
                                      <p>Like</p>
                                    </li>
                                    <li
                                      onClick={() =>
                                        setShowComment(!showComment)
                                      }
                                    >
                                      <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M0 20V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H4L0 20ZM3.15 14H18V2H2V15.125L3.15 14Z"
                                          fill="#525252"
                                        />
                                      </svg>
                                      <p>Comment</p>
                                    </li>
                                  </ul>
                                </div>

                                <div className="comment-detail">
                                  <Form>
                                    <Form.Group
                                      className="mb-3"
                                      controlId="exampleForm.ControlTextarea1"
                                    >
                                      <Form.Control
                                        placeholder="Type Comment"
                                        as="textarea"
                                        rows={3}
                                        value={content}
                                        onChange={(e) =>
                                          setContent(e.target.value)
                                        }
                                      />
                                    </Form.Group>
                                    <Button
                                      type="submit"
                                      className="common-btn"
                                      onClick={(e) =>
                                        handleComment(e, item.post_id)
                                      }
                                    >
                                      Submit
                                    </Button>
                                  </Form>
                                </div>
                                {showComment && (
                                  <div className="user-comment">
                                    {item.comments &&
                                      item.comments?.length > 0 &&
                                      item.comments?.map((item1, index) => {
                                        return (
                                          <div
                                            className="user-title"
                                            key={index}
                                          >
                                            <figure>
                                              <img
                                                src="/images/avatar-dummy.png"
                                                alt="avatar-dummy"
                                              />
                                            </figure>
                                            <div className="user-subtitle">
                                              <div>
                                                <h6>{item1.comment_by}</h6>
                                                <p>{item1.content}</p>
                                              </div>
                                            </div>
                                          </div>
                                        );
                                      })}
                                  </div>
                                )}
                              </div>
                            </>
                          );
                        })
                      ) : (
                        <p style={{textAlign:"center"}}>No Post found for this User</p>
                      )}
                    </Tab>
                  </Tabs>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </SocialDetail>
    </>
  );
};

export default SocialUserPage;
