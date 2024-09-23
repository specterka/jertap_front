import {
  FormProvider,
  RHFPhoneInput,
  RHFSelectInput,
  RHFTextInput,
} from "@/components/hook-form";
import React, { useMemo } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth, useToaster } from "@/hooks";
import { USER_ROLES_ITEMS } from "@/constants/attributes";
import { axiosPatch } from "@/services/axiosHelper";
import { API_ROUTER } from "@/services/apiRouter";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";

const ProfileForm = () => {
  // Hooks
  const { user, update } = useAuth();
  const { toaster } = useToaster();

  // Form Config
  const defaultValues = useMemo(
    () => ({
      mobile_number: user?.mobile_number || "",
      email: user?.email || "",
      username: user?.username || "",
      role: user?.role || "",
      country_code: user?.country_code || "",
    }),
    [user]
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
        role: yup.string().required("Role is required"),
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
      const { username } = formData;
      const res = await axiosPatch(API_ROUTER.UPDATE_USER, { username });
      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(TOAST_ALERTS.USER_PROFILE_UPDATE_SUCCESS, TOAST_TYPES.SUCCESS);
        await update();
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  return (
    <div className="profile-form">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
        <RHFTextInput name="username" label="Username" />
        <RHFPhoneInput
          name="mobile_number"
          label="Phone number"
          onChangeCountryCode={({ dialCode }) =>
            setValue("country_code", dialCode)
          }
        />
        <RHFTextInput name="email" label="Email" disabled={true} />
        <RHFSelectInput name="role" label="Role" disabled={true}>
          {USER_ROLES_ITEMS?.map(({ value, label }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </RHFSelectInput>
        <Button className="common-btn" type="submit" disabled={isSubmitting}>
          Update Profile
        </Button>
        <Button className="common-btn gray-btn" disabled={isSubmitting}>
          Cancel
        </Button>
      </FormProvider>
    </div>
  );
};

export default ProfileForm;
