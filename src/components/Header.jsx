import React from "react";
import styled from "styled-components";
import logoFace from "../assets/logo_face.svg";
import logoText from "../assets/logo_text.svg";
import profile from "../assets/profile.svg";

const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--bg-white);
  border-bottom: 1px solid #dfdfdf;

  @media (min-width: 768px) {
    padding: 0 24px;
  }

  @media (min-width: 1200px) {
    padding: 0 200px;
  }
`;

const LinkLogo = styled.a`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const LogoFace = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;
const LogoText = styled.img``;

const LinkNav = styled.ul`
  margin-left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  ${"li a"} {
    font-size: 16px;
    font-weight: 600;
    color: var(--secondary-600);
    @media (min-width: 768px) {
      font-size: 18px;
    }
  }
  @media (min-width: 768px) {
    margin-left: 35px;
    gap: 30px;
  }
`;

const ProfileContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${"button img"} {
    width: 40px;
    height: 40px;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <h1>
        <LinkLogo href="#">
          <LogoFace src={logoFace} alt="logo_face" />
          <LogoText src={logoText} alt="logo_text" />
        </LinkLogo>
      </h1>
      <LinkNav>
        <li>
          <a href="#">자유게시판</a>
        </li>
        <li>
          <a href="#">중고마켓</a>
        </li>
      </LinkNav>
      <ProfileContainer>
        <button>
          <img src={profile} alt="profile" />
        </button>
      </ProfileContainer>
    </HeaderContainer>
  );
}
