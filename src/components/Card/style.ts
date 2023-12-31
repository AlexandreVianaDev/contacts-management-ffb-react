import { styled } from "styled-components";

export const StyledCard = styled.li`
  min-width: 170px;
  background-color: var(--grey-100);
  border-radius: var(--radius-default);
  padding: 16px;

  > ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  > ul > li:last-child {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    min-width: 225px;
  }
`;

export const StyledCardName = styled.li`
  font-weight: var(--Bold);
  font-size: var(--body);
`;
