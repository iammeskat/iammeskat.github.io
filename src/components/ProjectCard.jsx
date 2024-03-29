import { track } from "../service/mixpanel";
import IconGithubLink from "./icons/IconGuthubLink";
import IconLink from "./icons/IconLink";

const ProjectCard = (props) => {
  const { title, description, tools, img, github, live } = props;
  const onTrack = (data) => {
    track("project", data);
  };
  return (
    <div className="group flex flex-col p-5 bg-light dark:bg-[#1a1a1a] rounded-md space-y-4">
      <div className="rounded-md overflow-hidden  !aspect-[3/2] bg-white dark:bg-black ">
        <img
          className="group-hover:scale-125 w-full min-h-full transition-all duration-300"
          src={`./images/${img}`}
          alt=""
        />
      </div>
      <div className="grow w-full flex flex-col justify-between  space-y-2">
        <div className="w-full flex flex-col items-center space-y-2">
          <h2 className="text-lg md:text-xl text-center">{title}</h2>
          <div className="text-sm md:text-base text-slate-600 dark:text-slate-400">
            <p className="text-center ">{description}</p>
            <p className="text-center ">
              <span className="font-medium">Platform/Technology</span>: {tools}
            </p>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          {github && (
            <div
              onClick={() =>
                onTrack({ projectName: title, navigatedTo: "github" })
              }
            >
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between space-x-1 primary-bg dark:dark-primary-bg rounded-full w-[7rem] p-1.5 hover:w-[8rem] transition-all duration-300"
              >
                <span className="pl-1 text-slate-50">Github</span>
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white">
                  <IconGithubLink />
                </div>
              </a>
            </div>
          )}
          {live && (
            <a
              onClick={() =>
                onTrack({ projectName: title, navigatedTo: "live" })
              }
              href={live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between space-x-1 primary-bg dark:dark-primary-bg rounded-full w-[7rem] p-1.5 hover:w-[8rem] transition-all duration-300"
            >
              <span className="pl-1 text-slate-50">Live link</span>
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
