import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { UserContext } from "../../providers/UserContext";
import { ContactContext } from "../../providers/ContactContext";
import Card from "../../components/Card";
import CardList from "../../components/CardList";
import { StyledContainer } from "../../styles/container";
import { useParams } from "react-router-dom";
import { ModalCreateContact } from "../../components/ModalCreateContact";
import { ModalEditContact } from "../../components/ModalEditContact";
import { StyledIconButton } from "../../components/Buttons/style";
import { ModalEditUser } from "../../components/ModalEditUser";
import Profile from "../../components/Profile";

export const Dashboard = () => {
  const { usersList, user, getUsersList } = useContext(UserContext);
  const { contactsList, modal, setModal } = useContext(ContactContext);

  const [render, setRender] = useState<string | null>("contacts");

  const { subpage } = useParams();

  useEffect(() => {
    getUsersList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    subpage && setRender(subpage);
  }, [subpage]);

  const handleOpenModalCreateContact = () => {
    setModal("createContact");
  };

  return (
    <>
      <Header />
      <StyledContainer>
        {render === "contacts" && (
          <div>
            <StyledIconButton onClick={handleOpenModalCreateContact}>
              +
            </StyledIconButton>
          </div>
        )}
        <CardList>
          {/* contacts */}
          {render === "contacts" &&
            contactsList &&
            contactsList?.map((contact) => (
              <Card key={contact.id} type="contact" contact={contact} />
            ))}

          {/* users */}
          {render === "allusers" &&
            usersList &&
            usersList?.map((contact) => (
              <Card key={contact.id} type="user" contact={contact} />
            ))}

          {/* profile */}
          {render === "profile" && user && (
            <Profile type="profile" key={user?.id} contact={user} />
          )}
        </CardList>
      </StyledContainer>
      {modal === "createContact" ? <ModalCreateContact /> : null}
      {modal === "editContact" ? <ModalEditContact /> : null}
      {modal === "editUser" ? <ModalEditUser /> : null}
    </>
  );
};
