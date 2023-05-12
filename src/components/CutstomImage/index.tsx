import Image, { ImageProps } from "next/image";
import React from "react";

const CustomImage: React.FC<ImageProps> = (props) => {
  const { src, alt, ...rest } = props;
  return (
    <Image
      {...rest}
      src={src}
      alt={alt}
      loader={({ src, width, quality }) =>
        `https://example.com/${src}?w=${width}&q=${quality || 75}`
      }
    />
  );
};

export default CustomImage;
