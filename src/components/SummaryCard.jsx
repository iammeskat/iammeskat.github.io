const SummaryCard = (props) => {
  const { count, tagline } = props;
  return (
    <div className="bg-[#1a1a1a] rounded h-40 p-6 flex flex-col justify-center space-y-2">
      <h2 className="font-bold text-5xl primary-color">{count}</h2>
      <p className="text-slate-400">{tagline}</p>
    </div>
  );
};

export default SummaryCard;
