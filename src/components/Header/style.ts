import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerHeader = styled.header`
  background-color: var(--color-secondary);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--grey-100);
`;

export const ContainerTop = styled.section`
  background-color: var(--color-secondary);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--grey-100);

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ContainerBot = styled.section`
  background-color: var(--color-primary);
  width: 100%;

  > div > ul {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
  }
`;

export const ContainerLogo = styled.div`
  padding: 4px 0;
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;

  @media (min-width: 769px) {
    position: relative;
  }
`;

export const ContainerControl = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
  align-items: center;
  gap: 48px;

  @media (min-width: 600px) {
    /* position: relative; */
    justify-content: right;
    gap: 32px;
  }
`;

export const ContainerLogout = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px 0;

  img:hover {
    cursor: pointer;
  }

  && .logoutBtnIcon {
    width: 32px;
  }
`;

export const ContainerUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const StyledLinkHeader = styled(Link)`
  text-decoration: none;
  color: white;

  :hover {
    cursor: pointer;
    font-weight: var(--Bold);
  }
`;
