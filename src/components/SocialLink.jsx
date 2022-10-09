const SocialLink = (props) => {
  const { url, icon, username } = props;
  return (
    <a
      href={url}
      className="group flex items-center rounded-full bg-[#1a1a1a] hover:bg-[crimson] transition-all duration-300"
    >
      <div href={url} className="w-10 h-10 flex items-center justify-center ">
        <img className="w-5 h-5" src={`/images/${icon}`} alt="" />
      </div>
      <div className="w-0 -mt-0.5 overflow-hidden group-hover:w-32 transition-all duration-500">
        @{username}
      </div>
    </a>
  );
};

export default SocialLink;
