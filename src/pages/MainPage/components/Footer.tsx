import { Link } from "react-router-dom";
import styled from "styled-components";
import facebookIcon from "@/assets/icon/facebook_icon.svg";
import twitterIcon from "@/assets/icon/twitter_icon.svg";
import youtubeIcon from "@/assets/icon/youtube_icon.svg";
import instagramIcon from "@/assets/icon/instagram_icon.svg";

const Container = styled.div`
  font-size: 14px;
  white-space: nowrap;
  color: #9ca3af;
  background-color: var(--secondary-900);
`;

const ContentInner = styled.div`
  width: 100%;
  padding: 32px 32px 108px 32px;
  display: grid;
  grid-template-rows: 1fr 3fr;
  grid-template-areas:
    "links . sns"
    "copyright . .";
  grid-template-columns: auto 1fr auto;

  @media (min-width: 768px) {
    padding: 32px 104px 108px 104px;
    grid-template-areas: "copyright links sns";
    grid-template-columns: auto 1fr auto;
  }

  @media (min-width: 1200px) {
    padding: 32px 200px 108px 200px;
  }
`;

const CopyRight = styled.p`
  grid-area: copyright;
  display: flex;
  align-items: flex-end;
`;

const FooterLinks = styled.ul`
  grid-area: links;
  display: flex;
  margin-right: -30px;
  gap: 30px;
  & li a {
    font-weight: 400;
    color: var(--secondary-200);
  }

  @media (min-width: 768px) {
    justify-self: center;
  }
`;

const FooterSns = styled.ul`
  grid-area: sns;
  display: flex;
  gap: 12px;

  @media (min-width: 768px) {
    justify-self: center;
  }
`;

export default function Footer() {
  return (
    <Container>
      <ContentInner>
        <CopyRight>&copy; codeit - 2026</CopyRight>
        <FooterLinks>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </FooterLinks>
        <FooterSns>
          <li>
            <Link to="https://www.facebook.com/?locale=ko_KR">
              <img src={facebookIcon} alt="facebook_icon" />
            </Link>
          </li>
          <li>
            <a href="https://x.com/?lang=ko ">
              <img src={twitterIcon} alt="twitter_icon" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/">
              <img src={youtubeIcon} alt="youtube_icon" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <img src={instagramIcon} alt="instagram_icon" />
            </a>
          </li>
        </FooterSns>
      </ContentInner>
    </Container>
  );
}
