import React from "react"

import "../../styles/variables.scss"
import "../../styles/global.scss"

import "./default.scss"
import Header from "../../sections/header/header";
import Footer from "../../sections/footer/footer";

function LayoutDefaultNoNavigation(props) {
  return (
    <div className="wrapper">
      <main className="main">
        {props.children}
      </main>
    </div>
  );
}
export default LayoutDefaultNoNavigation;