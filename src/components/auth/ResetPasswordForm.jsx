import Link from "next/link";
import React, { useMemo } from "react";
import { Button, Form } from "react-bootstrap";
import { FormProvider, RHFPasswordInput, RHFTextInput } from "../hook-form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PATH_AUTH } from "@/routes/paths";
import { useAuth, useToaster } from "@/hooks";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { GoogleButton } from "..";
import { Router } from "next/router";

const ResetPasswordForm = ({ setCode }) => {
  // Form Config
  const defaultValues = useMemo(
    () => ({
      code: "",
      password: "",
      confirm_password: "",
    }),
    []
  );

  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        code: yup
          .string()
          .required("Code is required")
          .trim("Enter valid code")
          .min(6, "Code must be  6 characters")
          .max(6, "Code must be 6 characters"),
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
        confirm_password: yup
          .string()
          .required("Confirm Password is required")
          .trim("Enter valid confirm password")
          .min(
            8,
            "Confirm Password is too short - should be at least 8 characters"
          )
          .max(
            16,
            "Confirm Password is too long - should be at most 16 characters"
          )
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/,
            "Confirm Password must contain alphabets, numbers, and special characters"
          )
          .oneOf(
            [yup.ref("password"), null],
            "Confirm Password must be same as password"
          ),
      })
      .required()
      .strict(true);
  }, []);

  // Hooks
  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });
  const { resetPassword } = useAuth();
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
      const { code, password, confirm_password } = formData;

      const res = await resetPassword({ code, password, confirm_password });
      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(TOAST_ALERTS.PASSWORD_RESET_SUCCESS, TOAST_TYPES.SUCCESS);
        reset();
        setCode(false);
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
      <Form.Group className="form-group">
        <RHFTextInput
          name="code"
          type="text"
          placeholder="Enter code"
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
        />
      </Form.Group>
      <Form.Group className="form-group">
        <RHFPasswordInput
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
        />
      </Form.Group>
      <Button className="common-btn" disabled={isSubmitting} type="submit">
        {isSubmitting ? "Submitting..." : "Reset Password"}
      </Button>
      <div className="last-bottom-text">
        <p>
          <Link href={PATH_AUTH.login}> Go to Login</Link>
        </p>
      </div>
    </FormProvider>
  );
};

export default ResetPasswordForm;
