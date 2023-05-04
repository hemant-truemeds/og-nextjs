import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronUp,
//   faChevronDown
// } from "@fortawesome/fontawesome-free-solid";
import styles from "./collapsable.module.scss";

interface IProps {
  open?: boolean;
  title: string;
  description: string;
}

const Collapsible: React.FC<IProps> = ({ open, title, description }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.collapsableWrapper}>
        <div onClick={handleFilterOpening} className={styles.collapsableInner}>
          <h6 className={styles.title}>{title}</h6>
          <div
            className={`${styles.arrow} ${
              !isOpen ? styles.open : styles.close
            }`}
          ></div>
        </div>
        <div className={styles.paragraph}>
          <div>
            {isOpen && <div className={styles.paraInnner}>{description}</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collapsible;
