import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.main`
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-bottom: 32px;

  @media (min-width: 800px) {
    flex-direction: row;
    gap: 40px;
    padding-bottom: 0;
  }
`;

export const FigureImgLogo = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  img {
    margin-top: 15px;
    width: 320px;

    @media (min-width: 800px) {
      width: 100%;
      max-width: 500px;
      margin-right: 5vw;
    }
  }
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: var(--grey-90);
  width: 80%;
  max-width: 600px;
  border-radius: var(--radius-default);
  padding: 40px 0;

  p {
    text-align: center;
    font-size: var(--text-2);
    font-weight: var(--Regular);
  }
`;

export const DivSignUpLink = styled.div`
  cursor: pointer;
  padding: 20px 20px;
  border-radius: var(--radius-default);
  width: 70%;
  max-width: 410px;
  display: flex;
  justify-content: center;
  background-color: var(--color-secondary);

  > span {
  }

  &:hover {
    transition: 0.6s;
    background-color: var(--color-terciary);
  }
  &:hover .signUpLink,
  &:hover .signUpBtn {
    transition: 0.6s;
    background-color: var(--color-terciary);
  }

  @media (min-width: 500px) {
    width: 60%;
  }
`;

export const SignUpLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  background-color: var(--color-secondary);
  color: var(--grey-100);
  width: 100%;
  border: none;
  border-radius: var(--radius-defaut);
  font-size: var(--input-fontSize);
  outline: none;
`;
