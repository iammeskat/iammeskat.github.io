const SummaryCard = (props) => {
  const { count, tagline } = props;
  return (
    <div className="bg-light dark:bg-[#1a1a1a] rounded h-40 p-6 flex flex-col justify-center space-y-2 shadow-sm">
      <h2 className="font-bold text-5xl primary-text dark:dark-primary-text">
        {count}
      </h2>
      <p className="text-slate-600 dark:text-slate-400">{tagline}</p>
    </div>
  );
};

export default SummaryCard;
