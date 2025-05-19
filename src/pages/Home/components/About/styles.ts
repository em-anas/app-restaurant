import styled from "styled-components";
import { MEDIA_QUERIES } from "../../../../constants";
import { Card } from "../../../../components";

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.5rem;
  width: 340px;

  & > *:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
    aspect-ratio: 1/1;
    width: 100%;
    height: 100%;
  }

  & > *:nth-child(2) {
    grid-column: 2;
    grid-row: 1;
    aspect-ratio: 1/1;
    width: 100%;
    height: 75%;
    justify-self: end;
    align-self: end;
  }

  & > *:nth-child(3) {
    grid-column: 1;
    grid-row: 2;
    aspect-ratio: 1/1;
    width: 100%;
    height: 75%;
    justify-self: start;
    align-self: start;
  }

  & > *:nth-child(4) {
    grid-column: 2;
    grid-row: 2;
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    justify-self: end;
    align-self: end;
  }

  @media (max-width: 900px) {
    width: 210px;
    gap: 0.5rem;
  }
`;

export const AboutImage = styled.img<{ area?: string }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  ${({ area }) => area && `grid-area: ${area};`}
`;

export const AboutContent = styled.div`
  flex: 1 1 400px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const StatsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
  justify-content: center;
`;

export const StatCard = styled(Card)`
  background: var(--color-white);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 1.25rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 120px;

  &:hover {
    background: var(--color-white);
    cursor: default;
  }
`;

export const TitleContainer = styled.p`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;

  ${MEDIA_QUERIES.SMALL_DESKTOP} {
    flex-direction: column;
    align-items: center;
  }
`;
