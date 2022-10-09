import Headline from "../components/Headline";
import ProjectCard from "../components/ProjectCard";
import { workData } from "../data/workData";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="content">
        <Headline titlePart1="my" titlePart2="work" reverse={true} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {workData.map((item, indx) => {
            return (
              <ProjectCard
                key={indx}
                title={item.title}
                img={item.img}
                description={item.description}
                github={item.github}
                live={item.live}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
