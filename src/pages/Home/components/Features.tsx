import React, { useState } from "react";
import {
  CartIcon,
  ChefIcon,
  ContactSupportIcon,
  ForkKnifeIcon,
} from "../../../assets/svgs";
import {
  Card,
  Container,
  Grid,
  Heading3,
  Paragraph,
  Section,
} from "../../../components";

const features = [
  {
    icon: ChefIcon,
    title: "Master Chefs",
    description:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    icon: ForkKnifeIcon,
    title: "Quality Food",
    description:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    icon: CartIcon,
    title: "Online Order",
    description:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    icon: ContactSupportIcon,
    title: "24/7 Service",
    description:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
];

export const Features: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <Section id="feature">
      <Container>
        <Grid columns={4} spacing="lg">
          {features.map((feature, idx) => {
            const isHovered = hovered === idx;
            const Icon = feature.icon;
            return (
              <Card
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <Icon
                  fill={`var(--color-${isHovered ? "white" : "primary"})`}
                  width={32}
                  height={32}
                />
                <Heading3 variant={isHovered ? "light" : "secondary"}>
                  {feature.title}
                </Heading3>
                <Paragraph variant={isHovered ? "light" : "secondary"}>
                  {feature.description}
                </Paragraph>
              </Card>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
};
