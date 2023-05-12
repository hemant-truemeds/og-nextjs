import React from "react";
import { IData, STATIC_DATA } from "@constants/truemedsConstant";
import styles from "./contactus.module.scss";
import Image from "next/image";
import Link from "next/link";
import CustomImage from "@components/CutstomImage";

const ContactUs = () => {
  return (
    <div className={styles.contactUsWrapper}>
      <div className={styles.whyTruemedsContainer}>
        <div className={styles.whyTruemedsInner}>
          <div className={styles.listWrapper}>
            <h2>Why Truemeds?</h2>
            {STATIC_DATA.map((item: IData, index: number) => {
              return (
                <div
                  key={index}
                  className={`${styles.listItem} ${
                    index === 0 && styles.firstChild
                  }`}
                >
                  <h3>{item.title}</h3>
                  <p>{item.paragraph}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.getInTouchWrapper}>
          <header>Get in touch with us</header>
          <p>
            Our customer representative team is available 7 days a week from 9
            am - 9 pm. You can reach us on
          </p>
          <div className={styles.infoWrapper}>
            <div className={styles.infoItem}>
              <div className={styles.imageWrapper}>
                <Image
                  src="https://www.truemeds.in/static/media/mail.5af80c42.svg"
                  alt="mail"
                  // width={50}
                  // height={50}
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                />
              </div>
              <Link
                target="_blank"
                href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=support@truemeds.in"
              >
                <a>support@truemeds.in</a>
              </Link>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.imageWrapper}>
                <CustomImage
                  src="https://www.truemeds.in/static/media/call.37d36705.svg"
                  alt="mail"
                  // width={50}
                  // height={50}
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                />
              </div>
              <Link
                target="_blank"
                href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=support@truemeds.in"
              >
                <a>08069808861</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
