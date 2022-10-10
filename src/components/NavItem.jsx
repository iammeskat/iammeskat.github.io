import { Link } from "react-scroll";

const NavItem = (props) => {
  const { title, to } = props;
  return (
    <li className="group hover:primary-bg transition-all duration-300 cursor-pointer">
      <Link
        activeClass="active"
        spy
        to={to}
        className="flex items-center space-x-1 py-3 px-3 lg:px-6"
      >
        <props.icon />
        <p className="hidden md:block">{title}</p>
      </Link>
    </li>
  );
};

export default NavItem;
