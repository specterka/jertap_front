"use client";

import { HeroSection } from "@/components/landing";
import { React, useEffect, useRef, useState } from "react";
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
import SocialFeatures from "../../../components/modal/social-features";
import { ShareIconRestroDetail, CalenderBusinessCrow } from "@/assets/svgs";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SocialAddPost from "@/components/modal/social-add-post";
import { useAuth, useMetaData, useToaster } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import { useParams, useRouter } from "next/navigation";
import { useStateManager } from "react-select";
import { axiosDelete, axiosPost } from "@/services/axiosHelper";
import { STORAGE_KEYS, TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { PATH_AUTH, PATH_SOCIAL } from "@/routes/paths";
import { saveData } from "@/utils/storage";
import { encodeData } from "@/utils/jwt";
import { Loader } from "@/components";

const SocialFeaturesIndex = () => {
  const { user } = useAuth();
  const { toaster } = useToaster();
  const dropdownRef = useRef(null);
  const router = useRouter();
  const [showComment, setShowComment] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  const [userDetails, isLoading, fetchUserDetails] = useMetaData(
    API_ROUTER.SOCIAL_USER_PROFILE(user?.id)
  );

  const [allupdateDetails, isallUpdateLoading, fetchallUpdateDetails] =
    useMetaData(API_ROUTER.ALL_UPDATES);

  const [followreqDetails, isFollowreqLoading, fetchFollowreqDetails] =
    useMetaData(API_ROUTER.PENDING_FOLLOW_REQUEST);

  const [allEvent, isAllEventLoading, fetchAllEvent] = useMetaData(
    API_ROUTER.ALL_EVENT
  );

  const [searchUser, isSearchUser, SearchUserDetail] = useMetaData(
    API_ROUTER.SEARCH_USER,
    {},
    true
  );
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      saveData(STORAGE_KEYS.RETURN_TO, PATH_SOCIAL.socialFeatures);
      router.push(
        `${PATH_AUTH.login}/?returnTo=${encodeData(PATH_SOCIAL.socialFeatures)}`
      );
      return;
    }
    fetchallUpdateDetails();
  }, [isAuthenticated]);

  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(!show);
  }
  const [show1, setShow1] = useState(false);
  const [likecheck, setLikeCheck] = useState("Like removed successfully.");
  function handleShow1() {
    setShow1(!show1);
  }
  const handelLike = async (post_id) => {
    const res = await axiosPost(API_ROUTER.LIKE_UNLIKE_POST(post_id));
    fetchallUpdateDetails();
    setLikeCheck(res?.detail);
  };
  const [content, setContent] = useState("");
  const handleComment = async (e, post_id) => {
    e.preventDefault();
    try {
      const res = await axiosPost(API_ROUTER.ADD_COMMENT(post_id), { content });

      setContent();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };
  const handleDelete = async (post_id) => {
    try {
      const res = await axiosDelete(API_ROUTER.DELETE_POST(post_id));
      toaster(TOAST_ALERTS.DELETE_POST_SUCCESS, TOAST_TYPES.SUCCESS);
      fetchallUpdateDetails();
      allupdateDetails();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };
  const handleCommentDelete = async (comment_id) => {
    try {
      const res = await axiosDelete(API_ROUTER.DELETE_COMMENTS(comment_id));
      toaster(TOAST_ALERTS.DELETE_COMMENT_SUCCESS, TOAST_TYPES.SUCCESS);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };
  const [showDropdown, setShowDropdown] = useState(false);
  const [fetchUser, setFetchUser] = useState("");

  const onUserChange = async (e) => {
    const value = e.target.value;
    setFetchUser(value);
    try {
      const users = await SearchUserDetail({ search: value });
      setShowDropdown(true);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleItemClick = (id) => {
    setShowDropdown(false);
    router.push(`${PATH_SOCIAL.socialUser}?id=${id}`);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  return (
    <>
      <HeroSection />
      {isLoading ? (
        <Loader />
      ) : (
        <SocialDetail>
          <div className="activity-section section-block">
            <h2>
              Activity Feed<span></span>
            </h2>
            <Container className="px-3 px-xxl-0">
              <Row>
                <Col lg={5}>
                  <div className="user-profile">
                    <div className="blue-part"></div>
                    <figure>
                      <img
                        src={
                          userDetails?.profile_image
                            ? userDetails?.profile_image
                            : "/images/avatar-dummy.png"
                        }
                        // alt="avatar-dummy"
                      />
                      <div className="upload-detail">
                        <span>
                          <input
                            className="Input_input__lvORT"
                            id="file-input-1"
                            type="file"
                            value=""
                            name="file-input-1"
                          />
                        </span>
                        <label
                          className="file-input-label "
                          htmlFor="file-input-1"
                        >
                          <svg
                            width="42"
                            height="41"
                            viewBox="0 0 42 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.81818 40.3164C2.76818 40.3164 1.86932 39.9305 1.12159 39.1587C0.373864 38.387 0 37.4592 0 36.3754V12.7293C0 11.6455 0.373864 10.7177 1.12159 9.94595C1.86932 9.17417 2.76818 8.78828 3.81818 8.78828H9.83182L13.3636 4.84727H24.8182V8.78828H15.0341L11.55 12.7293H3.81818V36.3754H34.3636V18.6408H38.1818V36.3754C38.1818 37.4592 37.808 38.387 37.0602 39.1587C36.3125 39.9305 35.4136 40.3164 34.3636 40.3164H3.81818ZM34.3636 12.7293V8.78828H30.5455V4.84727H34.3636V0.90625H38.1818V4.84727H42V8.78828H38.1818V12.7293H34.3636ZM19.0909 33.4196C21.4773 33.4196 23.5057 32.5575 25.1761 30.8333C26.8466 29.1091 27.6818 27.0155 27.6818 24.5523C27.6818 22.0892 26.8466 19.9955 25.1761 18.2714C23.5057 16.5472 21.4773 15.6851 19.0909 15.6851C16.7045 15.6851 14.6761 16.5472 13.0057 18.2714C11.3352 19.9955 10.5 22.0892 10.5 24.5523C10.5 27.0155 11.3352 29.1091 13.0057 30.8333C14.6761 32.5575 16.7045 33.4196 19.0909 33.4196ZM19.0909 29.4786C17.7545 29.4786 16.625 29.0024 15.7023 28.05C14.7795 27.0976 14.3182 25.9317 14.3182 24.5523C14.3182 23.173 14.7795 22.0071 15.7023 21.0547C16.625 20.1023 17.7545 19.6261 19.0909 19.6261C20.4273 19.6261 21.5568 20.1023 22.4795 21.0547C23.4023 22.0071 23.8636 23.173 23.8636 24.5523C23.8636 25.9317 23.4023 27.0976 22.4795 28.05C21.5568 29.0024 20.4273 29.4786 19.0909 29.4786Z"
                              fill="white"
                            />
                          </svg>
                        </label>
                      </div>
                    </figure>
                    <div className="profile-tital">
                      <div className="d-flex align-items-center justify-content-center">
                        <h4>{userDetails?.username}</h4>
                        <i>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.68969 20.2501H4.5C4.30109 20.2501 4.11032 20.1711 3.96967 20.0305C3.82902 19.8898 3.75 19.699 3.75 19.5001V15.3104C3.75009 15.1118 3.82899 14.9213 3.96938 14.7807L15.5306 3.2195C15.6713 3.07895 15.862 3 16.0608 3C16.2596 3 16.4503 3.07895 16.5909 3.2195L20.7806 7.40637C20.9212 7.54701 21.0001 7.7377 21.0001 7.93653C21.0001 8.13535 20.9212 8.32605 20.7806 8.46668L9.21937 20.0307C9.07883 20.1711 8.88834 20.25 8.68969 20.2501Z"
                              stroke="black"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12.75 6L18 11.25"
                              stroke="black"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </i>
                      </div>
                      <p>{userDetails?.bio}</p>
                    </div>
                    <div className="followrs-detail">
                      <ul>
                        <li>
                          <Link href={"javascript:void(0)"}>
                            <p>Following</p>
                            <h4>{userDetails?.following_count}</h4>
                          </Link>
                        </li>
                        <li>
                          <Link href={"javascript:void(0)"}>
                            <p>Followers</p>
                            <h4>{userDetails?.follower_count}</h4>
                          </Link>
                        </li>
                        <li>
                          <Link href={"javascript:void(0)"}>
                            <p>Request</p>
                            <h4>{userDetails?.request_count}</h4>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tabs-section user-tabs">
                    <div className="suggestion-tital"></div>
                    <Tabs
                      defaultActiveKey="Followers Request"
                      transition={false}
                      id="noanim-tab-example"
                    >
                      <Tab
                        eventKey="Followers Request"
                        title="Followers Request"
                      >
                        <div className="suggestion-user">
                          {followreqDetails?.results &&
                          followreqDetails.results.length > 0 ? (
                            followreqDetails.results.map((item, index) => (
                              <div className="user-detail" key={index}>
                                <figure>
                                  <img
                                    style={{
                                      width: "63px",
                                      height: "63px",
                                      borderRadius: "50%",
                                    }}
                                    src={
                                      item.follower.profile_image
                                        ? item.follower.profile_image
                                        : "/images/avatar-dummy.png"
                                    }
                                    alt="User Avatar"
                                  />
                                </figure>
                                <div className="user-tital">
                                  <h6>{item.follower.username}</h6>
                                  <p>{item.follower.bio}</p>
                                </div>
                                <Button
                                  className="common-btn trans-btn"
                                  onClick={handleToggle}
                                >
                                  {isExpanded ? "-" : "+"}
                                </Button>
                              </div>
                            ))
                          ) : (
                            <div
                              className="no-results"
                              style={{ padding: "20px", textAlign: "center" }}
                            >
                              <p>No Pending Request Found</p>
                            </div>
                          )}
                        </div>
                      </Tab>
                      <Tab eventKey="Followers" title="Followers">
                        <div className="suggestion-user">
                          {userDetails?.followers &&
                          userDetails.followers.length > 0 ? (
                            userDetails.followers.map((item, index) => (
                              <div className="user-detail" key={index}>
                                <div className="d-flex">
                                  <figure>
                                    <img
                                      style={{
                                        width: "63px",
                                        height: "63px",
                                        borderRadius: "50%",
                                      }}
                                      src={
                                        item.user_data.profile_image
                                          ? item.user_data.profile_image
                                          : "/images/avatar-dummy.png"
                                      }
                                      alt="User Avatar"
                                    />
                                  </figure>
                                  <div className="user-tital">
                                    <h6>{item.user_data.username}</h6>
                                    <p>{item.user_data.bio}</p>
                                  </div>
                                </div>
                                <div id="myDIV">
                                  <button
                                    className="common-btn trans-btn"
                                    onClick={handleToggle}
                                  >
                                    {isExpanded ? "-" : "+"}
                                  </button>
                                </div>
                              </div>
                            ))
                          ) : (
                            // Display this if there are no followers
                            <div
                              className="no-results"
                              style={{ padding: "20px", textAlign: "center" }}
                            >
                              <p>No Followers Found</p>
                            </div>
                          )}
                        </div>
                      </Tab>
                      <Tab eventKey="Following" title="Following">
                        <div className="suggestion-user">
                          {userDetails?.followings &&
                          userDetails.followings.length > 0 ? (
                            userDetails.followings.map((item, index) => (
                              <div className="user-detail" key={index}>
                                <div className="d-flex">
                                  <figure>
                                    <img
                                      style={{
                                        width: "63px",
                                        height: "63px",
                                        borderRadius: "50%",
                                      }}
                                      src={
                                        item.user_data.profile_image
                                          ? item.user_data.profile_image
                                          : "/images/avatar-dummy.png"
                                      }
                                      alt="User Avatar" // Added alt attribute for accessibility
                                    />
                                  </figure>
                                  <div className="user-tital">
                                    <h6>{item.user_data.username}</h6>
                                    <p>{item.user_data.bio}</p>
                                  </div>
                                </div>
                                <div id="myDIV">
                                  <button
                                    className="common-btn trans-btn"
                                    onClick={handleToggle}
                                  >
                                    {isExpanded ? "-" : "+"}
                                  </button>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div
                              className="no-results"
                              style={{ padding: "20px", textAlign: "center" }}
                            >
                              <p>No Followings Found</p>
                            </div>
                          )}
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                  <Link
                    className="common-btn"
                    href={"javascript:void(0)"}
                    onClick={handleShow}
                  >
                    Add Post
                  </Link>
                </Col>
                <Col lg={7}>
                  <div className="jt-send-email">
                    <span>
                      <Form.Control
                        placeholder="Search Friend"
                        onChange={onUserChange}
                        value={fetchUser}
                        onFocus={() => setShowDropdown(true)}
                        onBlur={handleBlur}
                      />
                    </span>
                    <Link className="common-btn" href={"javascript:void(0)"}>
                      Search
                    </Link>
                  </div>

                  {showDropdown && (
                    <Dropdown.Menu show ref={dropdownRef}>
                      {searchUser?.length > 0 ? (
                        searchUser.map((item, index) => (
                          <Dropdown.Item
                            key={index}
                            eventKey={item?.id}
                            onMouseDown={(e) => {
                              e.preventDefault();
                              handleItemClick(item?.id);
                            }}
                          >
                            {item.username}
                          </Dropdown.Item>
                        ))
                      ) : (
                        <Dropdown.Item disabled>
                          No Result Found This Username
                        </Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  )}

                  <div className="tabs-section">
                    <Tabs
                      defaultActiveKey="All Updates"
                      transition={false}
                      id="noanim-tab-example"
                    >
                      <Tab eventKey="All Updates" title="All Updates">
                        {allupdateDetails?.results &&
                          allupdateDetails?.results.length > 0 &&
                          allupdateDetails?.results.map((item, index) => {
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
                                          // alt="/images/avatar-dummy.png"
                                        />
                                      </figure>
                                      <div className="user-tital">
                                        <h6>{item.user.username}</h6>
                                        <p>{item.content}</p>
                                      </div>
                                    </div>
                                    <div className="d-flex  align-items-center">
                                      <Link href={"javascript:void(0)"}>
                                        <svg
                                          width="33"
                                          height="9"
                                          viewBox="0 0 33 9"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M4.21921 8.86237C3.11586 8.86237 2.17133 8.46683 1.38561 7.67575C0.59989 6.88466 0.207031 5.93367 0.207031 4.82279C0.207031 3.7119 0.59989 2.76092 1.38561 1.96983C2.17133 1.17875 3.11586 0.783203 4.21921 0.783203C5.32256 0.783203 6.26709 1.17875 7.05281 1.96983C7.83852 2.76092 8.23138 3.7119 8.23138 4.82279C8.23138 5.93367 7.83852 6.88466 7.05281 7.67575C6.26709 8.46683 5.32256 8.86237 4.21921 8.86237ZM16.2557 8.86237C15.1524 8.86237 14.2079 8.46683 13.4221 7.67575C12.6364 6.88466 12.2436 5.93367 12.2436 4.82279C12.2436 3.7119 12.6364 2.76092 13.4221 1.96983C14.2079 1.17875 15.1524 0.783203 16.2557 0.783203C17.3591 0.783203 18.3036 1.17875 19.0893 1.96983C19.8751 2.76092 20.2679 3.7119 20.2679 4.82279C20.2679 5.93367 19.8751 6.88466 19.0893 7.67575C18.3036 8.46683 17.3591 8.86237 16.2557 8.86237ZM28.2923 8.86237C27.1889 8.86237 26.2444 8.46683 25.4587 7.67575C24.6729 6.88466 24.2801 5.93367 24.2801 4.82279C24.2801 3.7119 24.6729 2.76092 25.4587 1.96983C26.2444 1.17875 27.1889 0.783203 28.2923 0.783203C29.3956 0.783203 30.3401 1.17875 31.1259 1.96983C31.9116 2.76092 32.3044 3.7119 32.3044 4.82279C32.3044 5.93367 31.9116 6.88466 31.1259 7.67575C30.3401 8.46683 29.3956 8.86237 28.2923 8.86237Z"
                                            fill="#525252"
                                          />
                                        </svg>
                                      </Link>
                                      <button
                                        className="common-btn border-0 ms-2"
                                        href="#"
                                        onClick={() =>
                                          handleDelete(item.post_id)
                                        }
                                      >
                                        Delete
                                      </button>
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
                                    <div
                                      className="d-flex align-items-center"
                                      onClick={() =>
                                        setShowComment(!showComment)
                                      }
                                    >
                                      <p style={{ cursor: "pointer" }}>
                                        {" "}
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
                                          // className="like-post"
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
                                  {/* <div className="comment-detail">
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                  >
                                    <Form.Control
                                      placeholder="Type Comment"
                                      as="textarea"
                                      rows={3}
                                    />
                                  </Form.Group>
                                  <Button href="#" className="common-btn">
                                    Submit
                                  </Button>
                                </div> */}
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
                                      item.comments.length > 0 ? (
                                        item.comments.map((item1, index) => (
                                          <div
                                            className="user-title"
                                            key={index}
                                          >
                                            <figure>
                                              <img
                                                src="/images/avatar-dummy.png"
                                                alt="avatar-dummy"
                                                style={{
                                                  width: "63px",
                                                  height: "63px",
                                                  borderRadius: "50%",
                                                }}
                                              />
                                            </figure>
                                            <div className="user-subtitle">
                                              <div>
                                                <h6>{item1.comment_by}</h6>
                                                <p>{item1.content}</p>
                                              </div>
                                              <button
                                                className="common-btn border-0 ms-2"
                                                onClick={(e) => {
                                                  e.stopPropagation(); // Prevents click event from bubbling up
                                                  handleCommentDelete(
                                                    item1.comment_id
                                                  );
                                                }}
                                              >
                                                Delete
                                              </button>
                                            </div>
                                          </div>
                                        ))
                                      ) : (
                                        <p>No comments available</p> // Optional: Show a message when no comments
                                      )}
                                    </div>
                                  )}
                                </div>
                              </>
                            );
                          })}
                      </Tab>
                    </Tabs>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="events-section section-block mt-5">
            <Container className="px-3 px-xxl-0">
              <div className="events-title">
                <h2>
                  Our Events<span></span>
                </h2>
                <Button
                  className="common-btn  part-btn"
                  variant="primary"
                  onClick={handleShow1}
                >
                  Create New Event
                </Button>
              </div>
              <Row>
                <Col md={6}>
                  <figure>
                    <img
                      src={allEvent?.results[0].event_image}
                      alt="event-img"
                    />
                  </figure>
                  <div className="events-detail">
                    <div className="event-tital">
                      <h5>
                        {allEvent?.results[0].name}
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="33"
                            height="9"
                            fill="none"
                          >
                            <path
                              fill="#525252"
                              d="M4.22 8.862c-1.104 0-2.049-.395-2.834-1.186C.6 6.885.207 5.934.207 4.823.207 3.712.6 2.76 1.386 1.97 2.17 1.179 3.116.783 4.219.783c1.104 0 2.048.396 2.834 1.187.786.79 1.178 1.742 1.178 2.853 0 1.11-.392 2.062-1.178 2.853-.786.79-1.73 1.186-2.834 1.186m12.036 0c-1.104 0-2.048-.395-2.834-1.186-.786-.791-1.178-1.742-1.178-2.853 0-1.111.392-2.062 1.178-2.853.786-.791 1.73-1.187 2.834-1.187 1.103 0 2.048.396 2.833 1.187.786.79 1.179 1.742 1.179 2.853 0 1.11-.393 2.062-1.179 2.853-.785.79-1.73 1.186-2.833 1.186m12.036 0c-1.103 0-2.048-.395-2.833-1.186-.786-.791-1.179-1.742-1.179-2.853 0-1.111.393-2.062 1.179-2.853.785-.791 1.73-1.187 2.833-1.187 1.104 0 2.048.396 2.834 1.187.786.79 1.178 1.742 1.178 2.853 0 1.11-.392 2.062-1.178 2.853-.786.79-1.73 1.186-2.834 1.186"
                            ></path>
                          </svg>
                        </a>
                      </h5>
                      <p>{allEvent?.results[0].description}</p>
                    </div>
                    <div className="date-calender">
                      <div className="d-flex">
                        {/* <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      /> */}
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.5023 23.9456H2.38914C1.08597 23.9456 0 22.8597 0 21.5565V4.01805C0 2.71488 0.868778 1.62891 2.00905 1.62891H3.20362V3.20357H2.00905C1.84615 3.20357 1.62896 3.52936 1.62896 4.01805V21.5565C1.62896 21.9909 2.00905 22.371 2.44344 22.371H21.5566C21.9909 22.371 22.371 21.9909 22.371 21.5565V4.01805C22.371 3.52936 22.0995 3.20357 21.9909 3.20357H20.7964V1.62891H21.9909C23.0769 1.62891 24 2.71488 24 4.01805V21.5565C23.8914 22.8597 22.8054 23.9456 21.5023 23.9456Z"
                            fill="#0F4DA2"
                          />
                          <path
                            d="M5.59329 4.83258C5.15891 4.83258 4.77881 4.45249 4.77881 4.0181V0.81448C4.77881 0.38009 5.15891 0 5.59329 0C6.02768 0 6.40777 0.38009 6.40777 0.81448V4.0181C6.35348 4.45249 6.02768 4.83258 5.59329 4.83258ZM18.2992 4.83258C17.8648 4.83258 17.4847 4.45249 17.4847 4.0181V0.81448C17.4847 0.38009 17.8648 0 18.2992 0C18.7336 0 19.1137 0.38009 19.1137 0.81448V4.0181C19.1137 4.45249 18.7336 4.83258 18.2992 4.83258ZM7.98244 1.62896H15.91V3.25792H7.98244V1.62896ZM1.5752 6.40724H22.3173V8.0362H1.5752V6.40724ZM19.1137 9.61086H20.6883V11.1855H19.1137V9.61086ZM15.91 9.61086H17.539V11.1855H15.91V9.61086ZM12.7607 9.61086H14.3354V11.1855H12.7607V9.61086ZM9.5571 9.61086H11.1318V11.1855H9.5571V9.61086ZM6.35348 9.61086H7.98244V11.1855H6.35348V9.61086ZM19.1137 12.8145H20.6883V14.3891H19.1137V12.8145ZM15.91 12.8145H17.539V14.3891H15.91V12.8145ZM12.7607 12.8145H14.3354V14.3891H12.7607V12.8145ZM9.5571 12.8145H11.1318V14.3891H9.5571V12.8145ZM6.35348 12.8145H7.98244V14.3891H6.35348V12.8145ZM3.20415 12.8145H4.77881V14.3891H3.20415V12.8145ZM19.1137 15.9638H20.6883V17.5928H19.1137V15.9638ZM15.91 15.9638H17.539V17.5928H15.91V15.9638ZM12.7607 15.9638H14.3354V17.5928H12.7607V15.9638ZM9.5571 15.9638H11.1318V17.5928H9.5571V15.9638ZM6.35348 15.9638H7.98244V17.5928H6.35348V15.9638ZM3.20415 15.9638H4.77881V17.5928H3.20415V15.9638ZM15.91 19.1674H17.539V20.7421H15.91V19.1674ZM12.7607 19.1674H14.3354V20.7421H12.7607V19.1674ZM9.5571 19.1674H11.1318V20.7421H9.5571V19.1674ZM6.35348 19.1674H7.98244V20.7421H6.35348V19.1674ZM3.20415 19.1674H4.77881V20.7421H3.20415V19.1674Z"
                            fill="#0F4DA2"
                          />
                        </svg>
                        <p>{formatDate(allEvent?.results[0].date_time)}</p>
                      </div>
                      <button
                        className="common-btn"
                        href={"javascript:void(0)"}
                      >
                        Participate
                      </button>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  {allEvent?.results &&
                    allEvent.results.length > 0 &&
                    allEvent.results.map((item, index) => {
                      return (
                        <div className="events-detail shadow-none" key={index}>
                          <div className="event-tital">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                          <div className="date-calender">
                            <div className="d-flex">
                              <CalenderBusinessCrow />
                              <p>{formatDate(item.date_time)}</p>
                            </div>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="33"
                              height="9"
                              fill="none"
                            >
                              <path
                                fill="#525252"
                                d="M4.22 8.862c-1.104 0-2.049-.395-2.834-1.186C.6 6.885.207 5.934.207 4.823.207 3.712.6 2.76 1.386 1.97 2.17 1.179 3.116.783 4.219.783c1.104 0 2.048.396 2.834 1.187.786.79 1.178 1.742 1.178 2.853 0 1.11-.392 2.062-1.178 2.853-.786.79-1.73 1.186-2.834 1.186m12.036 0c-1.104 0-2.048-.395-2.834-1.186-.786-.791-1.178-1.742-1.178-2.853 0-1.111.392-2.062 1.178-2.853.786-.791 1.73-1.187 2.834-1.187 1.103 0 2.048.396 2.833 1.187.786.79 1.179 1.742 1.179 2.853 0 1.11-.393 2.062-1.179 2.853-.785.79-1.73 1.186-2.833 1.186m12.036 0c-1.103 0-2.048-.395-2.833-1.186-.786-.791-1.179-1.742-1.179-2.853 0-1.111.393-2.062 1.179-2.853.785-.791 1.73-1.187 2.833-1.187 1.104 0 2.048.396 2.834 1.187.786.79 1.178 1.742 1.178 2.853 0 1.11-.392 2.062-1.178 2.853-.786.79-1.73 1.186-2.834 1.186"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      );
                    })}
                </Col>
              </Row>
              <Swiper
                navigation={true}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                }}
                className="mySwiper"
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  575: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                }}
              >
                <SwiperSlide>
                  <figure className="moblie-view">
                    <img src="/images/event-img.png" alt="event-img" />
                  </figure>
                  <div className="events-detail moblie-view">
                    <div className="event-tital">
                      <h5>Grow Your Business Successfully</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div className="date-calender">
                      <div className="d-flex">
                        <CalenderBusinessCrow />
                        <p>7 December, 2023</p>
                      </div>
                      <button
                        className="common-btn"
                        href={"javascript:void(0)"}
                      >
                        Participate
                      </button>
                      {/* <Link
                      className="d-flex align-items-center"
                      href={"javascript:void(0)"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="33"
                        height="9"
                        fill="none"
                      >
                        <path
                          fill="#525252"
                          d="M4.22 8.862c-1.104 0-2.049-.395-2.834-1.186C.6 6.885.207 5.934.207 4.823.207 3.712.6 2.76 1.386 1.97 2.17 1.179 3.116.783 4.219.783c1.104 0 2.048.396 2.834 1.187.786.79 1.178 1.742 1.178 2.853 0 1.11-.392 2.062-1.178 2.853-.786.79-1.73 1.186-2.834 1.186m12.036 0c-1.104 0-2.048-.395-2.834-1.186-.786-.791-1.178-1.742-1.178-2.853 0-1.111.392-2.062 1.178-2.853.786-.791 1.73-1.187 2.834-1.187 1.103 0 2.048.396 2.833 1.187.786.79 1.179 1.742 1.179 2.853 0 1.11-.393 2.062-1.179 2.853-.785.79-1.73 1.186-2.833 1.186m12.036 0c-1.103 0-2.048-.395-2.833-1.186-.786-.791-1.179-1.742-1.179-2.853 0-1.111.393-2.062 1.179-2.853.785-.791 1.73-1.187 2.833-1.187 1.104 0 2.048.396 2.834 1.187.786.79 1.178 1.742 1.178 2.853 0 1.11-.392 2.062-1.178 2.853-.786.79-1.73 1.186-2.834 1.186"
                        ></path>
                      </svg>
                    </Link> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <figure className="moblie-view">
                    <img src="/images/event-img.png" alt="event-img" />
                  </figure>
                  <div className="events-detail moblie-view">
                    <div className="event-tital">
                      <h5>Grow Your Business Successfully</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div className="date-calender">
                      <div className="d-flex">
                        <CalenderBusinessCrow />
                        <p>8 December, 2023</p>
                      </div>
                      <button
                        className="common-btn"
                        href={"javascript:void(0)"}
                      >
                        Participate
                      </button>
                      {/* <Link
                      className="d-flex align-items-center"
                      href={"javascript:void(0)"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="33"
                        height="9"
                        fill="none"
                      >
                        <path
                          fill="#525252"
                          d="M4.22 8.862c-1.104 0-2.049-.395-2.834-1.186C.6 6.885.207 5.934.207 4.823.207 3.712.6 2.76 1.386 1.97 2.17 1.179 3.116.783 4.219.783c1.104 0 2.048.396 2.834 1.187.786.79 1.178 1.742 1.178 2.853 0 1.11-.392 2.062-1.178 2.853-.786.79-1.73 1.186-2.834 1.186m12.036 0c-1.104 0-2.048-.395-2.834-1.186-.786-.791-1.178-1.742-1.178-2.853 0-1.111.392-2.062 1.178-2.853.786-.791 1.73-1.187 2.834-1.187 1.103 0 2.048.396 2.833 1.187.786.79 1.179 1.742 1.179 2.853 0 1.11-.393 2.062-1.179 2.853-.785.79-1.73 1.186-2.833 1.186m12.036 0c-1.103 0-2.048-.395-2.833-1.186-.786-.791-1.179-1.742-1.179-2.853 0-1.111.393-2.062 1.179-2.853.785-.791 1.73-1.187 2.833-1.187 1.104 0 2.048.396 2.834 1.187.786.79 1.178 1.742 1.178 2.853 0 1.11-.392 2.062-1.178 2.853-.786.79-1.73 1.186-2.834 1.186"
                        ></path>
                      </svg>
                    </Link> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <figure className="moblie-view">
                    <img src="/images/event-img.png" alt="event-img" />
                  </figure>
                  <div className="events-detail moblie-view">
                    <div className="event-tital">
                      <h5>Grow Your Business Successfully</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div className="date-calender">
                      <div className="d-flex">
                        <CalenderBusinessCrow />
                        <p>9 December, 2023</p>
                      </div>
                      <button
                        className="common-btn"
                        href={"javascript:void(0)"}
                      >
                        Participate
                      </button>
                      {/* <Link
                      className="d-flex align-items-center"
                      href={"javascript:void(0)"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="33"
                        height="9"
                        fill="none"
                      >
                        <path
                          fill="#525252"
                          d="M4.22 8.862c-1.104 0-2.049-.395-2.834-1.186C.6 6.885.207 5.934.207 4.823.207 3.712.6 2.76 1.386 1.97 2.17 1.179 3.116.783 4.219.783c1.104 0 2.048.396 2.834 1.187.786.79 1.178 1.742 1.178 2.853 0 1.11-.392 2.062-1.178 2.853-.786.79-1.73 1.186-2.834 1.186m12.036 0c-1.104 0-2.048-.395-2.834-1.186-.786-.791-1.178-1.742-1.178-2.853 0-1.111.392-2.062 1.178-2.853.786-.791 1.73-1.187 2.834-1.187 1.103 0 2.048.396 2.833 1.187.786.79 1.179 1.742 1.179 2.853 0 1.11-.393 2.062-1.179 2.853-.785.79-1.73 1.186-2.833 1.186m12.036 0c-1.103 0-2.048-.395-2.833-1.186-.786-.791-1.179-1.742-1.179-2.853 0-1.111.393-2.062 1.179-2.853.785-.791 1.73-1.187 2.833-1.187 1.104 0 2.048.396 2.834 1.187.786.79 1.178 1.742 1.178 2.853 0 1.11-.392 2.062-1.178 2.853-.786.79-1.73 1.186-2.834 1.186"
                        ></path>
                      </svg>
                    </Link> */}
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <Button
                className="common-btn  part-btn"
                variant="primary"
                onClick={handleShow1}
              >
                Create New Event
              </Button>
            </Container>
          </div>
        </SocialDetail>
      )}
      {show1 && <SocialFeatures onClose={handleShow1} />}
      {show && <SocialAddPost onClose={handleShow} />}
    </>
  );
};

export default SocialFeaturesIndex;
