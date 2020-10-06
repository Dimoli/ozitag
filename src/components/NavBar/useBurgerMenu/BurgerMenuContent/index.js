import React from "react";

import { submenuItems } from "../../../../assets/";

import BurgerItemLevel from "./ItemLevel";

export default (props) => {
  const { activeMenuItem, setActiveMenuItem, isOpenBurger } = props;

  return (
    <div
      className={`burger-menu-content ${
        isOpenBurger ? "d-block" : "d-none"
      } w-100 position-absolute bg-light border-top border-primary`}
    >
      <ul className="list-group">
        <BurgerItemLevel
          items={submenuItems}
          activeMenuItem={activeMenuItem}
          setActiveMenuItem={setActiveMenuItem}
          level={0}
        >
          {(items) => (
            <BurgerItemLevel
              items={items}
              activeMenuItem={activeMenuItem}
              setActiveMenuItem={setActiveMenuItem}
              level={1}
            >
              {(item) =>
                item.slice(1).map((subitem, index) => (
                  <li key={index} className="list-group-item">
                    {subitem}
                  </li>
                ))
              }
            </BurgerItemLevel>
          )}
        </BurgerItemLevel>
      </ul>
    </div>
  );
};
