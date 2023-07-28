import { useContext } from "react";
import { FormRegister } from "../../components/FormRegister";
import { UserContext } from "../../providers/UserContext";
import { MainContainer } from "../Login/style";
import Logo from "../../components/Logo";
import { useNavigate } from "react-router-dom";
import { DivForm } from "../../components/Forms/style";

export const Register = () => {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  user && navigate("/dashboard");

  return (
    <MainContainer>
      <Logo />
      <DivForm>
        <FormRegister />
      </DivForm>
    </MainContainer>
  );
};
