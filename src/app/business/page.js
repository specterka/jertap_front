"use client";

import { PATH_BUSINESS } from "@/routes/paths";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const BusinessPage = () => {
  // Hooks
  const { replace } = useRouter();

  useEffect(() => {
    replace(PATH_BUSINESS.business.root);
  }, []);

  return null;
};

export default BusinessPage;
