import googleIcon from "@/assets/icon/google_icon.svg";
import kakaoIcon from "@/assets/icon/kakao_icon.svg";

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 640px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 23px;
  border-radius: 8px;
  background-color: #e6f2ff;
  font-size: 16px;
  font-weight: 500;
  color: var(--secondary-800);
  margin: 24px 0;
`;

const SocialLoginButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export default function SocialLogin() {
  return (
    <Container>
      <span>간편 로그인하기</span>
      <SocialLoginButtons>
        <a href="https://www.google.com/">
          <img src={googleIcon} alt="구글 아이콘" />
        </a>
        <a href="https://www.kakaocorp.com/page/">
          <img src={kakaoIcon} alt="카카오 아이콘" />
        </a>
      </SocialLoginButtons>
    </Container>
  );
}
