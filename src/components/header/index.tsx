import React from "react";
import loginSvg from "@images/login.svg";
import cartSvg from "@images/cart.svg";
import Image from "next/image";
import Logo from "@components/logo";
import SearchBar from "@components/SearchBar";
import styles from "./header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

interface IProps {
  showSearchBar?: boolean;
}

export const Header: React.FC<IProps> = (props) => {
  const { showSearchBar = false } = props;
  const router = useRouter();

  return (
    <div className={styles.header}>
      <div onClick={() => router.push("/")} className={styles.img_wapper}>
        <Logo />
        {/* <Link href="/">
          <a>
          </a>
        </Link> */}
      </div>
      {showSearchBar ? <SearchBar /> : null}
      <ul
        className={`${styles.links_container} ${
          showSearchBar && styles.showCondition
        }`}
      >
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
