import { track } from "../service/mixpanel";

const Filter = (props) => {
  const { filterOptions, filterType, onClickHandler } = props;
  // filterOptions.push("all");
  return (
    <div className="w-full flex flex-wrap justify-center space-x-1 ">
      <button
        onClick={() => {
          onClickHandler("all");
          track("click", {
            type: "skill-button",
            name: "all",
            url: "",
          });
        }}
        className={`bg-light dark:bg-[#1a1a1a] px-6 rounded-full ${
          filterType === "all"
            ? "primary-text dark:dark-primary-text"
            : "hover:primary-text dark:hover:dark-primary-text"
        } !mb-1 capitalize`}
      >
        All
      </button>
      {filterOptions.map((item, indx) => {
        return (
          <button
            key={indx}
            onClick={() => {
              onClickHandler(item);
              track("click", {
                type: "skill-button",
                name: item,
                url: "",
              });
            }}
            className={`bg-light dark:bg-[#1a1a1a] px-6 rounded-full ${
              filterType === item
                ? "primary-text dark:dark-primary-text"
                : "hover:primary-text dark:hover:dark-primary-text"
            } !mb-1 capitalize`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
