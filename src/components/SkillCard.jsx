const SkillCard = (props) => {
  const { title, icon } = props;
  return (
    <div className="group flex flex-col justify-center items-center h-44 space-y-2 bg-[#1a1a1a] hover:bg-gray-900 hover:texmt-[crimson] transition-all duration-300 rounded-md shadow-lg p-4">
      <img
        className="h-20 w-auto group-hover:scale-125 transition-all duration-300"
        src={`./images/${icon}`}
        alt=""
      />
      <h2 className="uppercase">{title}</h2>
    </div>
  );
};

export default SkillCard;
