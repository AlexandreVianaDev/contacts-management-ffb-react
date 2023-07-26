import { FormLogin } from "../../components/FormLogin";
import { DivForm, MainContainer } from "./style";
import { Loader } from "../../components/Loader";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import Logo from "../../components/Logo";

export const Login = () => {
  const { loading } = useContext(UserContext);

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
