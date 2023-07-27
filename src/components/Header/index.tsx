import LogoutButton from "../../assets/logout-button.svg";
import { useContext } from "react";
import {
  ContainerBot,
  ContainerControl,
  ContainerHeader,
  ContainerLogo,
  ContainerLogout,
  ContainerTop,
  ContainerUserInfo,
  StyledLinkHeader,
} from "./style";
import { UserContext } from "../../providers/UserContext";
import Logo from "../Logo";
import { StyledContainer } from "../../styles/container";

export const Header = () => {
  const { handleLogout, user } = useContext(UserContext);

  return (
    <ContainerHeader>
      <StyledContainer>
        <ContainerTop>
          <ContainerLogo>
            <Logo />
          </ContainerLogo>
          <ContainerControl>
            <ContainerUserInfo>
              <p>{user?.name}</p>
              <p>{user?.email}</p>
            </ContainerUserInfo>
            <ContainerLogout>
              <img
                onClick={handleLogout}
                src={LogoutButton}
                alt=""
                className="logoutBtnIcon"
              />
            </ContainerLogout>
          </ContainerControl>
        </ContainerTop>
      </StyledContainer>
      <ContainerBot>
        <StyledContainer>
          <ul>
            <li>
              <StyledLinkHeader to="/dashboard/contacts">
                Contatos
              </StyledLinkHeader>
            </li>
            <li>
              <StyledLinkHeader to="/dashboard/profile">
                Perfil
              </StyledLinkHeader>
            </li>
            <li>
              <StyledLinkHeader to="/dashboard/allusers">
                Todos os Usuários
              </StyledLinkHeader>
            </li>
          </ul>
        </StyledContainer>
      </ContainerBot>
    </ContainerHeader>
  );
};
