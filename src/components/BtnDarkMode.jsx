import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const BtnDarkMode = (props) => {
  return (
    <button
      onClick={props.onClickHandler}
      className="ml-2 hover:bg-slate-50 dark:hover:bg-black p-2 rounded-full"
    >
      {props.isDark ? (
        <div className="w-5 h-5">
          <IconSun />
        </div>
      ) : (
        <div className="w-5 h-5">
          <IconMoon />
        </div>
      )}
    </button>
  );
};

export default BtnDarkMode;
