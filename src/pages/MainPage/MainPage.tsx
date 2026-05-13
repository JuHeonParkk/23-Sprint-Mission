import Header from "@/components/Header";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";

import HeroImage from "@/assets/main/hero_img.png";
import HeroFooterImage from "@/assets/main/hero_footer_img.png";
import { mainHeroContents } from "./components/MainContent";

export default function MainPage() {
  return (
    <div>
      <Header />
      <HeroSection data={mainHeroContents[0]} imgUrl={HeroImage} hasButton />
      <FeatureSection />
      <HeroSection data={mainHeroContents[1]} imgUrl={HeroFooterImage} />
      <Footer />
    </div>
  );
}
