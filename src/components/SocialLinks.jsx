import SocialLink from "./SocialLink";

const SocialLinks = () => {
  return (
    <div className="flex space-x-2">
      <SocialLink url="https://github.com/iammeskat" icon="github.svg" />
      <SocialLink url="https://linkedin.com/in/meskat" icon="linkedin.svg" />
      <SocialLink url="https://twitter.com/m35k47" icon="twitter.svg" />
      <SocialLink url="https://facebook.com/m35k47" icon="facebook.svg" />
      <SocialLink
        url="https://www.instagram.com/meskatul.islam/"
        icon="instagram.svg"
      />
    </div>
  );
};

export default SocialLinks;
