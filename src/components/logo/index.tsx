import React from "react";
import Image from "next/image";
import logoPng from "@images/TrueLogo.png";
import CustomImage from "@components/CutstomImage";

const Logo: React.FC = () => {
  return (
    <CustomImage
      priority
      layout="fill"
      objectFit="contain"
      src={logoPng}
      alt="nextjs"
      // width="96"
      // height="58"
    />
  );
};

export default Logo;
