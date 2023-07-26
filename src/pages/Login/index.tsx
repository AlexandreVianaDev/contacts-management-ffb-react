import { FormLogin } from "../../components/FormLogin";
import { DivForm, DivSignUpLink, MainContainer, SignUpLink } from "./style";
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
        <p>Não tem uma conta?</p>
        <DivSignUpLink>
          <SignUpLink to="/register" className="signUpLink">
            Cadastre-se
          </SignUpLink>
        </DivSignUpLink>
      </DivForm>
    </MainContainer>
  );
};
