import React, { useState, useCallback } from "react";

export default () => {
  const [isOpenBurger, setIsOpenBurger] = useState(false);

  const switchBurger = useCallback(() => setIsOpenBurger(!isOpenBurger), [
    setIsOpenBurger,
    isOpenBurger,
  ]);

  return {
    BurgerMenu: () => (
      <div className="burger-menu">
        {isOpenBurger ? (
          <i
            className="fa fa-times fa-2x text-warning"
            onClick={switchBurger}
            aria-hidden="true"
          />
        ) : (
          <i
            className="fa fa-bars fa-2x"
            onClick={switchBurger}
            aria-hidden="true"
          />
        )}
      </div>
    ),
    isOpenBurger,
  };
};
