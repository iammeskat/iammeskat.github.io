import { personalData } from "../data/personalData";
import SummaryCard from "./SummaryCard";

const Summary = () => {
  const { numOfAwards, numOfClients, numOfProjects, yearOfExperience } =
    personalData;
  return (
    <div className="grid grid-cols-2 gap-4">
      <SummaryCard count={yearOfExperience} tagline="Years Of Experience" />
      <SummaryCard count={numOfClients} tagline="Happy Clients" />
      <SummaryCard count={numOfProjects} tagline="Project Done" />
      <SummaryCard count={numOfAwards} tagline="Awards Won" />
    </div>
  );
};

export default Summary;
