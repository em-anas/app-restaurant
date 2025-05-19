import { HeroSection, Paragraph, Title } from "../../../components";

export const Hero: React.FC = () => {
  return (
    <HeroSection overlayOpacity={0.75}>
      <Title> Enjoy our Delicious Meal </Title>
      <Paragraph variant="light">
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
        amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
        clita duo justo magna dolore erat amet
      </Paragraph>
    </HeroSection>
  );
};
