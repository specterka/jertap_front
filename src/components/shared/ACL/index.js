import React from "react";

const ACL = ({
  accessibleRoles: accessibleRoles = [],
  currentRole = "",
  children,
}) => {
  if (accessibleRoles.includes(currentRole)) return <>{children}</>;
  return null;
};

export default ACL;
