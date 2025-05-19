import { BgHero1 } from "../../assets";
import { ContentWrapper, HeroWrapper, Overlay } from "./styles";
import type { HeroProps } from "./types";

export const HeroSection = ({
  backgroundImage = BgHero1,
  overlayOpacity = 0.5,
  children,
}: HeroProps) => {
  return (
    <HeroWrapper backgroundImage={backgroundImage}>
      <Overlay opacity={overlayOpacity} />
      <ContentWrapper>{children}</ContentWrapper>
    </HeroWrapper>
  );
};
