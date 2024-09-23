"use client";

import BusinessAdminGuard from "@/guards/BusinessAdminGuard";
import React from "react";

const AuthLayout = ({ children }) => {
  return <BusinessAdminGuard>{children}</BusinessAdminGuard>;
};

export default AuthLayout;
