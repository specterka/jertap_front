import PropTypes from "prop-types";
import AuthLayout from "./auth";
import AuthGuard from "@/guards/AuthGuard";
import GuestGuard from "@/guards/GuestGuard";
import BusinessDashboardLayout from "./business-dashboard";
import DashboardLayout from "./dashboard";
import BusinessAdminGuard from "@/guards/BusinessAdminGuard";

const Layout = ({ variant = "dashboard", children }) => {
  if (variant === "auth") {
    return (
      <GuestGuard>
        <AuthLayout>{children}</AuthLayout>
      </GuestGuard>
    );
  }

  if (variant === "business-admin") {
    return (
      <BusinessAdminGuard>
        <BusinessDashboardLayout>{children}</BusinessDashboardLayout>
      </BusinessAdminGuard>
    );
  }
  return (
    <AuthGuard>
      <DashboardLayout>{children}</DashboardLayout>
    </AuthGuard>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["dashboard", "auth", "business-admin"]),
};

export default Layout;
