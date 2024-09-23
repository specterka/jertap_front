"use client";

import { NotificationContext } from "@/contexts/NotificationContext";
import { useContext } from "react";

const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context)
    throw new Error(
      "Notifications context must be use inside NotificationProvider"
    );
  return context;
};

export default useNotifications;
