import React from "react";
import { IData, STATIC_DATA } from "@constants/truemedsConstant";
import styles from "./contactus.module.scss";

const ContactUs = () => {
  return (
    <div className={styles.contactUsWrapper}>
      <div className={styles.whyTruemedsContainer}>
        <div className={styles.whyTruemedsInner}>
          <div className={styles.listWrapper}>
            <h2>Why Truemeds?</h2>
            {STATIC_DATA.map((item: IData, index: number) => {
              return (
                <div key={index} className={styles.listItem}>
                  <h3>{item.title}</h3>
                  <p>{item.paragraph}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
