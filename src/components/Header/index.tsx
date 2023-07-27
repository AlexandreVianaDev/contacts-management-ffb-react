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
            <li>Contacts</li>
            <li>Profile</li>
            <li>All Users</li>
          </ul>
        </StyledContainer>
      </ContainerBot>
    </ContainerHeader>
  );
};
