import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-bottom: 32px;

  @media (min-width: 800px) {
    gap: 40px;
    padding-bottom: 0;
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

  @media (min-width: 800px) {
    width: 50%;
  }
`;
