import { navItems } from "../data/navItems";
import Logo from "./Logo";
import NavItem from "./NavItem";
const Header = () => {
  return (
    <header className="sticky top-0 z-20 bg-[#1a1a1a] shadow">
      <nav className="container mx-auto flex justify-between items-center text-white text-lg">
        <Logo />
        <ul className="flex items-center  uppercasem ">
          {navItems.map((item, indx) => {
            return (
              <NavItem
                key={indx}
                title={item.title}
                to={item.to}
                icon={item.icon}
              />
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
