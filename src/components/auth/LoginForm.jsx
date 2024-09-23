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
import { PATH_AUTH, PATH_BUSINESS } from "@/routes/paths";
import { useAuth, useToaster } from "@/hooks";
import {
  AUTH_PROVIDERS,
  STORAGE_KEYS,
  TOAST_ALERTS,
  TOAST_TYPES,
  USER_TYPES,
} from "@/constants/keywords";
import { useTranslate } from "@/locales";
import { useRouter, useSearchParams } from "next/navigation";
import { decodeData } from "@/utils/jwt";

const LoginForm = ({
  provider = AUTH_PROVIDERS.MOBILE_NUMBER,
  type = "",
  onChangeTab = onChangeTab,
  onSuccessLogin = () => {},
  setUserDetails = () => {},
}) => {
  const { t } = useTranslate();
  const params = useSearchParams();

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
      ...(type === USER_TYPES.VISITOR ? { password: "" } : {}),
    }),
    [provider, type]
  );

  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        ...(provider === AUTH_PROVIDERS.MOBILE_NUMBER
          ? {
              mobile_number: yup
                .string()
                .required(
                  t(
                    "auth.business.login.form.fields.mobile_number.errors.required"
                  )
                )
                .trim(
                  t(
                    "auth.business.login.form.fields.mobile_number.errors.invalid"
                  )
                )
                .matches(
                  /^[\+]?([1-9]\d{0,2})[ .-\/]*(?:\d{7,14})([ .-\/]*|ext\d*)$/,
                  t(
                    "auth.business.login.form.fields.mobile_number.errors.invalid"
                  )
                ),
            }
          : {}),
        ...(provider === AUTH_PROVIDERS.EMAIL
          ? {
              email: yup
                .string()
                .required(
                  t("auth.business.login.form.fields.email.errors.required")
                )
                .email(
                  t("auth.business.login.form.fields.email.errors.invalid")
                )
                .trim(
                  t("auth.business.login.form.fields.email.errors.invalid")
                ),
            }
          : {}),
        ...(type === USER_TYPES.VISITOR
          ? {
              password: yup
                .string()
                .required(
                  t("auth.business.login.form.fields.password.errors.required")
                )
                .trim(
                  t("auth.business.login.form.fields.password.errors.invalid")
                )
                .min(
                  8,
                  t("auth.business.login.form.fields.password.errors.minLength")
                )
                .max(
                  16,
                  t("auth.business.login.form.fields.password.errors.maxLength")
                )
                .matches(
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/,
                  t("auth.business.login.form.fields.password.errors.regex")
                ),
            }
          : {}),
      })
      .strict(true);
  }, [provider, type]);

  // Hooks
  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });
  const { login } = useAuth();
  const { toaster } = useToaster();
  const { replace } = useRouter();

  const router = useRouter();

  // Constants
  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = methods;

  // Methods
  const onSubmitForm = async (formData, event) => {
    try {
      const { mobile_number, email, password } = formData;
      const payLoad = {
        ...(provider === AUTH_PROVIDERS.MOBILE_NUMBER ? { mobile_number } : {}),
        ...(type === USER_TYPES.VISITOR ? { password } : {}),
        ...(provider === AUTH_PROVIDERS.EMAIL ? { email } : {}),
      };
      const res = await login(payLoad, provider, type);

      if (!res.status) {
        if (onChangeTab) {
          onChangeTab(provider);
        }
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        if (type === USER_TYPES.VISITOR) {
          const returnTo = params.get("returnTo")
            ? decodeData(params.get("returnTo"))
            : "";

          router.push(returnTo);

          toaster(TOAST_ALERTS.LOGIN_SUCCESS, TOAST_TYPES.SUCCESS);
        } else {
          toaster(TOAST_ALERTS.OTP_SENT_SUCCESS, TOAST_TYPES.SUCCESS);
          setUserDetails({ ...formData, provider, type });
          onSuccessLogin();
        }
        // reset();
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
              placeholder={t(
                "auth.business.login.form.fields.mobile_number.placeholder"
              )}
            />
          </Form.Group>
        );
      case AUTH_PROVIDERS.EMAIL:
        return (
          <Form.Group className="form-group">
            <RHFTextInput
              name="email"
              placeholder={t(
                "auth.business.login.form.fields.email.placeholder"
              )}
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
      {type === USER_TYPES.VISITOR ? (
        <>
          <Form.Group className="form-group">
            <RHFPasswordInput
              name="password"
              type="password"
              placeholder={t(
                "auth.business.login.form.fields.password.placeholder"
              )}
            />
          </Form.Group>
          <div className="forgot-password">
            <Link href={PATH_AUTH.forgotPassword}>
              {t("auth.business.login.links.forgotPassword")}
            </Link>
          </div>
        </>
      ) : null}

      <Button className="common-btn" disabled={isSubmitting} type="submit">
        {isSubmitting
          ? t("auth.business.login.button.loggingIn")
          : t("auth.business.login.button.login")}
      </Button>
      <div className="last-bottom-text">
        <p>
          {t("auth.business.login.links.registerHelper")}
          <Link
            href={
              type === USER_TYPES.VISITOR
                ? PATH_AUTH.register
                : PATH_BUSINESS.register
            }
          >
            {" "}
            {t("auth.business.login.links.register")}
          </Link>
        </p>
      </div>
    </FormProvider>
  );
};

export default LoginForm;
