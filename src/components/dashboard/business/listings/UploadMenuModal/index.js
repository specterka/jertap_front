import { FormProvider } from "@/components/hook-form";
import React, { useCallback, useMemo } from "react";
import * as yup from "yup";
import { Button, Modal, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFFileInput from "@/components/hook-form/RHFFileInput";
import { axiosPost } from "@/services/axiosHelper";
import { API_ROUTER } from "@/services/apiRouter";
import { useToaster } from "@/hooks";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { useParams } from "next/navigation";
import { useTranslate } from "@/locales";
import Link from "next/link";

const UploadMenuModal = ({
  isOpen = false,
  onClose = () => {},
  fetchMenus = () => {},
}) => {
  // Form Config
  const defaultValues = useMemo(
    () => ({
      file: "",
    }),
    []
  );
  const { t } = useTranslate();

  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        file: yup
          .mixed()
          .test(
            "isExist",
            t(
              "dashboard.business.listing.listing_tools.upload_menu.fields.file.errors.test_isExist"
            ),
            (value) => value
          )
          .test(
            "fileSize",
            t(
              "dashboard.business.listing.listing_tools.upload_menu.fields.file.errors.test_fileSize"
            ),
            (value) => value && value[0].size <= 10 * 1024 * 1024
          )
          .test(
            "fileType",
            t(
              "dashboard.business.listing.listing_tools.upload_menu.fields.file.errors.test_fileType"
            ),
            (value) => value && ["text/csv"].includes(value[0].type)
          ),
      })
      .required()
      .strict(true);
  }, []);

  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });
  const { toaster } = useToaster();
  const { businessId } = useParams();

  // Constants
  const {
    handleSubmit,
    formState: { isSubmitting },
    setValue,
    reset,
  } = methods;

  const onCloseModal = () => {
    reset();
    onClose();
  };

  const onFileChange = useCallback(
    (files) => {
      const clonedData = [];
      Array.from(files).map(async (data) => {
        Object.assign(data, { preview: URL.createObjectURL(data) });
        clonedData.push(data);
      });
      setValue("file", clonedData);
    },
    [setValue]
  );

  const onRemoveFile = () => {
    setValue("file", "");
  };

  const onSubmitForm = async ({ file }) => {
    try {
      const payload = new FormData();
      payload.append("data_file", file[0]);
      const res = await axiosPost(
        API_ROUTER.UPLOAD_BUSINESS_MENUS(businessId),
        payload,
        "multipart/form-data"
      );
      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(
          TOAST_ALERTS.BUSINESS_MENUS_UPLOAD_SUCCESS,
          TOAST_TYPES.SUCCESS
        );
        await fetchMenus();
        onCloseModal();
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  const onDownloadFormat = () => {
    try {
      const filePath = "/docs/menu_item_formate.csv";
      const link = document.createElement("a");
      link.href = filePath;
      link.download = "menu_item_formate.csv";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {}
  };

  return (
    <Modal
      show={isOpen}
      onHide={onCloseModal}
      animation
      className="aad-modal upload-menu"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {t(
            "dashboard.business.listing.listing_tools.upload_menu.greetings.heading"
          )}
        </Modal.Title>
      </Modal.Header>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
        <Modal.Body>
          <Link href="" className="common-btn" onClick={onDownloadFormat}>
            {t(
              "dashboard.business.listing.listing_tools.upload_menu.button.download"
            )}
          </Link>
          <RHFFileInput
            name="file"
            multiple={false}
            label="CSV File"
            onChange={onFileChange}
            onRemoveFile={onRemoveFile}
            accept=".csv"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="common-btn"
            onClick={onCloseModal}
            disabled={isSubmitting}
            type="reset"
          >
            {t(
              "dashboard.business.listing.listing_tools.upload_menu.button.cancel"
            )}
          </Button>
          <Button className="common-btn" disabled={isSubmitting} type="submit">
            {isSubmitting ? (
              <Spinner />
            ) : (
              t(
                "dashboard.business.listing.listing_tools.upload_menu.button.isSubmitting"
              )
            )}
          </Button>
        </Modal.Footer>
      </FormProvider>
    </Modal>
  );
};

export default UploadMenuModal;
