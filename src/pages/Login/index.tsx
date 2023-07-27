import { FormLogin } from "../../components/FormLogin";
import { DivForm, MainContainer } from "./style";
import { Loader } from "../../components/Loader";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import Logo from "../../components/Logo";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { loading, user } = useContext(UserContext);

  const navigate = useNavigate();

  user && navigate("/dashboard");

  return (
    <MainContainer>
      {loading ? <Loader /> : null}
      <Logo />
      <DivForm>
        <FormLogin />
      </DivForm>
    </MainContainer>
  );
};
