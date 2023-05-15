import { AppProps } from "next/app";
import Script from "next/script";
import "@styles/global.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "@styles/swiper.css";
import "react-loading-skeleton/dist/skeleton.css";
import ErrorBoundary from "@components/ErrorBoundary";
// import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Script
        strategy="lazyOnload"
        async
        defer
        src="https://kit.fontawesome.com/1c4700fdde.js"
        crossOrigin="anonymous"
      />
      <Script
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `(function (w, d, s, l, i) {
        setTimeout(()=>{
          w[l] = w[l] || [];
          w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != "dataLayer" ? "&l=" + l : "";
          j.async = true;
          j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
          f.parentNode.insertBefore(j, f);
        }, 1000)
      })(window, document, "script", "dataLayer", "GTM-K5D4LGB");`,
        }}
      ></Script>
      <ErrorBoundary>
        <Component {...pageProps} />;
      </ErrorBoundary>
    </>
  );
}

export default MyApp;
