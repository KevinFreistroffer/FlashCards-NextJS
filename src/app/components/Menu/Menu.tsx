import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

interface IProps {
  menuVisible: boolean;
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ menuVisible, toggleMenu }: IProps) => {
  return (
    <div
      id={styles["menu"]}
      className={`${styles[menuVisible ? "menu-open" : "menu-hidden"]} p-5`}
    >
      <div className="menu-header">
        <h2>Menu</h2>
      </div>
      <div className="menu-main">
        <ul>
          <li>
            <Link href="/" onClick={() => toggleMenu((prev) => !prev)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => toggleMenu((prev) => !prev)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => toggleMenu((prev) => !prev)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="menu-footer">
        <p>Menu footer</p>
      </div>
    </div>
  );
};

export default Menu;
