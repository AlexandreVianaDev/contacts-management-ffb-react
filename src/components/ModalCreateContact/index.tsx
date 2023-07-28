import { useContext } from "react";
import { ContactContext } from "../../providers/ContactContext";
import { useForm, SubmitHandler } from "react-hook-form";
import Modal from "../Modal";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DivForm,
  ErrorStyled,
  FormStyled,
  InputField,
  InputStyled,
  LabelStyled,
  TitleForm,
} from "../Forms/style";
import { StyledButton } from "../Buttons/style";
import formCreateContactSchema from "./schema";

import { iCreateContact } from "./types";

export const ModalCreateContact = () => {
  const { setModal, createContact } = useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iCreateContact>({
    resolver: zodResolver(formCreateContactSchema),
  });

  const handleCloseModal = () => {
    setModal("");
  };

  const handleCreateContact: SubmitHandler<iCreateContact> = (data) => {
    createContact(data);
    handleCloseModal();
  };

  return (
    <>
      <Modal>
        <DivForm>
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
              {errors.email && (
                <ErrorStyled>{errors.email.message}</ErrorStyled>
              )}
            </InputField>
            <InputField>
              <LabelStyled htmlFor="phone">Telefone</LabelStyled>

              <InputStyled
                type="text"
                placeholder="Digite o telefone do contato"
                {...register("phone")}
              />
              {errors.phone && (
                <ErrorStyled>{errors.phone.message}</ErrorStyled>
              )}
            </InputField>
            <StyledButton>Cadastrar</StyledButton>
          </FormStyled>
        </DivForm>
      </Modal>
    </>
  );
};
