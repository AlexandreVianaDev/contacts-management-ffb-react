import { useContext } from "react";
import { FormRegister } from "../../components/FormRegister";
import { Loader } from "../../components/Loader";
import { UserContext } from "../../providers/UserContext";
import { DivForm, MainContainer } from "../Login/style";
import Logo from "../../components/Logo";

export const Register = () => {
  const { loading } = useContext(UserContext);

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
