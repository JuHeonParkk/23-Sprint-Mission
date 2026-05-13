export interface MainNavItem {
  href: string;
  label: string;
}

export interface HeroContent {
  title: [string, string];
  goItemLabel?: string;
}

export interface FeatureContent {
  label: string;
  title: readonly [string, string];
  description: readonly [string, string];
}

export const mainNavItems: MainNavItem = {
  href: "/login",
  label: "로그인",
};

export const mainHeroContents: HeroContent[] = [
  {
    title: ["일상의 모든 물건을", "거래해 보세요"],
    goItemLabel: "구경하러 가기",
  },
  {
    title: ["믿을 수 있는", "판다마켓 중고 거래"],
  },
];

export const mainFeatureContents: FeatureContent[] = [
  {
    label: "Hot Item",
    title: ["인기 상품을", "확인해 보세요"],
    description: ["가장 HOT한 중고거래 물품을", "판다 마켓에서 확인해 보세요"],
  },
  {
    label: "Search",
    title: ["구매를 원하는", "상품을 검색하세요"],
    description: ["구매하고 싶은 물품을 검색해서", "쉽게 찾아보세요"],
  },
  {
    label: "Register",
    title: ["판매를 원하는", "상품을 등록하세요"],
    description: ["어떤 물건이든 판매하고 싶은", "상품을 쉽게 등록하세요"],
  },
];
