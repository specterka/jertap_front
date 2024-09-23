"use client";

import { PATH_BUSINESS } from "@/routes/paths";
import { useParams, useRouter } from "next/navigation";

const Business = () => {
  // Hooks
  const { businessId } = useParams();
  const { replace } = useRouter();

  return replace(PATH_BUSINESS.dashboard(businessId));
};

export default Business;
