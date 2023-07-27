import { useContext } from "react";
import { useForm } from "react-hook-form";
import Modal from "../Modal";
import { ContactContext } from "../../providers/ContactContext";
import { zodResolver } from "@hookform/resolvers/zod";
import formEditContactSchema from "./schema";
import { StyledButton } from "../Button/style";
import {
  ErrorStyled,
  FormStyled,
  InputField,
  InputStyled,
  LabelStyled,
  TitleForm,
} from "../../styles/form";
import { DivForm } from "../../pages/Login/style";
import { UserContext } from "../../providers/UserContext";

export const ModalEditUser = () => {
  const { modal, setModal, contactEdit, updateContact } =
    useContext(ContactContext);

  const { user, updateUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formEditContactSchema),
    defaultValues: {
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
    },
  });

  const handleCloseModal = () => {
    setModal("");
    setModalIsOpen(false);
  };

  const handleEditUser = (data) => {
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