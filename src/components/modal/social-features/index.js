"use client";
import Link from "next/link";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";
import { useMetaData, useToaster } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import { useState } from "react";
import { axiosPost } from "@/services/axiosHelper";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";

const SocialFeatures = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModel, setShowModel] = useState(false);
  const [name, setName] = useState("");
  const [event_image, setEventImage] = useState("");
  const [description, setDescription] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [date_time, setDateTime] = useState("");
  const { toaster } = useToaster();
  const [imagePreview, setImagePreview] = useState(null);

  const [homeSerch, isFetching, homeSearchDetail] = useMetaData(
    API_ROUTER.HOME_RESTAURANT_SEARCH
  );

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
  // const handleUploadImage = (e) => {
  //   const file = e.target.files[0];
  //   const key = Date.now();
  //   Object.assign(file, {
  //     preview: URL.createObjectURL(file),
  //     fileKey: key,
  //   });
  //   setEventImage(file);
  // };

  const handleUploadImage = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImagePreview(URL.createObjectURL(file));
      setEventImage(file);
      setErrors({ ...errors, image: "" }); // Clear image error
    } else {
      setErrors({ ...errors, image: "Please select a valid image file." });
    }
  };

  const handleDateChange = (e) => {
    setDateTime(e.target.value);
  };

  const handleSelect = (data) => {
    setRestaurant(data.id);
    setSearchTerm(data.name);
    handleCloseModel();
  };

  const [errors, setErrors] = useState({
    image: "",
    content: "",
  });

  const handleEvent = async (e) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = { image: "", content: "" };

    if (!event_image) {
      newErrors.image = "Please upload an image.";
      hasError = true;
    }

    if (!name.trim()) {
      newErrors.name = "Event name is required.";
      hasError = true;
    }

    if (!description.trim()) {
      newErrors.content = "Event description is required.";
      hasError = true;
    }

    if (!restaurant) {
      newErrors.restaurant = "Please select a restaurant.";
      hasError = true;
    }

    if (!date_time) {
      newErrors.date_time = "Please select a date.";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return; // Prevent form submission if there are errors
    }
    const payload = new FormData();
    payload.append("restaurant", restaurant);
    payload.append("name", name);
    payload.append("description", description);
    payload.append("event_image", event_image);
    payload.append("date_time", date_time);

    try {
      const res = await axiosPost(
        API_ROUTER.ADD_EVENT,
        payload,
        "multipart/form-data"
      );
      toaster(TOAST_ALERTS.ADD_EVENT_SUCCESS, TOAST_TYPES.SUCCESS);
      setSearchTerm("");
      setRestaurant("");
      setName("");
      setDescription("");
      setEventImage("");
      onClose();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };
  const handleCloseModel1 = () => {
    onClose();
  };
  const renderModel = () => {
    return (
      <Modal show={showModel} onHide={handleCloseModel}>
        <Modal.Header closeButton>
          <Modal.Title>Available Businesses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {homeSerch?.map((data, index) => {
            return (
              <>
                <div key={index} onClick={() => handleSelect(data)}>
                  {data.name}
                </div>
              </>
            );
          })}
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
          <Modal.Title>Create New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="jt-send-email">
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
                type="email"
                className="form-control"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </span>
            <a className="common-btn" onClick={handleSearch}>
              Search
            </a>
            {renderModel()}
          </div>
          {errors.restaurant && (
            <div className="error-message" style={{ color: "red" }}>
              {errors.restaurant}
            </div>
          )}
          <Form onSubmit={handleEvent}>
            <Form.Group
              className="my-4"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                placeholder="Event Name"
                rows={1}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <div className="error-message" style={{ color: "red" }}>
                  {errors.name}
                </div>
              )}
            </Form.Group>
            <Form.Control
              placeholder="Event Description"
              as="textarea"
              rows={1}
              onChange={(e) => setDescription(e.target.value)}
            />
            {errors.content && (
              <div className="error-message" style={{ color: "red" }}>
                {errors.content}
              </div>
            )}
            <Row>
              <Col md={6}>
                <h6>Select Event Date</h6>
                <Form.Group
                  className="calendar"
                  controlId="exampleForm.ControlTextarea1"
                >
                  {/* <Form.Control
                  
                    type="date"
                    rows={3}
                    onChange={date_time}
                  /> */}
                  <input
                    placeholder="21 March, 2024"
                    type="date"
                    value={date_time}
                    onChange={handleDateChange}
                  />
                  {errors.date_time && (
                    <div className="error-message" style={{ color: "red" }}>
                      {errors.date_time}
                    </div>
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                <h6>Image Upload</h6>
                <div className="upload-detail">
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
                  <input
                    type="file"
                    id="uploadMedia"
                    name="uploadMedia"
                    onChange={handleUploadImage}
                  />
                  {errors.image && (
                    <div className="error-message" style={{ color: "red" }}>
                      {errors.image}
                    </div>
                  )}
                 
                </div>
              </Col>
            </Row>
            <Modal.Footer>
              <Button
                type="button"
                className="common-btn"
                onClick={() => handleCloseModel1()}
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

export default SocialFeatures;
