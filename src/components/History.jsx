const History = (props) => {
  const { time, title, description } = props;
  return (
    <div className="mx-5 border-l pb-10 relative">
      <div className="-ml-5 -mt-5 flex items-center space-x-4">
        <div className="w-10 h-10 rounded-full primary-bg flex items-center justify-center">
          <img className="w-5 h-5" src="./images/academicCap.svg" alt="" />
        </div>
        <div className="rounded-full bg-[#1a1a1a] py-1 px-3">
          <h2>{time}</h2>
        </div>
      </div>
      <div className="ml-9 py-2 space-y-1">
        <h2 className="text-xl">{title}</h2>
        <p className="text-gray-400">{description}</p>
      </div>
      <div className="absolute bottom-0 -ml-2    w-4 h-4 rounded-full primary-bg"></div>
    </div>
  );
};

export default History;
