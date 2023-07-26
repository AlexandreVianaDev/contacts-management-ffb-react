import styled from "styled-components";

export const StyledLogo = styled.h1`
  font-size: var(--logo-mobile);
  color: var(--color-primary-shadow);
  margin: 20px 0;
  text-align: center;

  > span {
    color: var(--color-primary);
    font-weight: var(--Bold);
  }

  @media (min-width: 600px) {
    font-size: var(--logo);
  }
`;
