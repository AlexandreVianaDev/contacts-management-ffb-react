import { styled } from "styled-components";

export const StyledButton = styled.button`
  background-color: var(--color-terciary);
  color: var(--grey-100);
  border: none;
  border-radius: var(--radius-default);
  font-size: var(--input-fontSize);
  padding: 20px 20px;
  border-radius: var(--radius-default);
  display: flex;
  justify-content: center;

  &:hover {
    transition: 0.6s;
    background-color: var(--color-secondary);
  }
  &:hover .loginBtn {
    transition: 0.6s;
    background-color: var(--color-secondary);
  }

  @media (min-width: 500px) {
    width: 40%;
  }

  &:hover {
    background-color: var(--grey-20);
  }
`;

export const StyledSmallButton = styled.button`
  background-color: var(--color-terciary);
  color: var(--grey-100);
  border: none;
  border-radius: var(--radius-default);
  font-size: var(--input-fontSize);
  padding: 8px 8px;
  border-radius: var(--radius-default);

  &:hover {
    transition: 0.6s;
    background-color: var(--color-secondary);
  }
  &:hover .loginBtn {
    transition: 0.6s;
    background-color: var(--color-secondary);
  }

  @media (min-width: 500px) {
    width: 40%;
  }

  &:hover {
    background-color: var(--grey-20);
  }
`;
