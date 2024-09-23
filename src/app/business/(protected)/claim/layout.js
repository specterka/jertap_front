"use client";

import { USER_TYPES } from "@/constants/keywords";
import { useAuth } from "@/hooks";
import { PATH_BUSINESS } from "@/routes/paths";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect } from "react";

const ClaimLayout = ({ children }) => {
  const { user } = useAuth();

  const router = useRouter();

  const check = useCallback(() => {
    if (![USER_TYPES.BUSINESS_OWNER].includes(user?.role)) {
      router.replace(PATH_BUSINESS.business.root);
    }
  }, [user, router]);

  useEffect(() => {
    check();
  }, [check]);

  return <>{children}</>;
};

export default ClaimLayout;
