import React from "react";
import styles from "./styles.module.css";
import Link from "@/app/components/Header/Nav";
import { publicRoutes } from "@/app/(public)/routes";
import CustomLink from "@/app/components/Header/Nav";
import Nav from "@/app/components/Header/Nav";

interface IProps {
  title: string;
  menuVisible: boolean;
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ menuVisible, toggleMenu, title }: IProps) => {
  return (
    <header
      className={`${styles["header"]} ${menuVisible ? "menu-visible" : ""}`}
    >
      <h1>{title}</h1>
      <Nav toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
