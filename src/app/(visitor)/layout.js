// "use client";

import VisitorLayout from "@/layouts/visitor";
import React from "react";

// const VisitorLayout = dynamic(() => import("../../layouts/visitor"), {
//   ssr: true,
// });

const Layout = ({ children }) => {
  return <VisitorLayout>{children}</VisitorLayout>;
};

export default Layout;
