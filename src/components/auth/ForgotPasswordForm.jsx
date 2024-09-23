import Link from "next/link";
import React, { useMemo } from "react";
import { Button, Form } from "react-bootstrap";
import { FormProvider, RHFTextInput } from "../hook-form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PATH_AUTH } from "@/routes/paths";
import { useAuth, useToaster } from "@/hooks";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";

const ForgotPasswordForm = ({ setCode }) => {
  // Form Config
  const defaultValues = useMemo(
    () => ({
      email: "",
    }),
    []
  );

  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        email: yup
          .string()
          .required("Email address is required")
          .email("Enter valid email address")
          .trim("Enter valid email address"),
      })
      .required()
      .strict(true);
  }, []);

  // Hooks
  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });
  const { forgotPasswordOTP } = useAuth();
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
      const { email } = formData;
      const res = await forgotPasswordOTP(email);
      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(TOAST_ALERTS.PASSWORD_CODE_SENT_SUCCESS, TOAST_TYPES.SUCCESS);
        reset();
        setCode(true);
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
      <Form.Group className="form-group">
        <RHFTextInput
          name="email"
          type="text"
          placeholder="Enter your email address"
          inputProps={{
            autoComplete: false,
          }}
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

export default ForgotPasswordForm;
