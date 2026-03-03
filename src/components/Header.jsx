import React from "react";
import styled from "styled-components";
import logoFace from "../assets/common/logo_face.svg";
import logoText from "../assets/common/logo_text.svg";
import profile from "../assets/common/profile.svg";
import Button from "./Button";
import { Link, NavLink, useLocation } from "react-router-dom";

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
  position: sticky;
  top: 0;
  left: 0;

  @media (min-width: 768px) {
    padding: 0 24px;
  }

  @media (min-width: 1200px) {
    padding: 0 200px;
  }
`;

const LinkLogo = styled(Link)`
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

const ProfileButton = styled(Button)`
  padding: 11px 40px;

  &:has(img) {
    padding: 0;
    background-color: transparent;

    &:hover {
      background-color: transparent;
    }
  }
`;

export default function Header() {
  const isLogin = false;
  const location = useLocation();
  const showNav = location.pathname === "/items";

  function getStyle({ isActive }) {
    return {
      color: isActive ? "var(--primary-100)" : "var(--secondary-600)",
    };
  }

  return (
    <HeaderContainer>
      <h1>
        <LinkLogo to="/">
          <LogoFace src={logoFace} alt="logo_face" />
          <LogoText src={logoText} alt="logo_text" />
        </LinkLogo>
      </h1>
      {showNav && (
        <LinkNav>
          <li>
            <NavLink to="/" style={getStyle}>
              자유게시판
            </NavLink>
          </li>
          <li>
            <NavLink to="/items" style={getStyle}>
              중고마켓
            </NavLink>
          </li>
        </LinkNav>
      )}
      <ProfileContainer>
        <ProfileButton>
          {isLogin ? <img src={profile} alt="profile" /> : "로그인"}
        </ProfileButton>
      </ProfileContainer>
    </HeaderContainer>
  );
}
