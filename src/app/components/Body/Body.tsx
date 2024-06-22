"use client";

import React, { useEffect, useRef, useState } from "react";
import Footer from "../Footer/Footer";
import { Inter } from "next/font/google";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import styles from "./styles.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Body({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuVisible, toggleMenu] = React.useState(false);

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize.innerWidth > 768 && menuVisible) {
      toggleMenu(false);
    }
  }, [menuVisible, windowSize]);

  function onResize($event: any) {
    console.log("$event: ", $event);
    if (window.innerWidth > 768) {
      toggleMenu(false);
    }
  }

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return (
    <body className={`flex ${inter.className}`} onResize={onResize}>
      <div
        id={styles["not-menu-container"]}
        className={` ${styles[menuVisible ? "menu-open" : "menu-closed"]}`}
      >
        <Header
          menuVisible={menuVisible}
          title="Flash Cards"
          toggleMenu={toggleMenu}
        />
        {children}
        {/* <Footer /> */}
      </div>
      <Menu menuVisible={menuVisible} toggleMenu={toggleMenu} />
    </body>
  );
}
