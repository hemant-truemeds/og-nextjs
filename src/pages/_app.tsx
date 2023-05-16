import App, { AppContext, AppProps } from "next/app";
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
import { Provider } from "react-redux";
import { store } from "@redux/store";
// import { DocumentContext } from "next/document";
// import { BrowserDetect } from "@constants/BrowserDetection";
// import Head from "next/head";
// import Head from "next/head";

// type TProps = Pick<AppProps, "Component" | "pageProps"> & {
//   isBrowser: boolean;
// };

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // console.log({ isBrowser });
  return (
    <>
      <link
        rel="shortcut icon"
        href="public/icons/favicon.png"
        type="image/x-icon"
      />
      <Script
        strategy="lazyOnload"
        async
        src="https://kit.fontawesome.com/1c4700fdde.js"
        crossOrigin="anonymous"
      />
      {/* {isBrowser && (
          <> */}
      <Script
        async
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
        }, 15000)
      })(window, document, "script", "dataLayer", "GTM-K5D4LGB");`,
        }}
      ></Script>
      {/* </>
        )} */}
      <ErrorBoundary>
        <Provider store={store}>
          <Component {...pageProps} />;
        </Provider>
      </ErrorBoundary>
    </>
  );
}

export default MyApp;

// MyApp.getInitialProps = async (context: AppContext) => {
//   const ctx = await App.getInitialProps(context);
//   const userAgend = context.ctx.req?.headers["user-agent"];
//   console.log({ userAgend });
//   const isBrowser = BrowserDetect(userAgend);

//   return { ...ctx, isBrowser };
// };
