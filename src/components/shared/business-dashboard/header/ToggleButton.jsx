import { BusinessHumburgerIcon } from "@/assets/svgs";
import Link from "next/link";
import React from "react";

const ToggleButton = ({ onToggleNavigation }) => {
  return (
    <Link
      className="sb-icon"
      href={"javascript:void(0)"}
      onClick={() => onToggleNavigation()}
    >
      <BusinessHumburgerIcon />
    </Link>
  );
};

export default ToggleButton;
