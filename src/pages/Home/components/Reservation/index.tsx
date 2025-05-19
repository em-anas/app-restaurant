import React from "react";
import { BookTable } from "../../../../assets";
import {
  Container,
  Grid,
  Image,
  Section,
  SectionHeader,
} from "../../../../components";
import Form from "./Form";

const Reservation: React.FC = () => {
  return (
    <Section id="reservation" background="dark">
      <Grid columns={2} spacing="lg">
        <Image src={BookTable} />
        <Container>
          <SectionHeader
            isBgDark
            title="Reservation"
            subTitle="Book A Table Online"
          />
          <Form />
        </Container>
      </Grid>
    </Section>
  );
};

export default Reservation;
