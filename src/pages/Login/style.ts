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
    gap: 40px;
    padding-bottom: 0;
  }
`;
