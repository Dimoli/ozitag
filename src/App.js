import React, { useState, useCallback } from "react";

import { menuItems, submenuItems, content } from "./assets/";

export default () => {
  const [activeMenuItem, setActiveMenuItem] = useState();
  const [isOpenBurger, setIsOpenBurger] = useState(false);

  const switchBurger = useCallback(() => setIsOpenBurger(!isOpenBurger), [
    setIsOpenBurger,
    isOpenBurger,
  ]);
  console.log(activeMenuItem);

  return (
    <>
      <nav className="navbar fixed-top justify-content-around">
        {menuItems.map((item, index) => (
          <a
            key={index}
            id={index}
            className={`text-decoration-none text-dark ${
              +activeMenuItem === index
                ? "border-bottom border-primary"
                : "border-none"
            }`}
            href="#!"
            onMouseOver={(e) => setActiveMenuItem(e.target.id)}
          >
            {item}
          </a>
        ))}
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
      </nav>
      <div
        className={`${
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
      {/*       <div
        className={`${
          activeMenuItem ? "d-flex" : "d-none"
        } justify-content-around position-absolute bg-light p-1 border border-top-0 border-primary `}
        style={{ width: "90%", overflowWrap: "anywhere", left: "5%" }}
      >
        {submenuItems[activeMenuItem]?.map((items, itemsIndex) => (
          <div key={itemsIndex}>
            {items.map((item, index) =>
              index ? <h6 key={index}>{item}</h6> : <h5 key={index}>{item}</h5>
            )}
          </div>
        ))}
      </div> */}
      <div className="mt-5" onMouseOver={() => setActiveMenuItem(undefined)}>
        <p className="jumbotron">{content}</p>
      </div>
    </>
  );
};

const BurgerItemLevel = (props) => {
  const { items, activeMenuItem, setActiveMenuItem, level, children } = props;

  return items.map((item, itemIndex) => (
    <li key={itemIndex} className="list-group-item">
      <div className="d-flex justify-content-between">
        <span>{level ? item[0] : menuItems[itemIndex]}</span>
        {item.length > 1 ? (
          <span
            onClick={(e) => {
              setActiveMenuItem(
                +activeMenuItem?.[level * 2] === itemIndex
                  ? activeMenuItem.slice(0, activeMenuItem.length - 2)
                  : level
                  ? `${
                      !Number.isNaN(+activeMenuItem?.[level * 2])
                        ? activeMenuItem.slice(0, activeMenuItem.length - 2)
                        : activeMenuItem
                    }.${itemIndex}`
                  : String(itemIndex)
              );
              e.target.scrollIntoView();
            }}
          >
            {+activeMenuItem?.[level * 2] === itemIndex ? (
              <i className="fa fa-angle-up" aria-hidden="true" />
            ) : (
              <i
                className="fa fa-angle-down pl-3 border-left border-primary"
                aria-hidden="true"
              />
            )}
          </span>
        ) : (
          ""
        )}
      </div>
      <ul
        className={`list-group collapse ${
          +activeMenuItem?.[level * 2] === itemIndex ? "show" : ""
        }`}
      >
        {children(item)}
      </ul>
    </li>
  ));
};
