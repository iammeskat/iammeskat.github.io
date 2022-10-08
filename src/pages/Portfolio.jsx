import Headline from "../components/Headline";
import ProjectCard from "../components/ProjectCard";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-10 space-y-16">
      <Headline titlePart1="my" titlePart2="work" reverse={true} />

      <div className="grid grid-cols-3 gap-8">
        <ProjectCard
          title="Project Title Goes Here"
          img="blog2.jpg"
          description="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Commodi, Illum."
        />
        <ProjectCard
          title="Project Title Goes Here"
          img="blog2.jpg"
          description="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Commodi, Illum."
        />
        <ProjectCard
          title="Project Title Goes Here"
          img="blog2.jpg"
          description="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Commodi, Illum."
        />
        <ProjectCard
          title="Project Title Goes Here"
          img="blog2.jpg"
          description="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Commodi, Illum."
        />
      </div>
    </section>
  );
};

export default Portfolio;
