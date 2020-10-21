import React from "react";

import { InitialLevel, Levels } from "./ItemLevel";

export default (props) => {
  const { activeMenuItem, setActiveMenuItem, isOpenBurger } = props;

  return (
    <div
      className={`burger-menu-content ${
        isOpenBurger ? "d-block" : "d-none"
      } w-100 position-absolute bg-light border-top border-primary`}
    >
      <ul className="list-group">
        <InitialLevel
          activeMenuItem={activeMenuItem}
          setActiveMenuItem={setActiveMenuItem}
        >
          {(items) => (
            <Levels
              items={items}
              activeMenuItem={activeMenuItem}
              setActiveMenuItem={setActiveMenuItem}
            />
          )}
        </InitialLevel>
      </ul>
    </div>
  );
};
