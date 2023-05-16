import Image, { ImageProps } from "next/image";
import React from "react";

const CustomImage: React.FC<ImageProps & { customWidth?: string }> = (
  props
) => {
  const { src, alt, customWidth = "256", ...rest } = props;
  return (
    <Image
      {...rest}
      src={src}
      alt={alt}
      loader={({ src }) => {
        const url = `${src}?tr=cm-pad_resize,bg-FFFFFF,lo-true,w-${customWidth}`;
        // if (url.includes("dwebbanner")) {
        //   console.log(url);
        // }
        return url;
      }}
    />
  );
};

export default CustomImage;
