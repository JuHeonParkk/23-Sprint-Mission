import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import HeroImage from "../assets/main/hero_img.png";
import HeroFooterImage from "../assets/main/hero_footer_img.png";
import FeatureImage1 from "../assets/main/section_01.png";
import FeatureImage2 from "../assets/main/section_02.png";
import FeatureImage3 from "../assets/main/section_03.png";

export default function MainPage() {
  return (
    <div>
      <Header />
      <HeroSection
        heroTitle={"일상의 모든 물건을 거래해 보세요"}
        imgUrl={HeroImage}
        hasButton
      />
      <FeatureSection
        imgUrl={FeatureImage1}
        subTitle={"Hot Item"}
        title={"인기 상품을\n 확인해 보세요"}
        info={"가장 HOT한 중고거래 물품을\n 판다 마켓에서 확인해 보세요"}
        alignReverse={false}
      />
      <FeatureSection
        imgUrl={FeatureImage2}
        subTitle={"Search"}
        title={"구매를 원하는\n 상품을 검색하세요"}
        info={"구매하고 싶은 물품을 검색해서\n 쉽게 찾아보세요"}
        alignReverse={true}
      />
      <FeatureSection
        imgUrl={FeatureImage3}
        subTitle={"Register"}
        title={"판매를 원하는\n 상품을 등록하세요"}
        info={"어떤 물건이든 판매하고 싶은\n 상품을 쉽게 등록하세요"}
        alignReverse={false}
      />
      <HeroSection
        heroTitle={"믿을 수 있는\n 판다마켓 중고 거래"}
        imgUrl={HeroFooterImage}
      />
      <Footer />
    </div>
  );
}
