import styled from "styled-components";

export const TeamSection = styled.section`
  background: var(--color-background);
  color: var(--color-secondary);
  padding: 4rem 1rem;
  text-align: center;
  max-width: 1140px;
  margin: 0 auto;
`;

export const TeamHeader = styled.div`
  margin-bottom: 2.5rem;
`;

export const TeamSubtitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const TeamDivider = styled.div`
  width: 45px;
  height: 2px;
  background: var(--color-primary);
  border-radius: 2px;
`;

export const TeamSubtitle = styled.div`
  font-family: "Pacifico", cursive;
  font-size: 20px;
  color: var(--color-primary);
  text-align: center;
`;

export const TeamTitle = styled.h2`
  font-size: 2.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  margin-bottom: 2.5rem;
  color: var(--color-secondary);
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  justify-items: center;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const TeamCard = styled.div`
  background: var(--color-white);
  border-radius: 2px;
  box-shadow: 0px 0px 39.15px rgba(0, 0, 0, 0.08);
  padding: 2.5rem 1.5rem 1.5rem 1.5rem;
  min-width: 220px;
  max-width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: box-shadow 0.2s, border 0.2s;
  &:hover .team-socials {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }
`;

export const TeamImageWrapper = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1.25rem;
  background: var(--color--background);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TeamImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const TeamName = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-secondary);
  margin-bottom: 0.25rem;
  text-align: center;
`;

export const TeamRole = styled.div`
  font-size: 1rem;
  color: var(--color-secondary);
  margin-bottom: 1.25rem;
  text-align: center;
`;

export const TeamSocials = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  opacity: 0;
  pointer-events: none;
  transform: translateY(10px);
  transition: opacity 0.2s, transform 0.2s;
`;

export const TeamSocialIcon = styled.span`
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
  color: var(--color-primary);
  border-radius: 19px 19px 0 0;
  font-size: 1.1rem;
  transition: background 0.2s;
  user-select: none;
  pointer-events: none;
  svg {
    width: 20px;
    height: 20px;
    fill: var(--color-primary);
  }
`;
