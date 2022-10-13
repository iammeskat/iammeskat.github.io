const SocialLink = (props) => {
  const { url, icon, username } = props;
  return (
    <a
      href={url}
      target="_blank"
      className="group flex items-center rounded-full bg-[#1a1a1a] hover:primary-bg transition-all duration-300"
      rel="noreferrer"
    >
      <div href={url} className="w-10 h-10 flex items-center justify-center ">
        <img className="w-5 h-5" src={`/images/${icon}`} alt="" />
      </div>
      <div className="w-0 -mt-0.5 overflow-hidden md:group-hover:w-32 transition-all duration-500">
        @{username}
      </div>
    </a>
  );
};

export default SocialLink;
