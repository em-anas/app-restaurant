import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  XTwitterIcon,
} from "../../../../assets/svgs";
import chef1 from "../../../../assets/team-1.png";
import chef2 from "../../../../assets/team-2.png";
import chef3 from "../../../../assets/team-3.png";
import chef4 from "../../../../assets/team-4.png";
import {
  Container,
  Grid,
  Section,
  SectionHeader,
} from "../../../../components";
import {
  TeamCard,
  TeamImage,
  TeamImageWrapper,
  TeamName,
  TeamRole,
  TeamSocialIcon,
  TeamSocials,
} from "./styles";

const TEAM = [
  { img: chef1, name: "Full Name", role: "Designation" },
  { img: chef2, name: "Full Name", role: "Designation" },
  { img: chef3, name: "Full Name", role: "Designation" },
  { img: chef4, name: "Full Name", role: "Designation" },
];

const Team: React.FC = () => (
  <Section id="team">
    <Container>
      <SectionHeader title="Team Members" subTitle="Our Master Chefs" />
      <Grid columns={4} spacing="lg">
        {TEAM.map((member, i) => (
          <TeamCard key={i}>
            <TeamImageWrapper>
              <TeamImage src={member.img} alt={member.name} />
            </TeamImageWrapper>
            <TeamName>{member.name}</TeamName>
            <TeamRole>{member.role}</TeamRole>
            <TeamSocials className="team-socials">
              <TeamSocialIcon>
                <FacebookIcon width={20} height={20} />
              </TeamSocialIcon>
              <TeamSocialIcon>
                <XTwitterIcon width={20} height={20} />
              </TeamSocialIcon>
              <TeamSocialIcon>
                <InstagramIcon width={20} height={20} />
              </TeamSocialIcon>
            </TeamSocials>
          </TeamCard>
        ))}
      </Grid>
    </Container>
  </Section>
);

export default Team;
