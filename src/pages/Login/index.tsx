import { FormLogin } from "../../components/FormLogin";
import { MainContainer } from "./style";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import Logo from "../../components/Logo";
import { useNavigate } from "react-router-dom";
import { DivForm } from "../../components/Forms/style";

export const Login = () => {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  user && navigate("/dashboard");

  return (
    <MainContainer>
      <Logo />
      <DivForm>
        <FormLogin />
      </DivForm>
    </MainContainer>
  );
};
