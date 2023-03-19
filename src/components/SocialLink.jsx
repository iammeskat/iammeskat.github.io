const SocialLink = (props) => {
  const { url, icon, username, onClick } = props;
  return (
    <a
      onClick={onClick}
      href={url}
      target="_blank"
      className="group flex items-center rounded-full bg-slate-300 dark:bg-[#1a1a1a] hover:primary-bg dark:dark-primary-bg dark:hover:primary-bg hover:dark:dark-primary-bg transition-all duration-300"
      rel="noreferrer"
    >
      <div href={url} className="w-10 h-10 flex items-center justify-center ">
        {/* <img className="w-5 h-5" src={`/images/${icon}`} alt="" /> */}
        <div className="w-5 h-5 group-hover:text-slate-50 transition-all duration-300">
          {icon()}
        </div>
      </div>
      <div className="w-0 -mt-0.5 overflow-hidden md:group-hover:w-32 transition-all duration-500 text-slate-50">
        @{username}
      </div>
    </a>
  );
};

export default SocialLink;
