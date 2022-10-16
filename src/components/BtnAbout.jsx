import { Link } from "react-scroll";

const BtnAbout = () => {
  return (
    <Link
      activeClass="active"
      to="about"
      spy
      className="flex items-center justify-between space-x-1 primary-bg rounded-full w-[9rem] p-1.5 hover:w-[10rem] transition-all duration-300 cursor-pointer"
    >
      <span className="pl-2 text-white">About Me</span>
      <div className="w-9 h-9 rounded-full flex items-center justify-center bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 primary-color"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </Link>
  );
};

export default BtnAbout;
