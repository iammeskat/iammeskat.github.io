// import { useState } from "react";
import { track } from "mixpanel-browser";
import { navItems } from "../data/navItems";
import BtnDarkMode from "./BtnDarkMode";
// import BtnSetting from "./BtnSetting";
import Logo from "./Logo";
import NavItem from "./NavItem";
// import Settings from "./Settings";
const Header = (props) => {
  // const [showSetting, setShowSetting] = useState(false);
  const { setDarkMode, isDark } = props;
  return (
    <header className="sticky top-0 z-20 backdrop-blur-xl bg-slate-200/70  dark:bg-[#1a1a1a]/80 shadow">
      <nav className="container mx-auto flex justify-between items-center text-lg">
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
          {/* <BtnSetting onClickHandler={() => setShowSetting(!showSetting)} /> */}
          <BtnDarkMode
            onClickHandler={() => {
              setDarkMode();
              track("click", {
                type: "nav-item",
                name: "dark-mode",
                url: "",
              });
            }}
            isDark={isDark}
          />
        </ul>
      </nav>
      {/* {showSetting && (
        <Settings isDark={props.isDark} setDarkMode={props.setDarkMode} />
      )} */}
    </header>
  );
};

export default Header;
