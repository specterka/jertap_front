"use client";

import Footer from "@/components/shared/visitor-dashboard/footer";
import Header from "@/components/shared/visitor-dashboard/header";
import React from "react";
import "../../styles/globals.scss";
import { useAuth } from "@/hooks";
import { Loader } from "@/components";

const VisitorLayout = ({ children }) => {
  const { isLoading } = useAuth();

  if (isLoading) return <Loader isFullScreen />;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default VisitorLayout;
