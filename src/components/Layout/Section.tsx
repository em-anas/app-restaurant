import { StyledSection } from "./styles";
import type { SectionProps } from "./types";

export const Section: React.FC<SectionProps> = ({
  children,
  background = "white",
  padding = "lg",
  id = "section",
}) => {
  return (
    <StyledSection id={id} background={background} padding={padding}>
      {children}
    </StyledSection>
  );
};
