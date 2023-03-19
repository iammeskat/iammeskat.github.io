import { track } from "../service/mixpanel";
import Headline from "./Headline";
import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";

const AboutMe = () => {
  return (
    <div
      className="content"
      onClick={() =>
        track("click", {
          type: "button",
          name: "cv download button",
          url: "",
        })
      }
    >
      <Headline titlePart1="about" titlePart2="me" reverse={false} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <PersonalInfo />
        <Summary />
      </div>
    </div>
  );
};

export default AboutMe;
