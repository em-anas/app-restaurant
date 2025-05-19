// import { useState } from 'react';
import {
  Box,
  Breadcrumb,
  Container,
  Grid,
  Heading1,
  HeroSection,
  Image,
  PageLayout,
  ScrollToTop,
  Section,
  SectionHeader,
} from "../../components";
import { BgHero2, MapsImage } from "../../assets";
import { ContactInfo } from "./components/ContactInfo";
import { ContactForm } from "./components/ContactForm";

export const ContactPage = () => {
  // const [showConfirmation, setShowConfirmation] = useState(false);

  // const handleFormSubmit = () => {
  //   setShowConfirmation(true);
  // };

  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection overlayOpacity={0.05} backgroundImage={BgHero2}>
        <Heading1 color="white" align="center">
          Contact Us
        </Heading1>
        <Breadcrumb
          items={[
            { label: "HOME", path: "/" },
            { label: "CONTACT", active: true },
          ]}
        />
      </HeroSection>
      <SectionHeader title="Contact us" subTitle="Contact for any query" />
      <ContactInfo />
      <Section id="contact-form">
        <Container>
          <Grid columns={2} spacing="lg">
            <Box shadow="md" radius="md" overflow="hidden">
              <Image src={MapsImage} />
            </Box>

            <Box>
              <ContactForm />
            </Box>
          </Grid>
        </Container>
      </Section>
      <ScrollToTop />
    </PageLayout>
  );
};
