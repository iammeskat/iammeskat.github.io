import { useState } from "react";
import { navItems } from "../data/navItems";
import BtnSetting from "./BtnSetting";
import Logo from "./Logo";
import NavItem from "./NavItem";
import Settings from "./Settings";
const Header = () => {
  const [showSetting, setShowSetting] = useState(false);
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
          <BtnSetting onClickHandler={() => setShowSetting(!showSetting)} />
        </ul>
      </nav>
      {showSetting && <Settings />}
    </header>
  );
};

export default Header;
