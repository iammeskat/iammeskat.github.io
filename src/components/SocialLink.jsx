const SocialLink = (props) => {
  const { url, icon } = props;
  return (
    <a
      href={url}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1a1a] hover:bg-[crimson] transition-all duration-300"
    >
      <img className="w-5 h-5" src={`/images/${icon}`} alt="" />
    </a>
  );
};

export default SocialLink;
