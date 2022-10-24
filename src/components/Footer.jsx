import { Link } from "react-scroll";
import MyLogo from "./icons/MyLogo";
const Footer = () => {
  return (
    <footer className="flex flex-col mspace-x-2 justify-center items-center bg-light dark:bg-[#1a1a1a] p-2 text-slate-600 dark:text-slate-400 text-xs">
      <div className="w-16 md:w-24 h-auto">
        <MyLogo />
      </div>
      {/* <div className="flex flex-col border-l-2 border-slate-400 pl-2"> */}
      <p>
        © {new Date().getFullYear()}, Design & developed by{" "}
        <Link
          activeClass="active"
          to="home"
          spy
          className="font-medium hover:primary-text dark:hover:dark-primary-text cursor-pointer underline"
        >
          Meskatul Islam
        </Link>
      </p>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
