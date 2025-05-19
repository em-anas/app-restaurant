// Contact Card Styles

import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-md);
`;

export const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: var(--spacing-sm);
`;

export const IconWrapper = styled.div`
  color: var(--color-primary);
  margin-right: var(--spacing-sm);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailText = styled.span`
  font-family: var(--font-main);
  font-size: var(--font-size-medium);
  color: var(--color-gray-600);
`;

// Contact Info

export const ContactInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
`;

// Title Section

export const SectionHeaderContainer = styled.div<{ center: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ center }) => (center ? "center" : "flex-start")};
  margin: var(--spacing-xl) 0;
`;
