import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  background-color: var(--color-terciary);
  color: var(--grey-100);
  border-radius: var(--radius-default);
  font-size: var(--input-fontSize);

  cursor: pointer;
  padding: 20px 20px;
  border-radius: var(--radius-default);
  width: 85%;
  display: flex;
  justify-content: center;
  background-color: var(--color-terciary);

  &:hover {
    transition: 0.6s;
    background-color: var(--color-secondary);
  }
  &:hover .signUpLink,
  &:hover .signUpBtn {
    transition: 0.6s;
    background-color: var(--color-secondary);
  }

  @media (min-width: 500px) {
    width: 70%;
  }
`;
