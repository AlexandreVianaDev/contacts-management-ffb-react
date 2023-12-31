import styled from "styled-components";

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

  @media (min-width: 800px) {
    width: 50%;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: var(--radius-default);
  width: 100%;
  position: relative;

  @media (min-width: 500px) {
    gap: 32px;
  }

  > span {
    position: absolute;
    bottom: -20px;
    font-weight: 500;
    color: var(--grey-80);
    user-select: none;
  }

  > span:hover {
    cursor: pointer;
    color: var(--grey-20);
  }
`;

export const TitleForm = styled.h1`
  font-size: var(--title-1);
  font-weight: var(--Bold);
  padding-bottom: 12px;
  text-align: center;
`;

export const InputField = styled.div`
  padding: 18px 18px;
  border-radius: var(--radius-default);
  background-color: var(--grey-100);
  width: 70%;
  max-width: 410px;
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  font-size: var(--text-1);
  font-weight: var(--Medium);
  user-select: none;
  overflow: hidden;
  max-height: 64px;

  @media (min-width: 500px) {
    padding: 22px 18px;
    width: 80%;
    max-height: 20px;
  }
`;

export const ErrorStyled = styled.p`
  display: flex;
  align-items: center;
  color: var(--negative-feedback);
`;

export const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-right: 8px;

  @media (min-width: 500px) {
    max-width: 150px;
    font-size: var(--inputText);
  }
`;

export const InputStyled = styled.input`
  width: 100%;
  max-width: 200px;
  font-size: var(--inputText);
  border: none;
  outline: none;

  :-webkit-autofill {
    box-shadow: 0 0 0px 1000px white inset;
  }

  &:focus {
    outline: 0;
  }

  @media (min-width: 500px) {
    max-width: 200px;
    & ::placeholder {
      position: absolute;
      bottom: 0;
      font-size: var(--inputText);
      font-weight: var(--Regular);
    }
  }
`;

export const ButtonsDiv = styled.div`
  width: 87%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  justify-content: space-between;

  > button {
    width: 100%;
  }

  @media (min-width: 500px) {
    width: 75%;
    flex-direction: row;

    > div {
      width: 90%;
    }
  }
`;
