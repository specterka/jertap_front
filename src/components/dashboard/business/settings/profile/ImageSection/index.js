import ConfirmationDialog from "@/components/shared/ConfirmationDialog";
import Loader from "@/components/shared/Loader";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { useToaster } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import { axiosDelete, axiosPost } from "@/services/axiosHelper";
import { useParams } from "next/navigation";
import { useMemo, useRef, useState } from "react";
import { Button } from "react-bootstrap";

const ProfileImageSection = ({ user = [] }) => {
  // States
  const [isUploading, setIsUploading] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  // Hooks
  const fileInputRef = useRef(null);
  const { toaster } = useToaster();
  const { businessId } = useParams();

  // Handlers

  const uploadImage = async (selectedImage) => {
    try {
      if (!selectedImage)
        return toaster("Please select an image", TOAST_TYPES.ERROR);
      setIsUploading(true);
      const payload = new FormData();
      payload.append("image", selectedImage);
      const res = await axiosPost(
        API_ROUTER.UPLOAD_BUSINESS_IMAGE(businessId),
        payload,
        "multipart/form-data"
      );
      setIsUploading(false);

      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(
          TOAST_ALERTS.BUSINESS_IMAGE_UPLOAD_SUCCESS,
          TOAST_TYPES.SUCCESS
        );
        fileInputRef.current = null;
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  const handleImageChange = async (e) => {
    try {
      const file = e.target.files[0];
      if (file) {
        const allowedImageTypes = ["image/jpeg", "image/png", "image/gif"];
        if (!allowedImageTypes.includes(file.type)) {
          toaster(
            "Invalid file type. Please choose a valid image file.",
            TOAST_TYPES.ERROR
          );
          return;
        }
        const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
        if (file.size > maxSizeInBytes) {
          toaster(
            "File size exceeds the limit (5MB max). Please choose a smaller file.",
            TOAST_TYPES.ERROR
          );
          return;
        }
        await uploadImage(file);
      } else {
        toaster("Please select a file", TOAST_TYPES.ERROR);
        return;
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  const onDeleteInitiate = (imageId) => {
    setIsConfirmationOpen(imageId);
  };

  const onDeleteConfirm = async () => {
    if (!isConfirmationOpen) return;
    try {
      const res = await axiosDelete(
        API_ROUTER.DELETE_BUSINESS_IMAGE(businessId, isConfirmationOpen)
      );
      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(
          TOAST_ALERTS.BUSINESS_IMAGE_DELETE_SUCCESS,
          TOAST_TYPES.SUCCESS
        );
        setIsConfirmationOpen(false);
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  // Renders
  const renderConfirmation = useMemo(
    () => (
      <ConfirmationDialog
        isOpen={isConfirmationOpen}
        onCancel={() => setIsConfirmationOpen(false)}
        onClose={() => setIsConfirmationOpen(false)}
        modalTitle="Delete Image Confirmation"
        description="Are you sure you want to delete this image?"
        onConfirm={onDeleteConfirm}
      />
    ),
    [onDeleteConfirm, isConfirmationOpen, setIsConfirmationOpen]
  );

  return (
    <div className="img-gallery-block">
      <h3>Profile Picture</h3>
      {isUploading ? (
        <Loader />
      ) : (
        <div className="img-gallery-block-inner">
          {user?.profile_image &&
            [user?.profile_image]?.map((image, index) => (
              <div
                className="img-gallery-block-inner-img position-relative"
                key={index}
              >
                <Button
                  className="btn-danger position-absolute rounded-5 start-100 top-0 translate-middle"
                  onClick={() => onDeleteInitiate(index)}
                >
                  x
                </Button>
                <img src={image} alt={`business-image-${index}`} />
              </div>
            ))}
          {renderConfirmation}
          <div className="img-gallery-block-inner-img plus-icon cursor-pointer-block">
            <label htmlFor="fileInput">
              <p>+</p>
            </label>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
              ref={fileInputRef}
              multiple={false}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileImageSection;
