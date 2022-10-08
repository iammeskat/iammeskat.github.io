import AboutMe from "../components/AboutMe";
import Skill from "../components/Skill";
import Timeline from "../components/Timeline";

const About = () => {
  return (
    <section id="about" className="py-10 space-y-10 md:space-y-16">
      <AboutMe />
      <Skill />
      <Timeline />
    </section>
  );
};

export default About;
