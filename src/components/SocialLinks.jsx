import SocialLink from "./SocialLink";

const SocialLinks = () => {
  return (
    <div className="flex space-x-2">
      <SocialLink
        url="https://github.com/iammeskat"
        username="iammeskat"
        icon="github.svg"
      />
      <SocialLink
        url="https://linkedin.com/in/meskat"
        username="meskat"
        icon="linkedin.svg"
      />
      <SocialLink
        url="https://twitter.com/m35k47"
        username="M34K47"
        icon="twitter.svg"
      />
      <SocialLink
        url="https://facebook.com/m35k47"
        username="M35K47"
        icon="facebook.svg"
      />
      <SocialLink
        url="https://www.instagram.com/meskatul.islam/"
        username="meskatul.islam"
        icon="instagram.svg"
      />
    </div>
  );
};

export default SocialLinks;
