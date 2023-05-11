import dynamic from "next/dynamic";
import OfferCardSection from "@components/OfferCardSection";
import { Header } from "@components/header";
// import SkeletonCustom from "@components/skeletonEffect";
// import Footer from "@components/footer";
// import ContactUs from "@components/ContactUs";
// import SecondHeaderSection from "@components/SecondHeaderSection/SecondHeaderSection";
// import SliderComponents from "@components/sliderComponent";
// import ArticleCards from "@components/articleCard";

const DynamicSecondHeaderSection = dynamic(
  () => import("@components/SecondHeaderSection"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const DynamicSliderComponents = dynamic(
  () => import("@components/sliderComponent"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const DynamicArticleCards = dynamic(() => import("@components/articleCard"), {
  loading: () => <p>Loading...</p>,
});
const DynamicFooter = dynamic(() => import("@components/footer"), {
  loading: () => <p>Loading...</p>,
});
const DynamicContactus = dynamic(() => import("@components/ContactUs"), {
  loading: () => <p>Loading...</p>,
});
import Head from "next/head";
import React from "react";
import { IHomePage } from "src/pages";

const HomeModule: React.FC<IHomePage> = (props) => {
  const { elastic_search, bannerData, wpArticles } = props;
  // console.log({ props });
  return (
    <>
      <Head>
        <title>Truemeds-nextjs-poc</title>
        <link
          rel="shortcut icon"
          href="/icons/favicon.png"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="Looking for the best medicine half price? Look no further than Truemeds. We offer the best quality at the best prices, so you can save money and feel better."
        />
        <link
          rel="canonical"
          href={`https://www.truemeds.in/option/mysubstitute/info`}
        />
        <link rel="alternate" hrefLang="en-us" href="https://truemeds/us/" />
        <meta name="robots" content="all" />
      </Head>
      <Header />
      <DynamicSecondHeaderSection />
      <DynamicSliderComponents banners={bannerData?.banners} />
      <OfferCardSection apiCardData={elastic_search?.hits?.hits} />
      <DynamicArticleCards wpArticles={wpArticles} />
      <DynamicContactus />
      <DynamicFooter />
      {/* <>
        {elastic_search ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
          </div>
        ) : (
          <SkeletonCustom width={`100%`} height={`100vh`} />
        )}
      </> */}
    </>
  );
};

export default HomeModule;
