import React from "react";
import loginSvg from "@images/login.svg";
import cartSvg from "@images/cart.svg";
import { Logo } from "@components/css";
import Image from "next/image";
import styles from "./index.module.scss";

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.img_wapper}>
        <Logo />
      </div>
      <ul className={styles.links_container}>
        <li>Download App</li>
        <li>
          <div className={styles.loginSvg_wrapper}>
            <Image layout="fill" src={loginSvg} alt="logo svg" />
          </div>
          Login / Signup
        </li>
        <li>
          <Image src={cartSvg} alt="cart svg" />
          Cart
        </li>
      </ul>
    </div>
  );
};
