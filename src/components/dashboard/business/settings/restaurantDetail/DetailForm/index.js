import { useToaster } from "@/hooks";
import { useCallback, useMemo } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { API_ROUTER } from "@/services/apiRouter";
import {
  FormProvider,
  RHFBusinessProfileImage,
  RHFPhoneInput,
  RHFTextAreaInput,
  RHFTextInput,
} from "@/components/hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { axiosDelete, axiosPatch } from "@/services/axiosHelper";

const RestaurantDetailForm = ({ restroData1 }) => {
  //Hooks
  const { toaster } = useToaster();

  // Form Config
  const defaultValues = useMemo(
    () => ({
      name: restroData1?.name || "",
      contact_number: restroData1?.phone_number || "",
      business_description: restroData1?.business_description || "",
      business_whatsapp: restroData1?.business_whatsapp || "",
      country_code: restroData1?.country_code || "",
      profile_image: [restroData1?.profile_image] || "",
      business_whatsapp_country_code:
        restroData1?.business_whatsapp_country_code || "",
    }),
    [restroData1]
  );

  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        name: yup
          .string()
          .trim("Enter valid restaurant name")
          .required("Restaurant name is required")
          .min(1, "Username is too short")
          .max(100, "Username is too long - should be at most 100 characters")
          .matches(
            /^[A-Za-z][A-Za-z0-9]*$/,
            "Restaurant name must start with a letter, and only contain letters and numbers"
          ),

        profile_image: yup
          .mixed()
          .test("isExist", "Please select a profile image", (value) => value)
          .test(
            "fileSize",
            "Profile image size is too large",
            (value) => value && value[0].size <= 5 * 1024 * 1024
          )
          .test(
            "fileType",
            "Invalid profile image",
            (value) =>
              value &&
              ["image/jpeg", "image/png", "image/jpg"].includes(value[0].type)
          ),
        contact_number: yup
          .string()
          .trim("Enter valid phone number")
          .required("Phone number is required")
          .matches(
            /^[\+]?([1-9]\d{0,2})[ .-\/]*(?:\d{7,14})([ .-\/]*|ext\d*)$/,
            "Enter valid phone number"
          )
          .min(6, "Phone number is too short")
          .max(16, "Phone number is too long"),

        country_code: yup.string(),
      })
      .required()
      .strict(true);
  }, []);

  // Hooks
  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  // Constants
  const {
    handleSubmit,
    formState: { isSubmitting },
    setValue,
  } = methods;

  const onSubmitForm = async (formData) => {
    try {
      const {
        name,
        contact_number,
        business_description,
        business_whatsapp,
        country_code,
        profile_image,
      } = formData;

      const payload = new FormData();
      payload.append("name", name);
      payload.append("business_description", business_description);
      payload.append("contact_number", contact_number);
      payload.append("business_whatsapp", business_whatsapp);
      payload.append("country_code", country_code);

      if (
        restroData1?.profile_image !== formData?.profile_image?.[0] &&
        formData?.profile_image?.[0] !== undefined
      ) {
        payload.append("profile_image", profile_image[0]);
      }

      if (
        restroData1?.profile_image &&
        !formData?.profile_image?.[0] &&
        restroData1.profile_image.id
      ) {
        // Assuming you have an ID associated with the image
        const imageId = restroData1.profile_image.id;
        const deleteImageEndpoint =
          API_ROUTER.DELETE_RESTRODETAIL_IMAGE(imageId);
        await axiosDelete(deleteImageEndpoint);

        // Remove the image from the formData
        delete formData.profile_image;
      }

      const res = await axiosPatch(
        API_ROUTER.UPDATE_RESTRO_DETAIL,
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
        toaster(TOAST_ALERTS.USER_PROFILE_UPDATE_SUCCESS, TOAST_TYPES.SUCCESS);
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  const onRemoveFile = () => setValue("profile_image", "");

  const onProfileImage = useCallback(
    (files) => {
      const clonedData = [];
      Array.from(files).map(async (data) => {
        Object.assign(data, { preview: URL.createObjectURL(data) });
        clonedData.push(data);
      });
      setValue("profile_image", clonedData);
    },
    [setValue]
  );

  return (
    <div className="profile-form">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
        <RHFTextInput name="name" label="Business Name" />

        <div className="d-block d-md-flex align-items-center">
          <Form.Group
            controlId="exampleForm.ControlInput1"
            className="w-100 me-4"
          >
            <RHFPhoneInput
              name="contact_number"
              label="Contact number"
              onChangeCountryCode={({ dialCode }) =>
                setValue("country_code", dialCode)
              }
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1" className="w-100">
            <RHFPhoneInput
              name="business_whatsapp"
              label="Business Whatsapp number"
              onChangeCountryCode={({ dialCode }) =>
                setValue("business_whatsapp_country_code", dialCode)
              }
            />
          </Form.Group>
        </div>

        <div>
          <RHFBusinessProfileImage
            name="profile_image"
            multiple={false}
            label="Profile Image"
            onChange={onProfileImage}
            onRemoveFile={onRemoveFile}
            accept=".jpg, .jpeg, .png"
          />
        </div>
        <div className="mb-5">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <RHFTextAreaInput
              name="business_description"
              label="Discription"
              placeholder="xxx xxx xxx"
            />
          </Form.Group>
        </div>
        <Button type="submit" className="common-btn" disabled={isSubmitting}>
          Update Profile
        </Button>
      </FormProvider>
    </div>
  );
};

export default RestaurantDetailForm;
