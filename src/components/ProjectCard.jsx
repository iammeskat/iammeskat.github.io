import IconGithubLink from "./icons/IconGuthubLink";
import IconLink from "./icons/IconLink";

const ProjectCard = (props) => {
  const { title, description, tools, img, github, live } = props;
  return (
    <div className="group flex flex-col p-5 bg-[#1a1a1a] rounded-md space-y-4">
      <div className="rounded-md overflow-hidden  !aspect-[3/2] bg-black ">
        <img
          className="group-hover:scale-125 w-full min-h-full transition-all duration-300"
          src={`./images/${img}`}
          alt=""
        />
      </div>
      <div className="grow w-full flex flex-col justify-between  space-y-2">
        <div className="w-full flex flex-col items-center space-y-2">
          <h2 className="text-xl text-center">{title}</h2>
          <div>
            <p className="text-center text-gray-400">{description}</p>
            <p className="text-center text-gray-400">
              <span className="font-medium">Platform/Technology</span>: {tools}
            </p>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          {github && (
            <a
              href={github}
              className="flex items-center justify-between space-x-1 primary-bg rounded-full w-[7rem] p-1.5 hover:w-[8rem] transition-all duration-300"
            >
              <span className="pl-1">Github</span>
              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white">
                <IconGithubLink />
              </div>
            </a>
          )}
          {live && (
            <a
              href={live}
              className="flex items-center justify-between space-x-1 primary-bg rounded-full w-[7rem] p-1.5 hover:w-[8rem] transition-all duration-300"
            >
              <span className="pl-1">Live link</span>
              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white">
                <IconLink />
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
