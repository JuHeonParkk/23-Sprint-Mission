import { Link } from "react-router-dom";
import logo from "@/assets/common/logo.svg";

import styled from "styled-components";

const Container = styled.div`
  margin: 60px 0 40px 0;
  text-align: center;
  & img {
    width: 198px;
    @media (min-width: 768px) {
      width: 396px;
    }
  }
`;

export default function LogoHeader() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </Container>
  );
}
