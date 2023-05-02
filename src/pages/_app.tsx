import { AppProps } from "next/app";
// import Script from "next/script";
import "@styles/global.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "@styles/swiper.css";
import "react-loading-skeleton/dist/skeleton.css";
// import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      {/* <Script
        strategy="lazyOnload"
        async
        defer
        src="https://kit.fontawesome.com/1c4700fdde.js"
        crossOrigin="anonymous"
      /> */}
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
