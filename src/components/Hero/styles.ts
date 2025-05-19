import styled from "styled-components";

export const HeroWrapper = styled.section<{
  backgroundImage: string;
}>`
  position: relative;
  width: 100%;
  height: 400px;
  background: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div<{ opacity: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, ${({ opacity }) => opacity});
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
