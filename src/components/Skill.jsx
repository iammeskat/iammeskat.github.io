import { skillsData } from "../data/skillsData";
import Headline from "./Headline";
import SkillCard from "./SkillCard";

const Skill = () => {
  return (
    <div className="space-y-10">
      <Headline titlePart1="my" titlePart2="skills" reverse={true} />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skillsData.map((skill, indx) => {
          return <SkillCard key={indx} title={skill.title} icon={skill.icon} />;
        })}
      </div>
    </div>
  );
};

export default Skill;
