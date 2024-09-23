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
import { PATH_AUTH, PATH_BUSINESS, PATH_PAGE } from "@/routes/paths";
import { useAuth, useToaster } from "@/hooks";
import {
  AUTH_PROVIDERS,
  TOAST_ALERTS,
  TOAST_TYPES,
  USER_TYPES,
} from "@/constants/keywords";
import { useTranslate } from "@/locales";

const RegisterForm = ({
  onSuccessRegister = () => {},
  type = USER_TYPES.VISITOR,
  setUserDetails = () => {},
  user = {},
}) => {
  const { t } = useTranslate();

  // Form Config
  const defaultValues = useMemo(
    () => ({
      mobile_number: "",
      email: user?.email ? user.email : "",
      ...(type === USER_TYPES.VISITOR
        ? {
            password: "",
          }
        : {}),
      isAgree: false,
      username: "",
    }),
    [type, user]
  );

  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        username: yup
          .string()
          .trim(t("auth.business.register.form.fields.username.errors.invalid"))
          .required(
            t("auth.business.register.form.fields.username.errors.required")
          )
          .min(
            1,
            t("auth.business.register.form.fields.username.errors.minLength")
          )
          .max(
            16,
            t("auth.business.register.form.fields.username.errors.maxLength")
          )
          .matches(
            /^[A-Za-z][A-Za-z0-9]*$/,
            t("auth.business.register.form.fields.username.errors.regex")
          ),
        mobile_number: yup
          .string()
          .required(
            t(
              "auth.business.register.form.fields.mobile_number.errors.required"
            )
          )
          .trim(
            t("auth.business.register.form.fields.mobile_number.errors.invalid")
          )
          .matches(
            /^[\+]?([1-9]\d{0,2})[ .-\/]*(?:\d{7,14})([ .-\/]*|ext\d*)$/,
            t("auth.business.register.form.fields.mobile_number.errors.invalid")
          ),
        email: yup
          .string()
          .required(
            t("auth.business.register.form.fields.email.errors.required")
          )
          .email(t("auth.business.register.form.fields.email.errors.invalid"))
          .trim(t("auth.business.register.form.fields.email.errors.invalid")),
        ...(type === USER_TYPES.VISITOR
          ? {
              password: yup
                .string()
                .required(
                  t(
                    "auth.business.register.form.fields.password.errors.required"
                  )
                )
                .trim(
                  t(
                    "auth.business.register.form.fields.password.errors.invalid"
                  )
                )
                .min(
                  8,
                  t(
                    "auth.business.register.form.fields.password.errors.minLength"
                  )
                )
                .max(
                  16,
                  t(
                    "auth.business.register.form.fields.password.errors.maxLength"
                  )
                )
                .matches(
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/,
                  t("auth.business.register.form.fields.password.errors.regex")
                ),
            }
          : {}),

        isAgree: yup
          .boolean()
          .oneOf(
            [true],
            t("auth.business.register.form.fields.isAgree.errors.required")
          )
          .required(
            t("auth.business.register.form.fields.isAgree.errors.required")
          ),
      })
      .required()
      .strict(true);
  }, [t]);

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
        ...(type === USER_TYPES.VISITOR
          ? {
              password,
            }
          : {}),
        mobile_number,
        email,
        username,
      };
      const res = await register(payLoad, type);
      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        if (USER_TYPES.VISITOR === type) {
          toaster(TOAST_ALERTS.VISITOR_SIGN_UP_SUCCESS, TOAST_TYPES.SUCCESS);
        } else {
          toaster(TOAST_ALERTS.PASSWORD_CODE_SENT_SUCCESS, TOAST_TYPES.SUCCESS);
        }
        reset();
        onSuccessRegister();
        setUserDetails({
          ...formData,
          type,
          provider: AUTH_PROVIDERS.MOBILE_NUMBER,
        });
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };
  return (
    <>
      <h2>{t("auth.business.register.form.heading")}</h2>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
        <Form.Group className="form-group">
          <RHFTextInput
            name="username"
            type="text"
            placeholder={t(
              "auth.business.register.form.fields.username.placeholder"
            )}
            inputProps={{
              autoComplete: false,
            }}
          />
        </Form.Group>
        <Form.Group className="form-group">
          <RHFTextInput
            name="email"
            placeholder={t(
              "auth.business.register.form.fields.email.placeholder"
            )}
            inputProps={{
              autoComplete: "false",
            }}
            disabled={!!user?.email}
          />
        </Form.Group>
        {type === USER_TYPES.VISITOR ? (
          <Form.Group className="form-group">
            <RHFPasswordInput
              name="password"
              type="password"
              placeholder={t(
                "auth.business.register.form.fields.password.placeholder"
              )}
              inputProps={{
                autoComplete: "false",
              }}
            />
          </Form.Group>
        ) : null}
        <Form.Group className="form-group">
          <RHFPhoneInput
            name="mobile_number"
            type="tel"
            placeholder={t(
              "auth.business.register.form.fields.mobile_number.placeholder"
            )}
            inputProps={{
              autoComplete: "false",
            }}
          />
        </Form.Group>
        <div className="checkbox-custom mb-2">
          <RHFCheckboxInput name="isAgree" />
          <p>
            {t("auth.business.register.form.fields.isAgree.placeholder1")}{" "}
            <Link href={PATH_PAGE.termsAndConditions}>
              {t("auth.business.register.form.fields.isAgree.placeholder2")}
            </Link>
          </p>
        </div>
        {errors?.isAgree ? (
          <Form.Text className="text-danger mt-0">
            {errors?.isAgree?.message}
          </Form.Text>
        ) : null}
        <Button className="common-btn mt-6" disabled={isSubmitting} type="submit" >
          {isSubmitting
            ? t("auth.business.register.button.registering")
            : t("auth.business.register.button.register")}
        </Button>

        <div className="last-bottom-text">
          <p>
            {t("auth.business.register.links.loginHelper")}{" "}
            <Link
              href={
                USER_TYPES.BUSINESS_OWNER === type
                  ? PATH_BUSINESS.login
                  : PATH_AUTH.login
              }
            >
              {" "}
              {t("auth.business.register.links.login")}
            </Link>
          </p>
        </div>
      </FormProvider>
    </>
  );
};

export default RegisterForm;
