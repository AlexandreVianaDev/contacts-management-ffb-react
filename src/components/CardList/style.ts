import { styled } from "styled-components";

export const StyledCardList = styled.ul`
  /* background-color: var(--grey-70); */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  padding: 16px;
  align-items: center;
  justify-content: center;
  color: var(--grey-80);

  @media (min-width: 600px) {
    gap: 16px;
  }
`;
