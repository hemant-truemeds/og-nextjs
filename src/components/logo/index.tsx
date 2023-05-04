import React from "react";
import Image from "next/image";
import logoPng from "@images/TrueLogo.png";

const Logo: React.FC = () => {
  return (
    <Image
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
