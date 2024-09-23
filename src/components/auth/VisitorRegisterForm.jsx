import Link from "next/link";
import React, { useMemo } from "react";
import { Button, Form } from "react-bootstrap";
import {
  FormProvider,
  RHFCheckboxInput,
  RHFPasswordInput,
  RHFPhoneInput,
  RHFTextInput,
} from "../hook-form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PATH_AUTH } from "@/routes/paths";
import { useAuth, useToaster } from "@/hooks";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";

const VisitorRegisterForm = () => {
  // Form Config
  const defaultValues = useMemo(
    () => ({
      mobile_number: "",
      email: "",
      password: "",
      isAgree: false,
    }),
    []
  );

  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        username: yup
          .string()
          .trim("Enter valid username")
          .required("Username is required")
          .min(1, "Username is too short")
          .max(16, "Username is too long - should be at most 16 characters")
          .matches(
            /^[A-Za-z][A-Za-z0-9]*$/,
            "Username must start with a letter, and only contain letters and numbers"
          ),
        mobile_number: yup
          .string()
          .trim("Enter valid phone number")
          .required("Phone number is required")
          .matches(
            /^[\+]?([1-9]\d{0,2})[ .-\/]*(?:\d{7,14})([ .-\/]*|ext\d*)$/,
            "Enter valid phone number"
          )
          .min(6, "Phone number is too short")
          .max(16, "Phone number is too long"),
        email: yup
          .string()
          .required("Email address is required")
          .email("Enter valid email address")
          .trim("Enter valid email address"),
        password: yup
          .string()
          .required("Password is required")
          .trim("Enter valid password")
          .min(8, "Password is too short - should be at least 8 characters")
          .max(16, "Password is too long - should be at most 16 characters")
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/,
            "Password must contain alphabets, numbers, and special characters"
          ),
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
  const { register } = useAuth();
  const { toaster } = useToaster();

  // Constants
  const {
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = methods;

  // Methods
  const onSubmitForm = async (formData) => {
    try {
      const { mobile_number, email, password, username } = formData;
      const payLoad = {
        password,
        mobile_number,
        email,
        username,
      };
      const res = await register(payLoad);
      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(TOAST_ALERTS.VISITOR_SIGN_UP_SUCCESS, TOAST_TYPES.SUCCESS);
        reset();
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
    
      <Form.Group className="form-group">
        <RHFTextInput
          name="username"
          type="text"
          placeholder="Enter your user name"
          inputProps={{
            autoComplete: false,
          }}
        />
      </Form.Group>
      <Form.Group className="form-group">
        <RHFTextInput
          name="email"
          placeholder="Enter your email address"
          inputProps={{
            autoComplete: false,
          }}
        />
      </Form.Group>
      <Form.Group className="form-group">
        <RHFPasswordInput
          name="password"
          type="password"
          placeholder="Password"
          inputProps={{
            autoComplete: "false",
          }}
        />
      </Form.Group>
      <Form.Group className="form-group">
        <RHFPhoneInput
          name="mobile_number"
          type="tel"
          placeholder="Enter your mobile number"
          inputProps={{
            autoComplete: "false",
          }}
        />
      </Form.Group>
      <div className="checkbox-custom">
        <RHFCheckboxInput name="isAgree" />
        <p>
          I agree to the <Link href={""}>Terms and Conditions</Link>
        </p>
      </div>
      {errors?.isAgree ? (
        <Form.Text className="text-danger">
          {errors?.isAgree?.message}
        </Form.Text>
      ) : null}
      <Button className="common-btn" disabled={isSubmitting} type="submit">
        {isSubmitting ? "Registering..." : "Register"}
      </Button>
      <div className="last-bottom-text">
        <p>
          Already have an account ?{" "}
          <Link href={PATH_AUTH.login}> Go to Login</Link>
        </p>
      </div>
    </FormProvider>
  );
};

export default VisitorRegisterForm;
