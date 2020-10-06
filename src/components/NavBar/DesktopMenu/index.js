import React from "react";

import { menuItems } from "../../../assets/";

export default (props) => {
  const { activeMenuItem, setActiveMenuItem } = props;

  return (
    <div className="d-none desktop-menu pr-5 m-auto">
      {menuItems.map((item, index) => (
        <a
          key={index}
          id={index}
          className={`text-decoration-none text-dark px-4 ${
            +activeMenuItem === index
              ? "pb-3 border-bottom border-warning"
              : "border-none"
          }`}
          href="#!"
          onMouseOver={(e) => setActiveMenuItem(e.target.id)}
        >
          {item}
        </a>
      ))}
    </div>
  );
};
