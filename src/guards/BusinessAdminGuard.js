"use client";

import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks";
import { PATH_BUSINESS } from "@/routes/paths";
import { USER_TYPES } from "@/constants/keywords";
import { Loader } from "@/components";

BusinessAdminGuard.propTypes = {
  children: PropTypes.node,
};

export default function BusinessAdminGuard({ children }) {
  const { isAuthenticated, isInitialized, user } = useAuth();

  const { pathname, push, replace } = useRouter();

  const [requestedLocation, setRequestedLocation] = useState(null);

  useEffect(() => {
    if (requestedLocation && pathname !== requestedLocation) {
      setRequestedLocation(null);
      push(requestedLocation);
    }
  }, [pathname, push, requestedLocation]);

  if (!isInitialized) {
    return <Loader isFullScreen />;
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return replace(PATH_BUSINESS.login);
  }

  if (isAuthenticated && user && user?.role === USER_TYPES.VISITOR) {
    return replace("/");
  }

  return <>{children}</>;
}
