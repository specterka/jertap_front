"use client";

import { createContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { axiosGet, axiosPatch } from "@/services/axiosHelper";
import { API_ROUTER } from "@/services/apiRouter";
import { useAuth } from "@/hooks";
import { useParams } from "next/navigation";

export const NotificationContext = createContext({});

export const NotificationProvider = ({ children }) => {
  // States
  const [notifications, setNotifications] = useState([]);
  const [isNotificationFetching, setIsNotificationFetching] = useState(false);

  // Hooks
  const { isAuthenticated } = useAuth();
  const { businessId } = useParams();

  // Effects

  useEffect(() => {
    fetchNotifications();
  }, [isAuthenticated]);

  const unreadNotifications = useMemo(() => {
    if (notifications?.length > 0) {
      return notifications?.filter(({ is_read }) => !is_read);
    } else return [];
  }, [notifications]);

  // Helpers
  const fetchNotifications = async () => {
    if (isAuthenticated && businessId) {
      try {
        setIsNotificationFetching(true);
        const res = await axiosGet(API_ROUTER.GET_NOTIFICATIONS(businessId));
        setIsNotificationFetching(false);
        if (res.status) {
          setNotifications(res.data || []);
        } else setNotifications([]);
      } catch (error) {
        setNotifications([]);
      }
    } else setNotifications([]);
  };

  const toggleNotificationRead = (notiId, isRead) =>
    // eslint-disable-next-line no-async-promise-executor
    new Promise(async (resolve, _) => {
      try {
        const res = await axiosPatch(
          API_ROUTER.MARK_AS_READ_NOTIFICATION(businessId, notiId),
          { is_read: isRead }
        );
        if (!res.status) {
          resolve({ ...res });
        }
        if (res.status) {
          resolve({ ...res });
        }
      } catch (error) {
        resolve({ status: false });
      }
    });

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        fetchNotifications,
        unreadNotifications,
        isNotificationFetching,
        toggleNotificationRead,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

NotificationProvider.propTypes = {
  children: PropTypes.node,
};
