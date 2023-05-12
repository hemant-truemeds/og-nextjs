export const replaceImgUrl = (img_url: string) =>
  img_url?.slice(0, img_url?.lastIndexOf("?"));
export const removePtag = (premove: string) =>
  premove?.split("<p>")?.[1]?.split("</p>")?.[0];
