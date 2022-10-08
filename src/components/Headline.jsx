const Headline = (props) => {
  const { titlePart1, titlePart2, reverse } = props;
  return (
    <div className="flex justify-center">
      {reverse ? (
        <h2 className="font-bold text-4xl md:text-6xl lg:text-8xl uppercase">
          <span className="text-[crimson]">{titlePart1}</span> {titlePart2}
        </h2>
      ) : (
        <h2 className="font-bold text-4xl md:text-6xl lg:text-8xl uppercase">
          {titlePart1} <span className="text-[crimson]">{titlePart2}</span>
        </h2>
      )}
    </div>
  );
};

export default Headline;
