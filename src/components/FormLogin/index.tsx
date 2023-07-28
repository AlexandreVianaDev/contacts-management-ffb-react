import { useForm } from "react-hook-form";
import { iLoginFormValues } from "./types";
import { loginFormSchema } from "./schema";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import {
  ButtonsDiv,
  ErrorStyled,
  FormStyled,
  InputField,
  InputStyled,
  LabelStyled,
  TitleForm,
} from "../Forms/style";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledButton } from "../Buttons/style";
import { StyledLink } from "../Link/style";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { login } = useContext(UserContext);

  return (
    <FormStyled onSubmit={handleSubmit(login)}>
      <TitleForm>Login</TitleForm>

      <InputField>
        <LabelStyled htmlFor="email">Email</LabelStyled>

        <InputStyled
          type="email"
          placeholder="Digite seu email"
          {...register("email")}
        />
        {errors.email && <ErrorStyled>{errors.email.message}</ErrorStyled>}
      </InputField>

      <InputField>
        <LabelStyled htmlFor="password">Senha </LabelStyled>
        <InputStyled
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        {errors.password && (
          <ErrorStyled>{errors.password.message}</ErrorStyled>
        )}
      </InputField>

      <ButtonsDiv>
        <StyledButton type="submit" className="loginBtn">
          Entrar
        </StyledButton>

        <StyledLink to="/register" className="signUpLink">
          Cadastre-se
        </StyledLink>
      </ButtonsDiv>
    </FormStyled>
  );
};
