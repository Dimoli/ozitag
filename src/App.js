import React, { useState } from "react";

import { menuItems, submenuItems, content } from "./assets/";

export default () => {
  const [activeMenuItem, setActiveMenuItem] = useState();

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
      </nav>
      <div
        className={`${
          activeMenuItem ? "d-flex" : "d-none"
        } justify-content-around position-absolute p-1 border border-primary border-top-0`}
        style={{ width: "90%", overflowWrap: "anywhere", left: "5%" }}
      >
        {submenuItems[activeMenuItem]?.map((items, itemsIndex) => (
          <div key={itemsIndex}>
            {items.map((item, index) =>
              index ? <h6 key={index}>{item}</h6> : <h5 key={index}>{item}</h5>
            )}
          </div>
        ))}
      </div>
      <div className="mt-5" onMouseOver={(e) => setActiveMenuItem(undefined)}>
        <p className="jumbotron">{content}</p>
        {/* <i className="fa fa-bars" aria-hidden="true" /> */}
      </div>
    </>
  );
};
