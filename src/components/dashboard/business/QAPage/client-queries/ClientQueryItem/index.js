import React from "react";
import { Button } from "react-bootstrap";
import { useTranslate } from "@/locales";

const ClientQueryItem = ({ query = {}, onReplyInitiate = () => {} }) => {
  const { t } = useTranslate();
  return (
    <div className="list-quaries-block-inner-block" key={query.id}>
      <div className="profile-block-img">
        <div className="profile-block-img-inner">
          <img
            src={query?.raise_by?.profile_image || "/images/avatar-dummy.png"}
            alt={`${query?.raise_by?.username}-image`}
          />
          <h4>{query?.raise_by?.username}</h4>
        </div>
        <Button className="common-btn" onClick={() => onReplyInitiate(query)}>
          {t(
            "dashboard.business.qapage.qapage.client_querie_items.button.reply"
          )}
        </Button>
      </div>
      <p>{query?.question}</p>
    </div>
  );
};

export default ClientQueryItem;
