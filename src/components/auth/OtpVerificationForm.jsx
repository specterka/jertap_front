import React, { useEffect, useMemo, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FormProvider, RHFTextInput } from "../hook-form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth, useToaster } from "@/hooks";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { useTranslate } from "@/locales";

const OtpVerificationForm = ({
  onVerifySuccess = () => {},
  type = "",
  userDetails = "",
  setUserDetails = () => {},
}) => {
  const { t } = useTranslate();

  // States
  const [timer, setTimer] = useState(60);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [isResending, setIsResending] = useState(false);

  // Form Config
  const defaultValues = useMemo(
    () => ({
      code: "",
    }),
    []
  );

  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        code: yup
          .string()
          .required(t("auth.business.verify.form.fields.code.errors.required"))
          .trim(t("auth.business.verify.form.fields.code.errors.invalid"))
          .min(6, t("auth.business.verify.form.fields.code.errors.minLength"))
          .max(6, t("auth.business.verify.form.fields.code.errors.maxLength"))
          .matches(
            /^[0-9]{6}$/,
            t("auth.business.verify.form.fields.code.errors.regex")
          ),
      })
      .required()
      .strict(true);
  }, [t]);

  useEffect(() => {
    if (!isTimerActive) {
      setIsTimerActive(true);
    }
  }, []);

  // Effects
  useEffect(() => {
    let countdown;

    if (isTimerActive && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      clearInterval(countdown);
      if (timer === 0) {
        setIsTimerActive(false);
      }
    };
  }, [isTimerActive, timer]);

  // Hooks
  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });
  const { verifyCode, resendCode } = useAuth();
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
      const { code } = formData;
      const res = await verifyCode(code, type);
      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        reset();
        toaster(TOAST_ALERTS.OTP_VERIFY_SUCCESS, TOAST_TYPES.SUCCESS);
        onVerifySuccess(res?.restaurant_status);
        setUserDetails(null);
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  const handleResendOTP = async () => {
    try {
      if (userDetails) {
        const { provider, type, ...payLoad } = userDetails;
        setIsResending(true);
        const res = await resendCode(payLoad, provider, type);
        setIsResending(false);

        if (!res.status) {
          return toaster(
            res?.message || TOAST_ALERTS.GENERAL_ERROR,
            TOAST_TYPES.ERROR
          );
        }
        if (res.status) {
          toaster(TOAST_ALERTS.OTP_SENT_SUCCESS, TOAST_TYPES.SUCCESS);
          setIsTimerActive(true);
          setTimer(60);
        }
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  return (
    <>
      <h2>{t("auth.business.verify.form.heading")}</h2>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
        <Form.Group className="form-group">
          <RHFTextInput
            name="code"
            type="text"
            placeholder={t("auth.business.verify.form.fields.code.placeholder")}
            inputProps={{
              autoComplete: false,
            }}
          />
        </Form.Group>
        <div className="">
          {isTimerActive && timer ? (
            <p>{`00:${timer > 9 ? timer : `0${timer}`}`}</p>
          ) : (
            <Button onClick={handleResendOTP} disabled={!!isResending}>
              {t("auth.business.verify.button.resend")}
            </Button>
          )}
        </div>
        <Button className="common-btn" disabled={isSubmitting} type="submit">
          {isSubmitting
            ? t("auth.business.verify.button.verifying")
            : t("auth.business.verify.button.verify")}
        </Button>
      </FormProvider>
    </>
  );
};

export default OtpVerificationForm;
