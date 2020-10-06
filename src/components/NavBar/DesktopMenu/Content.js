import React from "react";

import { submenuItems } from "../../../assets/";

export default (props) => {
  const { activeMenuItem } = props;

  return (
    <div className="d-none desktop-menu-content">
      <div
        className={`${
          activeMenuItem ? "d-flex" : "d-none"
        } justify-content-around position-absolute bg-light p-1 border border-top-0 border-primary`}
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
    </div>
  );
};
