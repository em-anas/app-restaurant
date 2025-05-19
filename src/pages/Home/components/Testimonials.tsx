import React from "react";
import { QuotationIcon } from "../../../assets/svgs/QuotationIcon";
import Testimonial1 from "../../../assets/testimonial-1.png";
import Testimonial2 from "../../../assets/testimonial-2.png";
import Testimonial3 from "../../../assets/testimonial-3.png";
import {
  AvatarImg,
  Card,
  Container,
  Grid,
  Paragraph,
  Section,
  SectionHeader,
} from "../../../components";
import { ClientContentWrapper } from "./styles";

const TESTIMONIALS = [
  {
    img: Testimonial1,
    name: "Client Name",
    role: "Profession",
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
  },
  {
    img: Testimonial2,
    name: "Client Name",
    role: "Profession",
    text: "Dolor et eos labore, stet justo sed est sed.Diam sed sed dolor stet amet eirmod eos labore diam",
  },
  {
    img: Testimonial3,
    name: "Client Name",
    role: "Profession",
    text: "Dolor et eos labore, stet justo sed est sed.Diam sed sed dolor stet amet eirmod eos labore diam",
  },
];

export const Testimonials: React.FC = () => (
  <Section id="testimonials">
    <Container>
      <SectionHeader title="Testimonials" subTitle="Our Client Says" />
      <Grid columns={3} spacing="lg">
        {TESTIMONIALS.map((t, i) => (
          <Card key={i}>
            <QuotationIcon />
            <Paragraph>{t.text}</Paragraph>
            <ClientContentWrapper>
              <AvatarImg src={t.img} alt={t.name} />
              <Paragraph>{t.name}</Paragraph>
              <Paragraph>{t.role}</Paragraph>
            </ClientContentWrapper>
          </Card>
        ))}
      </Grid>
    </Container>
  </Section>
);
