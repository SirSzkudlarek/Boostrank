import React from "react"

import "../styles/variables.scss"
import "../styles/global.scss"

import * as styles from "./default.module.scss"
import { Header } from "../sections/header/Header";
import { Footer } from "../sections/footer/Footer";

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