import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Modal from "../Modal";
import { ContactContext } from "../../providers/ContactContext";
import { zodResolver } from "@hookform/resolvers/zod";
import formEditContactSchema from "./schema";
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
import { iEditContact } from "./types";

export const ModalEditContact = () => {
  const { setModal, contactEdit, updateContact } = useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEditContact>({
    resolver: zodResolver(formEditContactSchema),
    defaultValues: {
      name: contactEdit?.name,
      email: contactEdit?.email,
      phone: contactEdit?.phone,
    },
  });

  const handleCloseModal = () => {
    setModal("");
  };

  const handleEditContact: SubmitHandler<iEditContact> = (data) => {
    if (contactEdit) {
      updateContact(data, contactEdit?.id);
    }
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
          <FormStyled
            className="form"
            onSubmit={handleSubmit(handleEditContact)}
          >
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
