import { useContext } from "react";
import { ContactContext, iContact } from "../../providers/ContactContext";
import { useForm } from "react-hook-form";
import Modal from "../Modal";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ErrorStyled,
  FormStyled,
  InputField,
  InputStyled,
  LabelStyled,
  TitleForm,
} from "../../styles/form";
import { StyledButton } from "../Button/style";
import formCreateContactSchema from "./schema";

export const ModalCreateContact = () => {
  const { modal, setModal, setModalIsOpen, createContact } =
    useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formCreateContactSchema),
  });

  const handleCloseModal = () => {
    setModal("")
    setModalIsOpen(false);
  };

  const handleCreateContact = (data: iContact) => {
    createContact(data);
    handleCloseModal();
  };

  return (
    <>
      <Modal>
        <div>
          <TitleForm className="title-3">Cadastrar Contato</TitleForm>
          <span className="modal__closeBtn" onClick={handleCloseModal}>
            x
          </span>
        </div>
        <FormStyled
          className="form"
          onSubmit={handleSubmit(handleCreateContact)}
        >
          <InputField>
            <LabelStyled htmlFor="name">Nome</LabelStyled>

            <InputStyled
              type="text"
              placeholder="Digite o nome do contato"
              {...register("name")}
            />
            {errors.name && <ErrorStyled>{errors.name.message}</ErrorStyled>}
          </InputField>
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
            <LabelStyled htmlFor="email">Email</LabelStyled>

            <InputStyled
              type="text"
              placeholder="Digite o telefone do contato"
              {...register("phone")}
            />
            {errors.phone && <ErrorStyled>{errors.phone.message}</ErrorStyled>}
          </InputField>
          <StyledButton>Cadastrar Contato</StyledButton>
        </FormStyled>
      </Modal>
    </>
  );
};
