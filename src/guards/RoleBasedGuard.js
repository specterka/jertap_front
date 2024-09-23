"use client";

import PropTypes from "prop-types";
import { useAuth } from "@/hooks";

RoleBasedGuard.propTypes = {
  accessibleRoles: PropTypes.array,
  children: PropTypes.node,
};

export default function RoleBasedGuard({ accessibleRoles, children }) {
  const {
    user: { role },
  } = useAuth();

  if (!accessibleRoles.includes(role)) {
    return <>You do not have permission to access this page</>;
  }

  return <>{children}</>;
}
