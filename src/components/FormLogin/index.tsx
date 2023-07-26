import { useForm } from "react-hook-form";
import { iLoginFormValues } from "./types";
import { loginFormSchema } from "./schema";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import {
  ErrorStyled,
  FormStyled,
  InputField,
  InputStyled,
  LabelStyled,
  TitleForm,
} from "../../styles/form";
import { DivLoginBtn, LoginBtn } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";

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

      <DivLoginBtn>
        <LoginBtn type="submit" className="loginBtn">
          Entrar
        </LoginBtn>
      </DivLoginBtn>
    </FormStyled>
  );
};
