/* eslint-disable import/no-anonymous-default-export */
import BusinessDashboardLayout from "@/layouts/business-dashboard";
import React from "react";

export default function ({ children }) {
  return <BusinessDashboardLayout>{children}</BusinessDashboardLayout>;
}
