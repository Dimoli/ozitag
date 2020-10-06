import React, { useState } from "react";

import { content } from "./assets/";

import NavBar from "./components/NavBar/";

export default () => {
  const [activeMenuItem, setActiveMenuItem] = useState();

  return (
    <>
      <NavBar
        activeMenuItem={activeMenuItem}
        setActiveMenuItem={setActiveMenuItem}
      />
      <div className="mt-5" onMouseOver={() => setActiveMenuItem(undefined)}>
        <p className="jumbotron">{content}</p>
      </div>
    </>
  );
};
