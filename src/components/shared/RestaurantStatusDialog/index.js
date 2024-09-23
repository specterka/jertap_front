"use client";
import React from "react";
import { Modal, Button, Spinner } from "react-bootstrap";

const RestaurantStatusDialog = ({
  isOpen = false,
  onRefresh = () => {},
  isRefreshing = false,
}) => {
  return (
    <Modal
      show={isOpen}
      onHide={() => null}
      animation={true}
      className="sign-out"
    >
      <Modal.Header>
        <Modal.Title>Restaurant Review Status</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isRefreshing ? (
          <div className="d-flex justify-content-center align-items-center">
            <Spinner />
          </div>
        ) : (
          <h6>
            Great things take time! 🕐 Your business is currently undergoing a
            meticulous review to ensure its success. Stay tuned for the green
            light!
          </h6>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="common-btn" onClick={onRefresh}>
          Refresh
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RestaurantStatusDialog;
