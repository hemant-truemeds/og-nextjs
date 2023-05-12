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
        const url = `${src}?w=${width}&q=${quality}`;
        if (url.includes("dwebbanner")) {
          console.log(url);
        }
        return url;
      }}
    />
  );
};

export default CustomImage;
