import {
  FaceBookIconCollab,
  WhatsappIconCollab,
  InstaIconCollab,
  YoutubeIconCollab,
  TwitterIconCollab,
} from "@/assets/svgs";

const CollaborationCard = ({ collaborator }) => {
  // Hooks

  const onNavigateExternalLink = (path) => {
    window.open(path, "_blank");
  };
  return (
    <div className="right-side" key={collaborator.id}>
      <div className="promot-detail">
        <div className="user-detail">
          <figure>
            <img src={collaborator.profile_pic} alt="profile pic" />
          </figure>
          <div>
            <h5>{collaborator.full_name}</h5>
          </div>
        </div>
        <div className="social-detail">
          {collaborator?.twitter_profile_link ? (
            <i
              className="social-icon cursor-pointer-block"
              onClick={() =>
                onNavigateExternalLink(collaborator?.twitter_profile_link)
              }
            >
              <TwitterIconCollab />
            </i>
          ) : null}
          {collaborator?.whatsapp ? (
            <i
              className="social-icon cursor-pointer-block"
              onClick={() =>
                onNavigateExternalLink(
                  `https://wa.me/${collaborator?.whatsapp}`
                )
              }
            >
              <WhatsappIconCollab />
            </i>
          ) : null}
          {collaborator?.fb_profile_link ? (
            <i
              className="social-icon cursor-pointer-block"
              onClick={() =>
                onNavigateExternalLink(collaborator?.fb_profile_link)
              }
            >
              <FaceBookIconCollab />
            </i>
          ) : null}
          {collaborator?.insta_profile_link ? (
            <i
              className="social-icon cursor-pointer-block"
              onClick={() =>
                onNavigateExternalLink(collaborator?.insta_profile_link)
              }
            >
              <InstaIconCollab />
            </i>
          ) : null}
          {collaborator?.youtube_channel_link ? (
            <i
              className="social-icon youtube cursor-pointer-block"
              onClick={() =>
                onNavigateExternalLink(collaborator?.youtube_channel_link)
              }
            >
              <YoutubeIconCollab />
            </i>
          ) : null}
        </div>
      </div>
      <p>{collaborator.description}</p>
    </div>
  );
};

export default CollaborationCard;
