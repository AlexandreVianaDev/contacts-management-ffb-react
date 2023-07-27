import { useContext } from "react";
import { FormRegister } from "../../components/FormRegister";
import { Loader } from "../../components/Loader";
import { UserContext } from "../../providers/UserContext";
import { DivForm, MainContainer } from "../Login/style";
import Logo from "../../components/Logo";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const { loading, user } = useContext(UserContext);

  const navigate = useNavigate();

  user && navigate("/dashboard");

  return (
    <MainContainer>
      {loading ? <Loader /> : null}
      <Logo />
      <DivForm>
        <FormRegister />
      </DivForm>
    </MainContainer>
  );
};
