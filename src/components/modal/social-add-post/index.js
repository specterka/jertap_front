"use client";
import Link from "next/link";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";
import { useMetaData, useToaster } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import { useState } from "react";
import { axiosPost } from "@/services/axiosHelper";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";

const SocialAddPost = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModel, setShowModel] = useState(false);
  const [content, setContent] = useState("");
  const [post_image, setPostImage] = useState(null); // Changed default to null
  const [restaurant_id, setRestaurantId] = useState("");
  const { toaster } = useToaster();
  const [imagePreview, setImagePreview] = useState(null);
  const [homeSerch, isFetching, homeSearchDetail] = useMetaData(
    API_ROUTER.HOME_RESTAURANT_SEARCH
  );
  const [errors, setErrors] = useState({
    image: "",
    content: "",
  });

  const handleSearch = async () => {
    try {
      await homeSearchDetail({
        search: searchTerm,
      });
      setShowModel(true);
    } catch (error) {}
  };

  const handleCloseModel = () => {
    setShowModel(false);
  };

  const handleUploadImage = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImagePreview(URL.createObjectURL(file));
      setPostImage(file);
      setErrors({ ...errors, image: "" }); // Clear image error
    } else {
      setErrors({ ...errors, image: "Please select a valid image file." });
    }
  };

  const handleSelect = (data) => {
    setRestaurantId(data.id);
    setSearchTerm(data.name);
    handleCloseModel();
  };

  const handleCloseModel1 = () => {
    onClose();
  };

  const handlePost = async (e) => {
    e.preventDefault();

    // Validate fields before proceeding
    let hasError = false;
    const newErrors = { image: "", content: "" };

    if (!post_image) {
      newErrors.image = "Please upload an image.";
      hasError = true;
    }

    if (!content.trim()) {
      newErrors.content = "Event description is required.";
      hasError = true;
    }

    if (!restaurant_id) {
      newErrors.restaurant = "Please select a restaurant.";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return; // Prevent form submission if there are errors
    }

    // Proceed with form submission if there are no errors
    const payload = new FormData();
    payload.append("restaurant_id", restaurant_id);
    payload.append("content", content);
    payload.append("post_image", post_image);

    try {
      const res = await axiosPost(
        API_ROUTER.ADD_POST,
        payload,
        "multipart/form-data"
      );
      toaster(TOAST_ALERTS.ADD_POST_SUCCESS, TOAST_TYPES.SUCCESS);
      setSearchTerm("");
      setContent("");
      setPostImage(null); // Clear image
      setImagePreview(null); // Clear image preview
      onClose();
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  const renderModel = () => {
    return (
      <Modal show={showModel} onHide={handleCloseModel}>
        <Modal.Header closeButton>
          <Modal.Title>Available Businesses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {homeSerch?.map((data, index) => (
            <div key={index} onClick={() => handleSelect(data)}>
              <span>{data.name}</span>
            </div>
          ))}
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <>
      <Modal
        show={true}
        onHide={onClose}
        animation={false}
        className="social-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="jt-send-email mb-5">
              <span className="d-flex align-items-center px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                >
                  <path
                    fill="#525252"
                    d="m15.737 14.672-2.55-2.543a5.94 5.94 0 0 0 1.268-3.675 6 6 0 1 0-6 6 5.94 5.94 0 0 0 3.675-1.267l2.542 2.55a.75.75 0 0 0 1.23-.245.751.751 0 0 0-.165-.82M3.955 8.454a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
                  ></path>
                </svg>
                <input
                  placeholder="Search Restaurant"
                  type="text" // Changed type from email to text
                  className="form-control"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </span>

              <a className="common-btn" onClick={() => handleSearch()}>
                Search
              </a>
              {renderModel()}
            </div>
            {errors.restaurant && (
              <div className="error-message" style={{ color: "red" }}>
                {errors.restaurant}
              </div>
            )}
          </div>
          <Form onSubmit={handlePost}>
            <Row>
              <Col md={12}>
                <h6>Image Upload</h6>
                <div className="upload-detail">
                  {/* <label className="file-input-label" htmlFor="file-input-1">
                    +<span>Upload Photos</span>
                  </label> */}
                  <input
                    type="file"
                    id="file-input-1"
                    name="uploadMedia"
                    onChange={handleUploadImage}
                    accept="image/*" // This restricts file selection to images only
                  />
                  {errors.image && (
                    <div className="error-message" style={{ color: "red" }}>
                      {errors.image}
                    </div>
                  )}

                  {imagePreview && (
                    <div className="image-preview">
                      <img
                        src={imagePreview}
                        alt="Image Preview"
                        style={{
                          width: "100%",
                          maxHeight: "300px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  )}
                </div>
              </Col>
            </Row>
            <Form.Group
              className="my-5"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                placeholder="Event Description"
                as="textarea"
                rows={3}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              {errors.content && (
                <div className="error-message" style={{ color: "red" }}>
                  {errors.content}
                </div>
              )}
            </Form.Group>
            <Modal.Footer>
              <Button
                type="button"
                className="common-btn"
                onClick={handleCloseModel1}
              >
                Cancel
              </Button>
              <Button type="submit" className="common-btn">
                Create
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SocialAddPost;
