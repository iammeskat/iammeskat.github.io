import { useState } from "react";

const Settings = (props) => {
  const [theme, setTheme] = useState({
    color: "text-green-500",
    bg: "bg-green-500",
  });
  const changeTheme = (id) => {
    let tempTheme = { ...theme };
    switch (id) {
      case 1:
        tempTheme = {
          color: "text-[crimson]",
          bg: "text-[crimson]",
        };
        break;
      case 2:
        tempTheme = {
          color: "text-blue-500",
          bg: "text-blue-500",
        };
        break;
      case 3:
        tempTheme = {
          color: "text-yellow-500",
          bg: "text-yellow-500",
        };
        break;
      case 4:
        tempTheme = {
          color: "text-purple-500",
          bg: "text-purple-500",
        };
        break;
      case 5:
        tempTheme = {
          color: "text-fuchsia-500",
          bg: "text-fuchsia-500",
        };
        break;
      case 6:
        tempTheme = {
          color: "text-pink-500",
          bg: "text-pink-500",
        };
        break;
      case 7:
        tempTheme = {
          color: "text-sky-500",
          bg: "text-sky-500",
        };
        break;
      case 8:
        tempTheme = {
          color: "text-teal-500",
          bg: "text-teal-500",
        };
        break;

      default:
        tempTheme = {
          color: "text-green-500",
          bg: "text-green-500",
        };
        break;
    }
    setTheme(tempTheme);
  };
  const setDarkMode = () => {};
  return (
    <div className="container mx-auto flex justify-end">
      <div className="absolute  w-60 rounded overflow-hidden bg-light dark:bg-[#1a1a1a] mt-1 p-2 shadow">
        <div className="flex items-center justify-center  font-medium space-x-1 bg-blackm mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-5 h-5 ${theme.color}`}
          >
            <path
              fillRule="evenodd"
              d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 11-9 0V4.125zm4.5 14.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
              clipRule="evenodd"
            />
            <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257zM12.738 17.625l6.474-6.474a1.875 1.875 0 000-2.651L15.5 4.787a1.875 1.875 0 00-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375z" />
          </svg>
          <h2>Themes</h2>
        </div>
        <div className="flex justify-between items-center bg-slate-100 dark:bg-[#0d0d0d] px-2 py-0.5 rounded-sm text-sm font-medium mb-2">
          <label htmlFor="dark-mode ">Dark Mode:</label>
          <button
            className={`flex ${
              props.isDark ? "justify-end" : "justify-start"
            } items-center w-14 h-6 px-1 rounded-full dark:bg-light bg-black transition-all duration-300`}
            onClick={props.setDarkMode}
            type="checkbox"
            name=""
            id="dark-mode"
          >
            <div className="w-4 h-4 primary-bg dark:dark-primary-bg rounded-full transition-all duration-300"></div>
          </button>
        </div>
        <div className="bg-slate-100 dark:bg-[#0d0d0d] px-2 py-0.5 rounded-sm text-sm font-medium">
          <p className="mb-2">Colors:</p>
          <div className="grid grid-cols-6 gap-2 pb-2">
            <button
              onClick={() => changeTheme(0)}
              className="w-full aspect-square bg-green-500 rounded-full"
            ></button>
            <button
              onClick={() => changeTheme(1)}
              className="w-full aspect-square bg-[crimson] rounded-full"
            ></button>
            <button
              onClick={() => changeTheme(2)}
              className="w-full aspect-square bg-blue-500 rounded-full"
            ></button>
            <button
              onClick={() => changeTheme(3)}
              className="w-full aspect-square bg-yellow-500 rounded-full"
            ></button>
            <button
              onClick={() => changeTheme(4)}
              className="w-full aspect-square bg-purple-500 rounded-full"
            ></button>
            <button
              onClick={() => changeTheme(5)}
              className="w-full aspect-square bg-fuchsia-500 rounded-full"
            ></button>
            <button
              onClick={() => changeTheme(6)}
              className="w-full aspect-square bg-pink-600 rounded-full"
            ></button>
            <button
              onClick={() => changeTheme(7)}
              className="w-full aspect-square bg-sky-500 rounded-full"
            ></button>
            <button
              onClick={() => changeTheme(8)}
              className="w-full aspect-square bg-teal-500 rounded-full"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
