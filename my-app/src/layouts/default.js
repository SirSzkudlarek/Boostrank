import React from "react"

import "../styles/variables.scss"
import "../styles/global.scss"

import "./default.scss"
import Header from "../sections/header/header";
import Footer from "../sections/footer/footer";

function Layout() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
      </main>
      <Footer />
    </div>
  );
}
export default Layout;