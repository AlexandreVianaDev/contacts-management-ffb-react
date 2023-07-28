import { useContext } from "react";
import { ContactContext, iContact } from "../../providers/ContactContext";
import { StyledSmallButton } from "../Buttons/style";
import { StyledCardProfile, StyledCardProfileName } from "./style";
import { UserContext, iUser } from "../../providers/UserContext";

export interface iCardProps {
  contact: iContact | iUser;
  type: string;
}

const Profile = ({ contact, type }: iCardProps) => {
  const { deleteContact, setModal, setContactEdit } =
    useContext(ContactContext);

  const { deleteUser } = useContext(UserContext);

  const handleOpenModalEditContact = (id: number) => {
    console.log(id);
    setModal("editContact");
    setContactEdit(contact);
  };

  const handleOpenModalEditUser = (id: number) => {
    console.log(id);
    setModal("editUser");
  };

  return (
    <>
      <StyledCardProfile>
        <ul>
          <StyledCardProfileName>{contact.name}</StyledCardProfileName>
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
      </StyledCardProfile>
    </>
  );
};

export default Profile;
