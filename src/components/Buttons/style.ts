import { styled } from "styled-components";

export const StyledButton = styled.button`
  background-color: var(--color-terciary);
  border: none;
  border-radius: var(--radius-default);
  color: var(--grey-100);
  font-size: var(--input-fontSize);
  padding: 20px 20px;
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
`;

export const StyledSmallButton = styled(StyledButton)`
  padding: 8px 8px;
`;

export const StyledIconButton = styled(StyledSmallButton)`
  font-size: var(--title-1);
  max-width: fit-content;
  background-color: var(--color-secondary);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  padding: 0 8px;
  position: absolute;
  top: 8px;
  right: 0;

  &:hover {
    transition: 0.6s;
    background-color: var(--color-primary);
  }
`;
