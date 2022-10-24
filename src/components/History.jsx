const History = (props) => {
  const { time, title, description } = props;
  return (
    <div className="mx-5 border-l-2 border-slate-400 pb-10 relative">
      <div className="-ml-[1.35rem] -mt-5 flex items-center space-x-4">
        <div className="w-10 h-10 rounded-full primary-bg dark:dark-primary-bg flex items-center justify-center">
          <img className="w-5 h-5" src="./images/academicCap.svg" alt="" />
        </div>
        <div className="rounded-full bg-light dark:bg-[#1a1a1a] py-1 px-3">
          <h2>{time}</h2>
        </div>
      </div>
      <div className="ml-9 py-2 space-y-1">
        <h2 className="text-lg md:text-xl">{title}</h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
          {description}
        </p>
      </div>
      <div className="absolute bottom-0 -ml-[0.6rem]    w-4 h-4 rounded-full primary-bg dark:dark-primary-bg"></div>
    </div>
  );
};

export default History;
