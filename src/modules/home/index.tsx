import ContactUs from "@components/ContactUs";
import OfferCardSection from "@components/OfferCardSection";
import ArticleCards from "@components/articleCard";
import Footer from "@components/footer";
import { Header } from "@components/header";
import SearchSection from "@components/searchSection/SearchSection";
// import SkeletonCustom from "@components/skeletonEffect";
import SliderComponents from "@components/sliderComponent";
import Head from "next/head";
import React from "react";
import { IHomePage } from "src/pages";

const HomeModule: React.FC<IHomePage> = (props) => {
  const { elastic_search, bannerData, wpArticles } = props;
  // console.log({ wpArticles });
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
      </Head>
      <Header />
      <SearchSection />
      <SliderComponents banners={bannerData?.banners} />
      <OfferCardSection apiCardData={elastic_search?.hits?.hits} />
      <ArticleCards wpArticles={wpArticles} />
      <ContactUs />
      <Footer />
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
