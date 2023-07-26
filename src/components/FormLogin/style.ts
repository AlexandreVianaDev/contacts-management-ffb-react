import styled from "styled-components";

export const ButtonsDiv = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  justify-content: space-between;

  > button {
    width: 100%;
  }

  @media (min-width: 500px) {
    width: 65%;
    flex-direction: row;

    > div {
      width: 90%;
    }
  }
`;
