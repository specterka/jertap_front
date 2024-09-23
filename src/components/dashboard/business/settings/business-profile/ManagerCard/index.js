import { useTranslate } from "@/locales";
import React from "react";
import { Button } from "react-bootstrap";

const ManagerCard = ({
  manager,
  onDeleteInitiate = () => {},
  onSetManager = () => {},
  isSet = false,
}) => {
  const { t } = useTranslate();

  return (
    <div key={manager.id} className="basic-details-block-manager">
      <div className="basic-details-block-manager-inner">
        <img
          src={manager?.profile_image || "/images/restro-detail2.png"}
          alt="restro-detail2"
        />
        <div className="basic-details-block-manager-inner-detail">
          <div className="basic-details-block-manager-inner-text">
            <p>
              {t(
                "dashboard.business.settings.businessProfile.tabs.manager.list.manager.name"
              )}{" "}
              : <span> {manager.username}</span>
            </p>
            <p>
              {t(
                "dashboard.business.settings.businessProfile.tabs.manager.list.manager.email"
              )}{" "}
              :<span> {manager.email}</span>
            </p>
            <p>
              {t(
                "dashboard.business.settings.businessProfile.tabs.manager.list.manager.phoneNumber"
              )}{" "}
              : <span>{manager.mobile_number}</span>
            </p>
          </div>
          {isSet ? (
            <Button
              className="btn-primary"
              onClick={() => onSetManager(manager.id)}
            >
              {t(
                "dashboard.business.settings.businessProfile.tabs.manager.list.manager.button.set"
              )}
            </Button>
          ) : (
            <Button
              className="btn-danger"
              onClick={() => onDeleteInitiate(manager.id)}
            >
              {t(
                "dashboard.business.settings.businessProfile.tabs.manager.list.manager.button.remove"
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManagerCard;
