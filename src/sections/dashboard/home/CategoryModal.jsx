import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useRouter } from "next/navigation";

const CategoryModal = ({ open = false, onClose = null, categories = [] }) => {
  const router = useRouter();
  const handelCategoty = (id) => {
    router.push(`/businesses?category=${encodeURIComponent(id)}`);
  };
  return (
    <Modal show={open} onHide={onClose} animation className="category-modal">
      <Modal.Header closeButton>
        <Modal.Title>All Categories</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          {categories &&
            categories.length > 0 &&
            categories.map((slide, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="jt-food-menu" key={index}>
                  <div
                    className="jt-tital d-flex"
                    style={{
                      gap: 8,
                      alignItems: "center",
                      marginBottom: 12,
                    }}
                  >
                    <figure className="jt-icon">
                      <img
                        src={
                          slide.icon ||
                          `https://eu.ui-avatars.com/api/?name=${slide.name}&size=164`
                        }
                        style={{
                          height: 50,
                          width: 50,
                          borderRadius: "50%",
                        }}
                      />
                    </figure>
                    <h6 onClick={() => handelCategoty(slide?.id)} style={{cursor:"pointer"}}>
                      {slide?.name}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CategoryModal;
