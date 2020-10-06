import React from "react";

import DesktopMenu from "./DesktopMenu/";
import useBurgerMenu from "./useBurgerMenu/";
import DesktopMenuContent from "./DesktopMenu/Content";
import BurgerMenuContent from "./useBurgerMenu/BurgerMenuContent/";

export default (props) => {
  const { activeMenuItem, setActiveMenuItem } = props;
  const { BurgerMenu, isOpenBurger } = useBurgerMenu();

  return (
    <>
      <nav className="navbar fixed-top justify-content-end">
        <DesktopMenu
          activeMenuItem={activeMenuItem}
          setActiveMenuItem={setActiveMenuItem}
        />
        <BurgerMenu />
      </nav>
      <DesktopMenuContent activeMenuItem={activeMenuItem} />
      <BurgerMenuContent
        activeMenuItem={activeMenuItem}
        setActiveMenuItem={setActiveMenuItem}
        isOpenBurger={isOpenBurger}
      />
    </>
  );
};
