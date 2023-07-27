import { styled } from "styled-components";

export const StyledCard = styled.li`
  background-color: var(--grey-90);
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
`;
