import React from "react"

import "../../styles/variables.scss"
import "../../styles/global.scss"

import "./default.scss"
import Header from "../../sections/header/header";
import Footer from "../../sections/footer/footer";

function LayoutDefault(props) {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}
export default LayoutDefault;