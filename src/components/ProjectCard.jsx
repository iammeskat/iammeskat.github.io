const ProjectCard = (props) => {
  const { title, description, img, github, live } = props;
  return (
    <div className="group p-5 bg-[#1a1a1a] rounded-md space-y-4">
      <div className="rounded-md overflow-hidden aspect-[3/2]">
        <img
          className="group-hover:scale-125 w-full h-full transition-all duration-300"
          src={`./images/${img}`}
          alt=""
        />
      </div>
      <div className="w-full flex flex-col items-center space-y-2">
        <h2 className="text-xl">{title}</h2>
        <p className="text-center text-gray-400">{description}</p>
        <div className="flex justify-center space-x-4">
          <a
            href={github}
            className="flex items-center justify-between space-x-1 bg-[crimson] rounded-full w-[7rem] p-1.5 hover:w-[8rem] transition-all duration-300"
          >
            <span className="pl-1">Github</span>
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white">
              <img className="w-3 h-3" src="/images/githubRed.svg" alt="" />
            </div>
          </a>
          <a
            href={live}
            className="flex items-center justify-between space-x-1 bg-[crimson] rounded-full w-[7rem] p-1.5 hover:w-[8rem] transition-all duration-300"
          >
            <span className="pl-1">Live link</span>
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white">
              <img className="w-3 h-3" src="/images/link.svg" alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
