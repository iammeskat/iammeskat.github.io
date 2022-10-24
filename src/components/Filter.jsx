const Filter = (props) => {
  const { filterOptions, filterType, onClickHandler } = props;
  return (
    <div className="w-full flex flex-wrap justify-center space-x-1 ">
      {filterOptions.map((item, indx) => {
        return (
          <button
            onClick={() => onClickHandler(item.type)}
            className={`bg-light dark:bg-[#1a1a1a] px-6 rounded-full ${
              filterType === item.type
                ? "primary-text dark:dark-primary-text"
                : "hover:primary-text dark:hover:dark-primary-text"
            } !mb-1`}
          >
            {item.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
