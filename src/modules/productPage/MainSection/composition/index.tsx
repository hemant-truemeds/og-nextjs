import React from "react";
import styles from "./composition.module.scss";
import Image from "next/image";

interface IProps {
  original_composition: string;
}

const Composition: React.FC<IProps> = (props) => {
  const { original_composition } = props;
  return (
    <div className={styles.compositionWrapper}>
      <div className={styles.headSection}>
        <div className={styles.imageWrapper}>
          <Image
            layout="fill"
            objectFit="contain"
            src="https://www.truemeds.in/static/media/compositionIcon.84bf1b1d.svg"
            alt="composition"
          />
        </div>
        <h3 className={styles.compositionTitile}>Composition</h3>
      </div>
      <p className={styles.compositionDesc}>{original_composition}</p>
    </div>
  );
};

export default Composition;
