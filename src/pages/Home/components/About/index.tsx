import React from "react";
import { About1, About2, About3, About4 } from "../../../../assets";
import { ForkKnifeIcon } from "../../../../assets/svgs";
import { Title, SubTitle, PrimaryButton } from "../../../../components/common";
import { Stats } from "./Stats";
import { Section } from "../../../../components";
import { AboutContent, AboutGrid, AboutImage, TitleContainer } from "./styles";

const aboutStats = [
  { value: 13, label: "Years of EXPERIENCE" },
  { value: 50, label: "Popular MASTER CHEFS" },
];

const aboutImageContent = [
  { src: About1, alt: "Restaurant interior 1", area: "img1" },
  { src: About2, alt: "Restaurant interior 2", area: "img2" },
  { src: About3, alt: "Restaurant interior 3", area: "img3" },
  { src: About4, alt: "Restaurant interior 4", area: "img4" },
];

const About: React.FC = () => (
  <Section id="about">
    <AboutGrid>
      {aboutImageContent.map((props) => (
        <AboutImage {...props} />
      ))}
    </AboutGrid>
    <AboutContent>
      <Title fontFamily="script" align="center" variant="secondary">
        About us
      </Title>
      <TitleContainer>
        <Title>Welcome</Title>
        <ForkKnifeIcon fill="var(--color-secondary)" width={32} height={32} />
        <Title>Restoran</Title>
      </TitleContainer>
      <SubTitle>
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
        ametdiam et eos erat ipsum et lorem et sit, sed stet lorem sit.
      </SubTitle>
      <SubTitle>
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
        amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
        clita duo justo magna dolore erat amet
      </SubTitle>
      <Stats stats={aboutStats} />
      <PrimaryButton size="small">READ MORE</PrimaryButton>
    </AboutContent>
  </Section>
);

export default About;
