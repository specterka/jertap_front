import React from "react";
import { NotificationDetailIcon, NotificationIcon } from "@/assets/svgs";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { useNotifications, useToaster } from "@/hooks";
import Link from "next/link";
import { useState } from "react";
import { Badge, Dropdown, NavItem, NavLink } from "react-bootstrap";
import Loader from "../../Loader";
import { useTranslate } from "@/locales";

const Notification = () => {
  // States
  const [isViewAll, setIsViewAll] = useState(false);

  // Hooks
  const {
    unreadNotifications,
    isNotificationFetching,
    fetchNotifications,
    toggleNotificationRead,
  } = useNotifications();

  const { toaster } = useToaster();
  const { t } = useTranslate();

  // Methods
  const onMarkAsRead = async (notiId) => {
    if (!notiId) return toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    try {
      const res = await toggleNotificationRead(notiId, true);
      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(TOAST_ALERTS.NOTIFICATION_MARK_AS_READ, TOAST_TYPES.SUCCESS);
        fetchNotifications();
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  return (
    <div className="notification-menu">
      <Dropdown as={NavItem}>
        <Dropdown.Toggle as={NavLink}>
          <NotificationIcon />{" "}
          {unreadNotifications?.length > 0 ? (
            <Badge bg="danger">{unreadNotifications?.length}</Badge>
          ) : null}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <h6>{t("dashboard.business.header.notification.title")}</h6>
            {unreadNotifications?.length > 0 ? (
              <Link className="common-btn" href={"javascript:void(0)"}>
                {unreadNotifications?.length} unread
              </Link>
            ) : null}
          </Dropdown.Item>
          <div className="noti-drop-block">
            {isNotificationFetching ? (
              <Loader />
            ) : unreadNotifications.length > 0 ? (
              unreadNotifications?.map(
                ({ title, message, id, is_read }, index) => (
                  <Dropdown.Item
                    key={index}
                    className="notification-menu-inner"
                  >
                    <NotificationDetailIcon className="icon-noti" />
                    <div className="nt-detail">
                      <div className="nt-detail-text">
                        <h3>{title}</h3>
                        {!is_read ? (
                          <button onClick={() => onMarkAsRead(id)}>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_1464_159)">
                                <path
                                  d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
                                  fill="#0F4DA2"
                                />
                                <path
                                  d="M6.0006 2.74854C6.8316 2.74854 7.6626 3.06604 8.2986 3.70154C8.60087 4.00314 8.84068 4.3614 9.0043 4.75581C9.16793 5.15022 9.25215 5.57303 9.25215 6.00004C9.25215 6.42704 9.16793 6.84985 9.0043 7.24426C8.84068 7.63867 8.60087 7.99693 8.2986 8.29854C7.99699 8.60081 7.63873 8.84062 7.24432 9.00424C6.84991 9.16787 6.4271 9.25209 6.0001 9.25209C5.5731 9.25209 5.15028 9.16787 4.75588 9.00424C4.36147 8.84062 4.0032 8.60081 3.7016 8.29854C3.39933 7.99693 3.15952 7.63867 2.99589 7.24426C2.83227 6.84985 2.74805 6.42704 2.74805 6.00004C2.74805 5.57303 2.83227 5.15022 2.99589 4.75581C3.15952 4.3614 3.39933 4.00314 3.7016 3.70154C4.00311 3.39904 4.36144 3.15912 4.75598 2.99557C5.15052 2.83203 5.5735 2.74807 6.0006 2.74854ZM7.4806 4.99954C7.43327 5.00407 7.38819 5.02193 7.3506 5.05104L5.5236 6.42104L4.6771 5.57504C4.4936 5.38404 4.1321 5.74504 4.3236 5.92854L5.3236 6.92854C5.36695 6.96953 5.42314 6.99427 5.48265 6.99855C5.54216 7.00284 5.60132 6.9864 5.6501 6.95204L7.6501 5.45204C7.8181 5.32954 7.7146 5.00304 7.5066 5.00004C7.4981 4.9996 7.48909 4.9991 7.4806 4.99954Z"
                                  fill="white"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1464_159">
                                  <rect width="12" height="12" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </button>
                        ) : null}
                      </div>
                      <h4>{message}</h4>
                    </div>
                  </Dropdown.Item>
                )
              )
            ) : (
              <Dropdown.Item>
                <p>
                  {t("dashboard.business.header.notification.emptyMessage")}
                </p>
              </Dropdown.Item>
            )}
          </div>
          {unreadNotifications.length > 5 ? (
            <div className="btn-view-more">
              <Link
                className="common-btn"
                href={"javascript:void(0)"}
                onClick={() => setIsViewAll((prev) => !prev)}
              >
                {isViewAll
                  ? t("dashboard.business.header.notification.button.viewLess")
                  : t("dashboard.business.header.notification.button.viewMore")}
              </Link>
            </div>
          ) : null}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Notification;
