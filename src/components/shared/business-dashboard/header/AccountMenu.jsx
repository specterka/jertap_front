import { AccountMenuLogoutIcon, AccountMenuProfileIcon } from "@/assets/svgs";
import { USER_TYPES_MAPPER } from "@/constants/keywords";
import { useAuth } from "@/hooks";
import { useTranslate } from "@/locales";
import { PATH_BUSINESS } from "@/routes/paths";
import { getUserName } from "@/utils/helper";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { Dropdown, NavItem, NavLink } from "react-bootstrap";

const AccountMenu = ({ setIsSignOutModalOpen = () => {} }) => {
  // Hooks
  const { user } = useAuth();
  const { push } = useRouter();
  const { businessId } = useParams();
  const { t } = useTranslate();

  return (
    <div className="profile-img">
      <Dropdown as={NavItem}>
        <Dropdown.Toggle as={NavLink}>
          <figure>
            <img
              src={
                user?.profile_image ||
                `https://dummyimage.com/300.png/09f/fff&text=${user?.username}`
              }
              alt="user-image"
            />
          </figure>
          <div>
            <h6>{getUserName(user)}</h6>
            <p>{user?.role ? USER_TYPES_MAPPER[user.role] : ""}</p>
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => push(PATH_BUSINESS.settings.profile(businessId))}
          >
            <AccountMenuProfileIcon />
            <p>{t("dashboard.business.header.account.menu.profile")}</p>
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setIsSignOutModalOpen(true)}>
            <AccountMenuLogoutIcon />
            <p>{t("dashboard.business.header.account.menu.signOut")}</p>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default AccountMenu;
