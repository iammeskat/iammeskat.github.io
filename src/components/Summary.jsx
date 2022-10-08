import SummaryCard from "./SummaryCard";

const Summary = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <SummaryCard count="2+" tagline="Years Of Experience" />
      <SummaryCard count="5+" tagline="Happy Clients" />
      <SummaryCard count="10+" tagline="Project Done" />
      <SummaryCard count="3+" tagline="Awards Won" />
    </div>
  );
};

export default Summary;
