"use client";

import Footer from "@/components/shared/visitor-dashboard/footer";
import { useAuth } from "@/hooks";
import "../styles/globals.scss";
import Header from "@/components/shared/visitor-dashboard/header";
import { HomeIndex } from "@/styles/index.style";
import {
  ActivitiesSection,
  CategoriesSection,
  GuideSection,
  HeroSection,
  RestaurantSection,
} from "@/components/landing";
import { Loader } from "@/components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  // AOS.init();
  useEffect(() => {
    AOS.init();
  }, [])
  // Hooks
  const { isInitialized } = useAuth();

  // Returns
  if (!isInitialized) return <Loader isFullScreen />;

  return (
    <>
      <Header />
      <HeroSection />
      <HomeIndex>
        <CategoriesSection />
        <RestaurantSection />
        <GuideSection />
        <ActivitiesSection />
      </HomeIndex>
      <Footer />
    </>
  );
}
