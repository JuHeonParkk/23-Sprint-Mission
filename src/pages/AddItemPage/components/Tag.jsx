import styled from "styled-components";
import closeIcon from "@/assets/icon/closeIcon.svg";

export default function Tag() {
  return (
    <div>
      <span>#{}</span>
      <img src={closeIcon} alt="지우기 아이콘" />
    </div>
  );
}
