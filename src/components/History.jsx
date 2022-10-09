const History = (props) => {
  const { time, title, description } = props;
  return (
    <div className="mx-5 pb-10 border-l min-h-[10rem]">
      <div className="-ml-5 -mt-5 flex items-center space-x-4">
        <div className="w-10 h-10 rounded-full bg-[crimson] flex items-center justify-center">
          <img className="w-5 h-5" src="./images/academicCap.svg" alt="" />
        </div>
        <div className="rounded-full bg-[#1a1a1a] py-1 px-3">
          <h2>{time}</h2>
        </div>
      </div>
      <div className="ml-9 py-5 space-y-3">
        <h2 className="text-xl">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="-ml-2 -mb-10  w-4 h-4 rounded-full bg-red-500"></div>
    </div>
  );
};

export default History;
