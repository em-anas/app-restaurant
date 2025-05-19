import styled from "styled-components";

export const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: var(--spacing-md);
`;

export const BreadcrumbItem = styled.span<{ active?: boolean }>`
  font-family: var(--font-main);
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-normal);
  color: ${({ active }) =>
    active ? "var(--color-primary)" : "var(--color-white)"};
  text-transform: uppercase;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const BreadcrumbDivider = styled.span`
  font-family: var(--font-main);
  font-size: var(--font-size-medium);
  color: rgba(255, 255, 255, 0.5);
  margin: 0 var(--spacing-xs);
`;
