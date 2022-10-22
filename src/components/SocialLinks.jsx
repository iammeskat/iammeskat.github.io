import IconFb from "./icons/IconFb";
import IconGithub from "./icons/IconGithub";
import IconIg from "./icons/IconIg";
import IconLinkedin from "./icons/IconLinkedin";
import IconTwitter from "./icons/IconTwitter";
import SocialLink from "./SocialLink";

const SocialLinks = () => {
  return (
    <div className="flex space-x-2">
      <SocialLink
        url="https://github.com/iammeskat"
        username="iammeskat"
        icon={() => <IconGithub />}
      />
      <SocialLink
        url="https://linkedin.com/in/meskat"
        username="meskat"
        icon={() => <IconLinkedin />}
      />
      <SocialLink
        url="https://twitter.com/m35k47"
        username="M34K47"
        icon={() => <IconTwitter />}
      />
      <SocialLink
        url="https://facebook.com/m35k47"
        username="M35K47"
        icon={() => <IconFb />}
      />
      <SocialLink
        url="https://www.instagram.com/meskatul.islam/"
        username="meskatul.islam"
        icon={() => <IconIg />}
      />
    </div>
  );
};

export default SocialLinks;
