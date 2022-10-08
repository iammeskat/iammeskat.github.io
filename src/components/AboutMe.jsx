import Headline from "./Headline";
import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";

const AboutMe = () => {
  return (
    <div className="space-y-10">
      <Headline titlePart1="about" titlePart2="me" reverse={false} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <PersonalInfo />
        <Summary />
      </div>
    </div>
  );
};

export default AboutMe;
