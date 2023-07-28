import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Modal from "../Modal";
import { ContactContext } from "../../providers/ContactContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledButton } from "../Buttons/style";
import {
  DivForm,
  ErrorStyled,
  FormStyled,
  InputField,
  InputStyled,
  LabelStyled,
  TitleForm,
} from "../Forms/style";

import { UserContext } from "../../providers/UserContext";
import formEditUserSchema from "./schema";
import { iEditUser } from "./types";

export const ModalEditUser = () => {
  const { setModal } = useContext(ContactContext);

  const { user, updateUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEditUser>({
    resolver: zodResolver(formEditUserSchema),
    defaultValues: {
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
    },
  });

  const handleCloseModal = () => {
    setModal("");
  };

  const handleEditUser: SubmitHandler<iEditUser> = (data) => {
    updateUser(data, user!.id);
    handleCloseModal();
  };

  return (
    <>
      <Modal>
        <DivForm>
          <div>
            <TitleForm className="title-3">Editar contato</TitleForm>
            <span className="modal__closeBtn" onClick={handleCloseModal}>
              x
            </span>
          </div>
          <FormStyled className="form" onSubmit={handleSubmit(handleEditUser)}>
            <InputField>
              <LabelStyled htmlFor="name">Nome</LabelStyled>

              <InputStyled
                type="text"
                placeholder="Nome do contato"
                {...register("name")}
              />
              {errors.name && <ErrorStyled>{errors.name.message}</ErrorStyled>}
            </InputField>
            <InputField>
              <LabelStyled htmlFor="email">Email</LabelStyled>

              <InputStyled
                type="email"
                placeholder="Email do contato"
                {...register("email")}
              />
              {errors.email && (
                <ErrorStyled>{errors.email.message}</ErrorStyled>
              )}
            </InputField>
            <InputField>
              <LabelStyled htmlFor="phone">Telefone</LabelStyled>

              <InputStyled
                type="text"
                placeholder="Telefone do contato"
                {...register("phone")}
              />
              {errors.phone && (
                <ErrorStyled>{errors.phone.message}</ErrorStyled>
              )}
            </InputField>

            <StyledButton>Atualizar</StyledButton>
          </FormStyled>
        </DivForm>
      </Modal>
    </>
  );
};
