export const changeImageUrl = (imageUrl: string) => {
  let s3Url = "https://tm-storage-bucket-prod.s3.ap-south-1.amazonaws.com";
  let imageBucket = "https://assets.truemeds.in";
  let finalUrl = imageUrl.replace(imageBucket, s3Url);
  return finalUrl;
};
