import styled from "styled-components";

const StyledModal = styled.dialog`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  margin: 0 auto;
  background: rgba(18, 18, 20, 0.5);
  border: 0;
  padding: 0;

  > div {
    background-color: var(--grey-95);
    border-radius: var(--radius-default);
    width: 90%;
    max-width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: var(--font-family-1);
  }

  > div > div {
    width: 100%;
    background-color: var(--color-grey-2);
    border-radius: (--radius-1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-top-left-radius: var(--radius-1);
    border-top-right-radius: var(--radius-1);
    position: relative;
  }

  .modal__closeBtn {
    font-size: var(--title-1);
    color: var(--color-grey-1);
    position: absolute;
    top: 0;
    right: 28px;
  }

  .modal__closeBtn:hover {
    cursor: pointer;
  }

  .tech__controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .tech__controls > button {
    width: fit-content;
  }

  @media screen and (min-width: 400px) {
    > div {
      max-width: 400px;
    }
  }
`;

export default StyledModal;
