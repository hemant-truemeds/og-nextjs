import Image, { ImageProps } from "next/image";
import React from "react";

const CustomImage: React.FC<ImageProps> = (props) => {
  const { src, alt, ...rest } = props;
  return (
    <Image
      {...rest}
      src={src}
      alt={alt}
      loader={({ src }) => {
        const url = `${src}?tr=cm-pad_resize,bg-FFFFFF,lo-true,w-250`;
        // if (url.includes("dwebbanner")) {
        //   console.log(url);
        // }
        return url;
      }}
    />
  );
};

export default CustomImage;
