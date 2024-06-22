"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { publicRoutes } from "@/app/(public)/routes";
import styles from "./styles.module.css";

const Nav = ({
  toggleMenu,
}: {
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element => {
  const pathname = usePathname();
  return (
    <nav className={`${styles["nav"]}`}>
      <i
        id={styles["menu-toggle"]}
        onClick={() => toggleMenu((prev) => !prev)}
        className={"fa fa-bars"}
      ></i>
      <ul className={`${styles["nav__ul"]}`}>
        {publicRoutes.map(({ route, text }) => (
          <li key={route} className={`${styles["ul__li"]}  mr-3`}>
            <Link
              href={route}
              className={`${styles["ul__li"]} ${
                pathname === route ? "font-bold" : ""
              }  mr-3`}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
