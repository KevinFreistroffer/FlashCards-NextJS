import React from "react";
import styles from "./styles.module.css";
import Link from "@/app/components/Header/Nav";
import { publicRoutes } from "@/app/(public)/routes";
import CustomLink from "@/app/components/Header/Nav";
import Nav from "@/app/components/Header/Nav";

interface IProps {
  menuVisible: boolean;
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ menuVisible, toggleMenu }: IProps) => {
  return (
    <header
      className={`${styles["header"]} ${menuVisible ? "menu-visible" : ""}`}
    >
      <h1>{process.env.NEXT_PUBLIC_WEB_TITLE}</h1>
      <Nav toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
