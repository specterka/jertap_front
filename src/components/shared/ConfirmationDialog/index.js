"use client";
import React from "react";
import { Modal, Button } from "react-bootstrap";

const ConfirmationDialog = ({
  isOpen = false,
  onClose = () => {},
  modalTitle = "",
  onConfirm = () => {},
  onCancel = () => {},
  description = "",
}) => {
  return (
    <Modal show={isOpen} onHide={onClose} animation={true} className="sign-out">
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>{description}</h6>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="common-btn" onClick={onCancel}>
          Cancel
        </Button>
        <Button className="common-btn" onClick={onConfirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationDialog;
