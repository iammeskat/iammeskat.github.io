import IconCog from "./icons/IconCog";

const BtnSetting = (props) => {
  return (
    <button
      onClick={props.onClickHandler}
      className="group ml-1 flex items-center justify-center  hover:primary-bg p-2 rounded-full"
    >
      <IconCog />
    </button>
  );
};

export default BtnSetting;
