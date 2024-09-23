import React from "react";
import { useAuth, useToaster } from "@/hooks";
import {
  AUTH_PROVIDERS,
  TOAST_ALERTS,
  TOAST_TYPES,
  USER_TYPES,
} from "@/constants/keywords";
import { GoogleLogin } from "@react-oauth/google";

const GoogleButton = () => {
  // Hooks
  const { login } = useAuth();
  const { toaster } = useToaster();

  // Methods
  const onGoogleLoginSuccess = async ({ credential }) => {
    try {
      const res = await login(
        { auth_token: credential },
        AUTH_PROVIDERS.GOOGLE,
        USER_TYPES.VISITOR
      );
      if (!res.status) {
   
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(TOAST_ALERTS.LOGIN_SUCCESS, TOAST_TYPES.SUCCESS);
      }
    } catch (error) {
      
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  const onGoogleLoginError = async () => {};

  // return (
  //   <button
  //     className="social-login-button google-btn"
  //     onClick={onLoginWithGoogle}
  //   >
  //     <span className="icon-button">
  //       <GoogleLoginIcon />
  //     </span>
  //     <span className="text-button">Google</span>
  //   </button>
  // );

  return (
    <GoogleLogin
      onSuccess={onGoogleLoginSuccess}
      onError={onGoogleLoginError}
    />
  );
};

export default GoogleButton;
