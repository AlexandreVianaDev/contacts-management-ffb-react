import styled from "styled-components";

export const StyledLogo = styled.h1`
  font-size: var(--logo-mobile);
  color: var(--grey-100);
  margin: 20px 0;
  text-align: center;

  > span {
    color: var(--grey-90);
    font-weight: var(--Bold);
  }

  @media (min-width: 600px) {
    text-align: left;
  }
`;
