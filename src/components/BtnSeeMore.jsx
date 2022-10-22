const BtnSeeMore = (props) => {
  return (
    <button
      onClick={props.onClickHandler}
      className="py-1 px-10 bg-light dark:bg-[#1a1a1a] primary-color hover:primary-bg hover:text-white transition-all duration-300 rounded-full"
    >
      Click to see more
    </button>
  );
};

export default BtnSeeMore;
