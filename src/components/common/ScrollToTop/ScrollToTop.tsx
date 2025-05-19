import React from "react";
import styled from "styled-components";
import { ArrowUpIcon } from "../../../assets/svgs";
import { PrimaryButton } from "../Button/index";
import { useScroll } from "../../../hooks";

const FloatingWrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
`;

export const ScrollToTop: React.FC = () => {
  const { scrollY = 0 } = useScroll();
  const visible = scrollY > 200;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <FloatingWrapper>
      <PrimaryButton size="small" onClick={scrollToTop}>
        <ArrowUpIcon width={28} height={28} />
      </PrimaryButton>
    </FloatingWrapper>
  );
};
