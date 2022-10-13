import { Link } from "react-scroll";
const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-[#1a1a1a] p-2 text-gray-800m text-slate-400 text-xs">
      <p>© Copyright {new Date().getFullYear()}</p>
      <p>
        Design & developed by{" "}
        <Link
          activeClass="active"
          to="home"
          spy
          className="font-medium primary-color cursor-pointer"
        >
          Meskatul Islam
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
