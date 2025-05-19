import { MailIcon } from "../../../assets";
import { ContactCard } from "./ContactCard";
import { ContactInfoContainer } from "./styles";

const MAIL_LIST = {
  booking: "booking@example.com",
  general: "general@example.com",
  support: "support@example.com",
};

export const ContactInfo: React.FC = () => {
  return (
    <ContactInfoContainer>
      {Object.entries(MAIL_LIST).map(([key, value]) => (
        <>
          <ContactCard
            title={key + "___"}
            details={[{ text: value, icon: <MailIcon /> }]}
          />
        </>
      ))}
    </ContactInfoContainer>
  );
};
