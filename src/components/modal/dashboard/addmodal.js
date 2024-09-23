"use client";
import {
  Modal,
  Button,
  Form,
  InputGroup,
  Nav,
  NavDropdown,
} from "react-bootstrap";

const AddModal = ({ onClose }) => {
  return (
    <>
      <Modal
        show={true}
        onHide={onClose}
        animation={false}
        className="aad-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Added Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form.Label htmlFor="inputPassword5">Name</Form.Label>
            <Form.Control
              type="text"
              id="inputPassword5"
              placeholder="Add Name"
              aria-describedby="passwordHelpBlock"
              className="mb-3"
            />
            <Form.Text id="passwordHelpBlock"></Form.Text>
          </div>
          <div>
            <Form.Label htmlFor="inputPassword5">Description</Form.Label>
            <Form.Control
              type="text"
              id="inputPassword5"
              placeholder="Add Description"
              aria-describedby="passwordHelpBlock"
              className="mb-3"
            />
            <Form.Text id="passwordHelpBlock"></Form.Text>
          </div>
          <div>
            <Form.Label htmlFor="inputPassword5">Ingredients</Form.Label>
            <Form.Control
              type="text"
              id="inputPassword5"
              placeholder="Add Ingredients"
              aria-describedby="passwordHelpBlock"
              className="mb-3"
            />
            <Form.Text id="passwordHelpBlock"></Form.Text>
          </div>
          <div>
            <Form.Label htmlFor="inputPassword5">Price</Form.Label>
            <Form.Control
              type="text"
              id="inputPassword5"
              placeholder="Add Price"
              aria-describedby="passwordHelpBlock"
              className="mb-3"
            />
            <Form.Text id="passwordHelpBlock"></Form.Text>
          </div>
          <div className="veg-detail">
            <InputGroup className="mb-3">
              <Form.Label htmlFor="inputPassword5">Veg</Form.Label>
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            </InputGroup>
          </div>
          <div className="upload-collection">
            <Form.Label htmlFor="inputPassword5">Upload Main Image</Form.Label>
            <div className="upload-detail">
              <span>
                <input
                  className="Input_input__lvORT"
                  type="file"
                  id="file-input-1"
                  name="file-input-1"
                  required={true}
                  defaultValue=""
                />
              </span>
              <label className="file-input-label" htmlFor="file-input-1">
                <p>+</p>
              </label>
            </div>
            {/* <figure>
                <img src="/images/gallery1.png" alt="gallery1" />
              </figure> */}
          </div>
          <div className="upload-collection">
            <Form.Label htmlFor="inputPassword5">Upload Other Image</Form.Label>
            <div className="upload-detail">
              <span>
                <input
                  className="Input_input__lvORT"
                  type="file"
                  id="file-input-1"
                  name="file-input-1"
                  required={true}
                  defaultValue=""
                />
              </span>
              <label className="file-input-label" htmlFor="file-input-1">
                <p>+</p>
              </label>
            </div>
            {/* <figure>
                <img src="/images/gallery1.png" alt="gallery1" />
              </figure> */}
          </div>
          <div>
            <NavDropdown title="Category" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Category</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Category</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Category</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="common-btn" onClick={onClose}>
            Cancel
          </Button>
          <Button className="common-btn" onClick={onClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddModal;
