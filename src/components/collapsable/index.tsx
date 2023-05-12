import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronUp,
//   faChevronDown
// } from "@fortawesome/fontawesome-free-solid";
import styles from "./collapsable.module.scss";
import { removePtag } from "@constants/functionsConstants";

interface IProps {
  open?: boolean;
  title: string;
  description: string;
  nestedTitle?: string;
}

const Collapsible: React.FC<IProps> = ({
  open = false,
  title = "",
  description = "",
  nestedTitle = "",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.collapsableWrapper}>
        <div onClick={handleFilterOpening} className={styles.collapsableInner}>
          <h3 className={styles.title}>{title}</h3>
          <div
            className={`${styles.arrow} ${
              !isOpen ? styles.open : styles.close
            }`}
          ></div>
        </div>
        <div className={styles.paragraph}>
          <div className={`${isOpen ? styles.heightZero : null}`}>
            <h4 className={styles.nestedTitle}>{nestedTitle || ""}</h4>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Collapsible;
