import React from "react";
import Image from "next/image";
import styles from "./doctorList.module.scss";

interface IProps {
  doctorName: string;
  experience: string;
  specialist: string;
  qualification: string;
  image: string;
}

const DoctorList: React.FC<IProps> = (props) => {
  const { doctorName, experience, specialist, image, qualification } = props;

  return (
    <div className={styles.doctorListWrapper}>
      <p className={styles.pill}>Written by</p>
      <div className={styles.imageWrapper}>
        <Image
          loading="lazy"
          layout="fill"
          objectFit="contain"
          src={image}
          alt="doctor img"
        />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{doctorName}</p>
        <p className={styles.description}>
          {specialist} | {experience} {qualification}
        </p>
      </div>
    </div>
  );
};

export default DoctorList;
