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
  const { handleLogout, user } = useContext(UserContext);

  return (
    <ContainerHeader>
      <ContainerLogoAndMenu>
        <Logo />
      </ContainerLogoAndMenu>
      <div>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
      </div>
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
