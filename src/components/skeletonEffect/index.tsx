import React from "react";
import styles from "./skeletonEffect.module.scss";
import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";

interface IProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
}

const SkeletonCustom = (props: IProps) => {
  const {
    width = "100px",
    height = "100px",
    borderRadius = "0",
    ...rest
  } = props;
  return (
    <div
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius,
        ...rest,
      }}
      className={styles.skeletonWrapper}
    >
      {/* <SkeletonTheme baseColor="red" highlightColor="blue"> */}
      <SkeletonTheme baseColor="rgba(229, 228, 226, 0.3)" highlightColor="#eee">
        <Skeleton width={`100%`} height={`100%`} />
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonCustom;
