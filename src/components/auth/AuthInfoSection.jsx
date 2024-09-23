import React from "react";
import { GoogleButton } from "..";
import { WhiteLogo } from "@/assets/svgs";
import { PATH_DASHBOARD } from "@/routes/paths";
import Link from "next/link";

const AuthInfoSection = ({
  mainHeading = "",
  description = "",
  isSocialLogin = false,
}) => {
  return (
    <div className="login-left">
      <Link href={PATH_DASHBOARD.root} className="jt-logo">
        <WhiteLogo />
      </Link>
      <h1>{mainHeading}</h1>
      <p>{description}</p>
      {isSocialLogin ? (
        <div className="social-login-btn">
          <GoogleButton />
        </div>
      ) : null}
    </div>
  );
};

export default AuthInfoSection;
