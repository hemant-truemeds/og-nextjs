import React from "react";
import Image, { ImageProps } from "next/image";
import { changeImageUrl } from "src/functions/changeImageUrl";
import styles from "./picture.module.scss";

type IProps = ImageProps;

const Picture: React.FC<IProps> = (props) => {
  const { src, ...rest } = props;

  return <Image {...rest} src={changeImageUrl(src as string)} />;
};

export default Picture;
