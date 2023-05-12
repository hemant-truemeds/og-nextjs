export const replaceImgUrl = (img_url: string) => {
  let url_arr = img_url.split("?");

  if (url_arr.length < 2) {
    return img_url;
  } else if (url_arr.length === 2) {
    return url_arr[0];
  } else {
    url_arr.pop();
    return url_arr.join("");
  }
};
export const removePtag = (premove: string) =>
  premove?.split("<p>")?.[1]?.split("</p>")?.[0];
