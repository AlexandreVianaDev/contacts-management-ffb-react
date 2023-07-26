import { useContext } from "react";
import { useForm } from "react-hook-form";
import { DivSignUpLink } from "../../pages/Login/style";
import { UserContext } from "../../providers/UserContext";
import {
  ErrorStyled,
  FormStyled,
  InputField,
  InputStyled,
  LabelStyled,
  TitleForm,
} from "../../styles/form";
import { registerFormSchema } from "./schema";
import { useNavigate } from "react-router-dom";
import { SignUpBtn } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { iRegisterFormValues } from "./types";

export const FormRegister = () => {
  const navigate = useNavigate();

  const returnBtn: () => void = () => {
    navigate("/");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
  });

  const { createUser } = useContext(UserContext);
  return (
    <FormStyled onSubmit={handleSubmit(createUser)}>
      <TitleForm>Cadastro</TitleForm>
      <InputField>
        <LabelStyled>
          Nome<span></span>
        </LabelStyled>
        <InputStyled
          type="text"
          placeholder="Digite seu nome"
          {...register("name")}
        />
        {errors.name && <ErrorStyled>{errors.name.message}</ErrorStyled>}
      </InputField>
      <InputField>
        <LabelStyled>
          Email<span></span>
        </LabelStyled>
        <InputStyled
          type="email"
          placeholder="Digite seu email"
          {...register("email")}
        />
        {errors.email && <ErrorStyled>{errors.email.message}</ErrorStyled>}
      </InputField>
      <InputField>
        <LabelStyled>
          Senha<span></span>
        </LabelStyled>
        <InputStyled
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        {errors.password && (
          <ErrorStyled>{errors.password.message}</ErrorStyled>
        )}
      </InputField>
      <InputField>
        <LabelStyled>
          Confirmar senha<span></span>
        </LabelStyled>
        <InputStyled
          type="password"
          placeholder="Confirme sua senha"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <ErrorStyled>{errors.confirmPassword.message}</ErrorStyled>
        )}
      </InputField>
      <InputField>
        <LabelStyled>
          Telefone<span></span>
        </LabelStyled>
        <InputStyled
          type="text"
          placeholder="Digite seu Telefone"
          {...register("phone")}
        />
        {errors.phone && <ErrorStyled>{errors.phone.message}</ErrorStyled>}
      </InputField>

      <DivSignUpLink>
        <SignUpBtn className="signUpBtn" type="submit">
          Cadastrar
        </SignUpBtn>
      </DivSignUpLink>
      <span
        onClick={() => {
          returnBtn();
        }}
      >
        Voltar
      </span>
    </FormStyled>
  );
};
