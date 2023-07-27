import { useContext } from "react";
import { ContactContext, iContact } from "../../providers/ContactContext";
import { StyledSmallButton } from "../Button/style";
import { StyledCard } from "./style";

export interface ContactProps {
  contact: iContact;
}

const Card = ({ contact }: ContactProps) => {
  const { deleteContact } = useContext(ContactContext);

  return (
    <>
      <StyledCard>
        <ul>
          <li>{contact.name}</li>
          <li>{contact.email}</li>
          <li>{contact.phone}</li>
          <li>
            <StyledSmallButton>Editar</StyledSmallButton>
            <StyledSmallButton onClick={() => deleteContact(contact.id)}>
              Excluir
            </StyledSmallButton>
          </li>
        </ul>
      </StyledCard>
    </>
  );
};

export default Card;
