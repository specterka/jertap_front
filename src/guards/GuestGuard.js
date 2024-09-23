"use client";

import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import { useEffect } from "react";

import { PATH_BUSINESS, PATH_DASHBOARD } from "../routes/paths";
import { useAuth } from "@/hooks";
import { STORAGE_KEYS, USER_TYPES } from "@/constants/keywords";
import { getData, removeData } from "@/utils/storage";

GuestGuard.propTypes = {
  children: PropTypes.node,
};

export default function GuestGuard({ children }) {
  const { replace } = useRouter();

  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      if (
        [USER_TYPES.BUSINESS_OWNER, USER_TYPES.RESTAURANT_MANAGER].includes(
          user?.role
        )
      ) {
        replace(PATH_BUSINESS.business.root);
      } else {
        const localReturnTo = getData(STORAGE_KEYS.RETURN_TO);
        removeData(STORAGE_KEYS.RETURN_TO);
        replace(localReturnTo || PATH_DASHBOARD.root);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, user]);

  return <>{children}</>;
}
