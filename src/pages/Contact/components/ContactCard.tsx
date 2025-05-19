import React from "react";
import type { ContactCardProps, ContactDetailProps } from "./types";
import { Heading4 } from "../../../components";
import {
  CardContainer,
  DetailContainer,
  DetailText,
  IconWrapper,
} from "./styles";

const ContactDetail: React.FC<ContactDetailProps> = ({ icon, text }) => (
  <DetailContainer>
    <IconWrapper>{icon}</IconWrapper>
    <DetailText>{text}</DetailText>
  </DetailContainer>
);

export const ContactCard: React.FC<ContactCardProps> = ({ title, details }) => {
  return (
    <CardContainer>
      <Heading4 fontFamily="script" variant="primary">
        {title}
      </Heading4>
      {details.map((detail, index) => (
        <ContactDetail key={index} icon={detail.icon} text={detail.text} />
      ))}
    </CardContainer>
  );
};
