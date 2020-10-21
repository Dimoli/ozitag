import React, { useCallback } from "react";

import { menuItems, submenuItems } from "../../../../assets/";

export const InitialLevel = (props) => {
  const {
    items = submenuItems,
    activeMenuItem,
    setActiveMenuItem,
    level = 0,
    children,
  } = props;

  const toggleMenu = useCallback(
    (itemIndex) =>
      +activeMenuItem?.[level * 2] === itemIndex
        ? level
          ? activeMenuItem.slice(0, level * 2 - 1)
          : undefined
        : level
        ? `${
            !Number.isNaN(+activeMenuItem?.[level * 2])
              ? activeMenuItem.slice(0, activeMenuItem.length - 2)
              : activeMenuItem
          }.${itemIndex}`
        : String(itemIndex),
    [activeMenuItem, level]
  );

  const onClickTick = useCallback(
    (e, itemIndex) => {
      setActiveMenuItem(toggleMenu(itemIndex));
      e.target.scrollIntoView();
    },
    [setActiveMenuItem, toggleMenu]
  );

  return items.map((item, itemIndex) => (
    <li key={itemIndex} className="list-group-item">
      <div className="d-flex justify-content-between">
        <span>{level ? item[0] : menuItems[itemIndex]}</span>
        {item.length > 1 ? (
          <span onClick={(e) => onClickTick(e, itemIndex)}>
            {+activeMenuItem?.[level * 2] === itemIndex ? (
              <i className="fa fa-angle-up" aria-hidden="true" />
            ) : (
              <i
                className="fa fa-angle-down pl-3 border-left border-primary"
                aria-hidden="true"
              />
            )}
          </span>
        ) : null}
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

export const Levels = (props) => {
  const { items, activeMenuItem, setActiveMenuItem, levels = 1 } = props;

  return (
    <InitialLevel
      items={items}
      activeMenuItem={activeMenuItem}
      setActiveMenuItem={setActiveMenuItem}
      level={levels}
    >
      {(items) =>
        items.slice(1).map((subitem, index) =>
          Array.isArray(subitem) ? (
            <Levels
              key={index}
              items={subitem}
              activeMenuItem={activeMenuItem}
              setActiveMenuItem={setActiveMenuItem}
              levels={levels + 1}
            />
          ) : (
            <li key={index} className="list-group-item">
              {subitem}
            </li>
          )
        )
      }
    </InitialLevel>
  );
};
