import Link from "next/link";
import React, { useMemo } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import {
  FormProvider,
  RHFCheckboxInput,
  RHFPhoneInput,
  RHFSelectInput,
  RHFTextInput,
} from "../../hook-form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToaster } from "@/hooks";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { BUSINESS_ITEMS } from "@/constants/attributes";
import { axiosPost } from "@/services/axiosHelper";
import { API_ROUTER } from "@/services/apiRouter";
import { useRouter } from "next/navigation";
import { PATH_BUSINESS } from "@/routes/paths";

const BusinessDetailsForm = () => {
  // Form Config
  const defaultValues = useMemo(
    () => ({
      name: "",
      phone_number: "",
      type: "",
      address: "",
      location: "",
      city: "",
      state: "",
      zipcode: "",
      isAgree: false,
    }),
    []
  );

  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        name: yup
          .string()
          .trim("Enter valid Name")
          .required("Name is required")
          .min(1, "Name is too short")
          .max(100, "Name is too long - should be at most 100 characters")
          .matches(/^[A-Za-z0-9&'.,\- ]{2,}$/, "Name only contain letters"),
        phone_number: yup
          .string()
          .trim("Enter valid phone number")
          .required("Phone number is required")
          .matches(/^(?:\+|\d)[\d-]*\d$/, "Enter valid phone number")
          .min(6, "Phone number is too short")
          .max(16, "Phone number is too long"),
        type: yup.string().required("Type is required"),
        address: yup
          .string()
          .required("Address is required")
          .trim("Enter valid Address")
          .min(4, "Address is too short - should be at least 4 characters")
          .max(200, "Address is too long - should be at most 200 characters"),
        location: yup
          .string()
          .required("Location is required")
          .trim("Enter valid Location")
          .min(4, "Location is too short - should be at least 4 characters")
          .max(200, "Location is too long - should be at most 200 characters"),
        city: yup
          .string()
          .required("City is required")
          .trim("Enter valid City")
          .min(4, "City is too short - should be at least 4 characters")
          .max(200, "City is too long - should be at most 200 characters"),
        state: yup
          .string()
          .required("State is required")
          .trim("Enter valid state")
          .min(4, "State is too short - should be at least 4 characters")
          .max(200, "State is too long - should be at most 200 characters"),
        zipcode: yup
          .string()
          .required("Code is required")
          .trim("Enter valid code")
          .matches(/^[0-9]{6}$/, "Code must be a number"),
        isAgree: yup
          .boolean()
          .oneOf([true], "You must accept the terms and conditions")
          .required("You must accept the terms and conditions"),
      })
      .required()
      .strict(true);
  }, []);

  // Hooks
  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });
  const { toaster } = useToaster();
  const { replace } = useRouter();

  // Constants
  const {
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = methods;

  // Methods
  const onSubmitForm = async ({ isAgree, ...formData }) => {
    try {
      const res = await axiosPost(API_ROUTER.CREATE_BUSINESS, { ...formData });
      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(TOAST_ALERTS.BUSINESS_CREATE_SUCCESS, TOAST_TYPES.SUCCESS);
        reset();
        replace(PATH_BUSINESS.business.root);
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
      {errors?.isAgree ? (
        <Form.Text className="text-danger">
          {errors?.isAgree?.message}
        </Form.Text>
      ) : null}
      <Row>
        <Col md={6}>
          <div className="add-company">
            <Form.Group className="form-group">
              <RHFTextInput
                name="name"
                type="text"
                placeholder="Enter your business name"
                inputProps={{
                  autoComplete: false,
                }}
              />
            </Form.Group>
            <Form.Group className="form-group">
              <RHFSelectInput name="type">
                <option value="">Type</option>
                {BUSINESS_ITEMS.map(({ label, value }) => (
                  <option value={value} key={value}>
                    {label}
                  </option>
                ))}
              </RHFSelectInput>
            </Form.Group>
            <Form.Group className="form-group">
              <RHFTextInput
                name="location"
                type="text"
                placeholder="Enter your location"
                inputProps={{
                  autoComplete: false,
                }}
              />
            </Form.Group>
            <Form.Group className="form-group">
              <RHFTextInput
                name="state"
                type="text"
                placeholder="Enter your state"
                inputProps={{
                  autoComplete: false,
                }}
              />
            </Form.Group>
          </div>
        </Col>
        <Col md={6}>
          <div className="add-company">
            <Form.Group className="form-group">
              <RHFPhoneInput
                name="phone_number"
                type="tel"
                placeholder="Business phone number"
                inputProps={{
                  autoComplete: "false",
                }}
              />
            </Form.Group>
            <Form.Group className="form-group">
              <RHFTextInput
                name="address"
                type="text"
                placeholder="Enter your address"
                inputProps={{
                  autoComplete: false,
                }}
              />
            </Form.Group>
            <Form.Group className="form-group">
              <RHFTextInput
                name="city"
                type="text"
                placeholder="Enter your city"
                inputProps={{
                  autoComplete: false,
                }}
              />
            </Form.Group>
            <Form.Group className="form-group">
              <RHFTextInput
                name="zipcode"
                type="text"
                placeholder="Enter zip code"
                inputProps={{
                  autoComplete: false,
                }}
              />
            </Form.Group>
          </div>
        </Col>
      </Row>
      <div className="checkbox-custom">
        <RHFCheckboxInput name="isAgree" />
        <p>
          I agree to the <Link href={""}>Terms and Conditions</Link>
        </p>
      </div>

      <Button className="common-btn" disabled={isSubmitting} type="submit">
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </FormProvider>
  );
};

export default BusinessDetailsForm;
