import { ProfileBasicDetailForm } from "@/components";
import { useAuth } from "@/hooks";
import React from "react";

const ProfileBasicSection = () => {
  // Hooks

  const { user } = useAuth();

  return (
    <div className="profile-block-common">
      <div className="profile-block-common-inner">
        <ProfileBasicDetailForm user={user} />
      </div>
    </div>
  );
};

export default ProfileBasicSection;
