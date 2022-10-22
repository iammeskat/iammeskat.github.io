import { useState } from "react";
import BtnSeeMore from "../components/BtnSeeMore";
import Headline from "../components/Headline";
import ProjectCard from "../components/ProjectCard";
import { workData } from "../data/workData";

const Portfolio = () => {
  const [count, setCount] = useState(6);
  const getData = () => {
    if (workData.length > count) {
      return workData.slice(0, count);
    } else {
      return workData;
    }
  };
  const seeMore = () => {
    if (workData.length > count) {
      setCount(count + 3);
    }
  };
  return (
    <section id="portfolio">
      <div className="content">
        <Headline titlePart1="my" titlePart2="work" reverse={true} />
        <div className="space-y-4">
          <p className="text-center text-slate-600 dark:text-slate-400">
            [ Due to privacy concerns, my professional projects are not listed.
            ]
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {getData().map((item, indx) => {
              return (
                <ProjectCard
                  key={indx}
                  title={item.title}
                  img={item.img}
                  description={item.description}
                  tools={item.tools}
                  github={item.github}
                  live={item.live}
                />
              );
            })}
          </div>
          <div className="flex justify-center">
            {workData.length > count && <BtnSeeMore onClickHandler={seeMore} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
