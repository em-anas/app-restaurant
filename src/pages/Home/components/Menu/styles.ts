import styled from "styled-components";

export const CategoryTabsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  align-items: center;
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;

  svg {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-gray-500);
  }
`;

export const PriceTag = styled.div`
  position: absolute;
  bottom: var(--spacing-md);
  right: var(--spacing-md);
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius);
  font-weight: var(--font-weight-bold);
  z-index: 5;
`;

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 2rem;
  color: var(--color-gray-500);
`;

export const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 400px;
  background-color: var(--color-background);
  box-shadow: var(--shadow-lg);
  z-index: 3000;
  transform: translateX(0);
  transition: transform 0.3s ease-in-out;
`;

export const OverlayContent = styled.div`
  height: 100%;
  overflow-y: auto;
  padding: 1rem;
`;

export const OverlayHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const OverlayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;
