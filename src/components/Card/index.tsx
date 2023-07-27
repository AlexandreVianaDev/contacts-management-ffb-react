import { useContext } from "react";
import { ContactContext, iContact } from "../../providers/ContactContext";
import { StyledSmallButton } from "../Button/style";
import { StyledCard, StyledCardName } from "./style";
import { UserContext, iUser } from "../../providers/UserContext";

export interface iCardProps {
  contact: iContact | iUser;
  type: string;
}

const Card = ({ contact, type }: iCardProps) => {
  const { deleteContact, setModal, setModalIsOpen, setContactEdit } =
    useContext(ContactContext);

  const { deleteUser } = useContext(UserContext);

  const handleOpenModalEditContact = (id: number) => {
    console.log(id);
    setModal("editContact");
    setModalIsOpen(true);
    setContactEdit(contact);
  };

  const handleOpenModalEditUser = (id: number) => {
    console.log(id);
    setModal("editUser");
    setModalIsOpen(true);
  };

  return (
    <>
      <StyledCard>
        <ul>
          <StyledCardName>{contact.name}</StyledCardName>
          <li>{contact.email}</li>
          <li>{contact.phone}</li>
          {type === "contact" && (
            <li>
              <StyledSmallButton
                onClick={() => handleOpenModalEditContact(contact.id)}
              >
                Editar
              </StyledSmallButton>
              <StyledSmallButton onClick={() => deleteContact(contact.id)}>
                Excluir
              </StyledSmallButton>
            </li>
          )}
          {type === "profile" && (
            <li>
              <StyledSmallButton
                onClick={() => handleOpenModalEditUser(contact.id)}
              >
                Editar
              </StyledSmallButton>
              <StyledSmallButton onClick={() => deleteUser(contact.id)}>
                Excluir
              </StyledSmallButton>
            </li>
          )}
        </ul>
      </StyledCard>
    </>
  );
};

export default Card;
