import styled from "styled-components";

export const SectionSelect = styled.section`
  display: flex;
  justify-content: center;
  gap: 10px;
  position: relative;
  cursor: pointer;
  width: 70%;
  max-width: 410px;
  border-radius: var(--radius-default);
  padding: 22px 20px;
  background-color: var(--grey-100);

  @media (min-width: 500px) {
    width: 60%;
  }
`;
export const SelectField = styled.select`
  -webkit-appearance: none;
  cursor: pointer;
  max-width: 410px;
  width: 60%;
  border: 1px solid var(--grey-100);
  font-size: var(--text-1);
  font-weight: var(--Regular);

  &:focus {
    outline: 0;
  }
`;
export const ArrowDownImage = styled.img`
  position: absolute;
  right: 9px;
  top: 50%;
`;

export const SignUpBtn = styled.button`
  background-color: var(--color-secondary);
  color: var(--grey-100);
  width: 100%;
  border: none;
  border-radius: var(--radius-defaut);
  font-size: var(--input-fontSize);
`;
