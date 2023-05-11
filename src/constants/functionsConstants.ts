export const replaceImgUrl = (img_url: string) => img_url?.split("?")[0];
export const removePtag = (premove: string) =>
  premove?.split("<p>")?.[1]?.split("</p>")?.[0];
