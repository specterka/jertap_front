import GuestGuard from "@/guards/GuestGuard";
import React from "react";

const AuthLayout = ({ children }) => {
  return <GuestGuard>{children}</GuestGuard>;
};

export default AuthLayout;
