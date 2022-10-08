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
          <div className="flex items-center justify-between space-x-1 bg-[crimson] rounded-full w-[7rem] p-1.5 hover:w-[8rem] transition-all duration-300">
            <span className="pl-1">Github</span>
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3 h-3 text-[crimson]"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-between space-x-1 bg-[crimson] rounded-full w-[7rem] p-1.5 hover:w-[8rem] transition-all duration-300">
            <span className="pl-1">Live link</span>
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3 h-3 text-[crimson]"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
