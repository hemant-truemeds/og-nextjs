import { ImageLoaderProps } from "next/image";

const myImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

export default myImageLoader;
