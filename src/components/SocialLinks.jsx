import { personalData } from "../data/personalData";
import { track } from "../service/mixpanel";
import IconFb from "./icons/IconFb";
import IconGithub from "./icons/IconGithub";
import IconIg from "./icons/IconIg";
import IconLinkedin from "./icons/IconLinkedin";
import IconTwitter from "./icons/IconTwitter";
import SocialLink from "./SocialLink";

const SocialLinks = () => {
  const { socials } = personalData;
  const trackOnClick = (data) => {
    track("click", data);
  };
  return (
    <div className="flex space-x-2">
      {socials.map((item, indx) => {
        return (
          <SocialLink
            key={indx}
            onClick={() =>
              trackOnClick({
                type: "social links",
                name: item?.title,
                url: item?.url,
              })
            }
            url={item.url}
            username={item.username}
            icon={() => {
              switch (item.title) {
                case "github":
                  return <IconGithub />;
                case "linkedin":
                  return <IconLinkedin />;
                case "twitter":
                  return <IconTwitter />;
                case "facebook":
                  return <IconFb />;
                case "instagram":
                  return <IconIg />;

                default:
                  break;
              }
            }}
          />
        );
      })}
    </div>
  );
};

export default SocialLinks;
