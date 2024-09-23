import Link from "next/link";
import React, { useMemo } from "react";
import { Button, Form } from "react-bootstrap";
import {
  FormProvider,
  RHFPasswordInput,
  RHFPhoneInput,
  RHFTextInput,
} from "../hook-form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PATH_AUTH } from "@/routes/paths";
import { useAuth, useToaster } from "@/hooks";
import {
  AUTH_PROVIDERS,
  TOAST_ALERTS,
  TOAST_TYPES,
} from "@/constants/keywords";

const VisitorLoginForm = ({ provider = AUTH_PROVIDERS.MOBILE_NUMBER }) => {
  // Form Config
  const defaultValues = useMemo(
    () => ({
      ...(provider === AUTH_PROVIDERS.MOBILE_NUMBER
        ? {
            mobile_number: "",
          }
        : {}),
      ...(provider === AUTH_PROVIDERS.EMAIL
        ? {
            email: "",
          }
        : {}),
      password: "",
    }),
    [provider]
  );

  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        ...(provider === AUTH_PROVIDERS.MOBILE_NUMBER
          ? {
              mobile_number: yup
                .string()
                .required("Phone number is required")
                .trim("Enter valid phone number")
                .matches(
                  /^[\+]?([1-9]\d{0,2})[ .-\/]*(?:\d{7,14})([ .-\/]*|ext\d*)$/,
                  "Enter valid phone number"
                ),
            }
          : {}),
        ...(provider === AUTH_PROVIDERS.EMAIL
          ? {
              email: yup
                .string()
                .required("Email address is required")
                .email("Enter valid email address")
                .trim("Enter valid email address"),
            }
          : {}),
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
      })
      .required()
      .strict(true);
  }, [provider]);

  // Hooks
  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });
  const { login } = useAuth();
  const { toaster } = useToaster();

  // Constants
  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = methods;

  // Methods
  const onSubmitForm = async (formData) => {
    try {
      const { mobile_number, email, password } = formData;
      const payLoad = {
        password,
        ...(provider === AUTH_PROVIDERS.MOBILE_NUMBER ? { mobile_number } : {}),
        ...(provider === AUTH_PROVIDERS.EMAIL ? { email } : {}),
      };
      const res = await login(payLoad, provider);
      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(TOAST_ALERTS.LOGIN_SUCCESS, TOAST_TYPES.SUCCESS);
        reset();
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  // Render Methods
  const renderInputBasedOnProvider = (provider) => {
    switch (provider) {
      case AUTH_PROVIDERS.MOBILE_NUMBER:
        return (
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
        );
      case AUTH_PROVIDERS.EMAIL:
        return (
          <Form.Group className="form-group">
            <RHFTextInput
              name="email"
              placeholder="Enter your email address"
              inputProps={{
                autoComplete: "false",
              }}
            />
          </Form.Group>
        );
      default:
        return null;
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
      {renderInputBasedOnProvider(provider)}
      <Form.Group className="form-group">
        <RHFPasswordInput
          name="password"
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <div className="forgot-password">
        <Link href={PATH_AUTH.forgotPassword}>Forgot Password ?</Link>
      </div>
      <Button className="common-btn" disabled={isSubmitting} type="submit">
        {isSubmitting ? "Logging in..." : "Log In"}
      </Button>
      <div className="last-bottom-text">
        <p>
          Don’t have an account ?
          <Link href={PATH_AUTH.register}> Register here</Link>
        </p>
      </div>
    </FormProvider>
  );
};

export default VisitorLoginForm;
