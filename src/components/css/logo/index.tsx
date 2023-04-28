import Image from "next/image";
import logoPng from "@images/TrueLogo.png";
import React from "react";

export const Logo: React.FC = () => {
  return (
    <Image
      loading="lazy"
      layout="fill"
      src={logoPng}
      alt="nextjs"
      // width="96"
      // height="58"
    />
  );
};
