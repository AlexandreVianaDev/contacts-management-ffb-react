import LogoutButton from "../../assets/logout-button.svg";
import { useContext } from "react";
import {
  ContainerHeader,
  ContainerLogoAndMenu,
  ContainerLogout,
} from "./style";
import { UserContext } from "../../providers/UserContext";
import Logo from "../Logo";

export const Header = () => {
  const { handleLogout } = useContext(UserContext);

  return (
    <ContainerHeader>
      <ContainerLogoAndMenu>
        <Logo />
      </ContainerLogoAndMenu>
      <ContainerLogout>
        <img
          onClick={handleLogout}
          src={LogoutButton}
          alt=""
          className="logoutBtnIcon"
        />
      </ContainerLogout>
    </ContainerHeader>
  );
};
