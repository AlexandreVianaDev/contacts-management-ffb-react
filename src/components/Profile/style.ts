import { styled } from "styled-components";

export const StyledCardProfile = styled.li`
  width: 400px;
  max-width: 80vw;
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
`;

export const StyledCardProfileName = styled.li`
  font-weight: var(--Bold);
  font-size: var(--body);
`;
