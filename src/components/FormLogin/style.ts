import styled from "styled-components";

export const DivLoginBtn = styled.div`
  cursor: pointer;
  padding: 20px 20px;
  border-radius: var(--radius-default);
  width: 70%;
  max-width: 410px;
  display: flex;
  justify-content: center;
  background-color: var(--grey-70);

  &:hover {
    transition: 0.6s;
    background-color: var(--color-primary);
  }
  &:hover .loginBtn {
    transition: 0.6s;
    background-color: var(--color-primary);
  }

  @media (min-width: 500px) {
    width: 60%;
  }
`;

export const LoginBtn = styled.button`
  background-color: var(--grey-70);
  color: var(--grey-100);
  border: none;
  border-radius: var(--radius-default);
  font-size: var(--input-fontSize);
  width: 100%;
  height: 100%;
  outline: none;

  &:hover {
    background-color: var(--grey-20);
  }
`;
