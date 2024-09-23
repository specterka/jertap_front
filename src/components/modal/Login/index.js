"use client";
import React from "react";
import { Modal, Button } from "react-bootstrap";

const LogIN = ({
  isOpen = false,
  onClose = () => {},
  modalTitle = "",
  onConfirm = () => {},
  onCancel = () => {},
  description = "",
}) => {
  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      animation={false}
      className="sign-out"
    >
      <Modal.Header closeButton>
        <Modal.Title>Restaurant Review Status</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </h6>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="common-btn" onClick={onCancel}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LogIN;
