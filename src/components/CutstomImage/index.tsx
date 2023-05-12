import Image, { ImageProps } from "next/image";
import React from "react";

const CustomImage: React.FC<ImageProps> = (props) => {
  const { src, alt, ...rest } = props;
  return (
    <Image
      {...rest}
      src={src}
      alt={alt}
      loader={({ src, width, quality }) => {
        // console.log(`${src}`);
        return `${src}?w=${width}&q=${quality}`;
      }}
    />
  );
};

export default CustomImage;
