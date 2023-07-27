import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Loader } from "../../components/Loader";
import { UserContext } from "../../providers/UserContext";
import { ContactContext } from "../../providers/ContactContext";
import Card from "../../components/Card";
import CardList from "../../components/CardList";
import { StyledContainer } from "../../styles/container";
import { useParams } from "react-router-dom";
import { ModalCreateContact } from "../../components/ModalCreateContact";
import { ModalEditContact } from "../../components/ModalEditContact";
import { StyledButton } from "../../components/Button/style";
import { ModalEditUser } from "../../components/ModalEditUser";

export const Dashboard = () => {
  const { loading, usersList, user } = useContext(UserContext);
  const { contactsList, modal, setModal, setModalIsOpen } =
    useContext(ContactContext);

  const [render, setRender] = useState<string | null>("contacts");

  const { subpage } = useParams();

  useEffect(() => {
    subpage && setRender(subpage);
  }, [subpage]);

  const handleOpenModalCreateContact = () => {
    setModal("createContact");
    setModalIsOpen(true);
  };

  return (
    <>
      {loading ? <Loader /> : null}
      <Header />
      <StyledContainer>
        {render === "contacts" && (
          <div>
            <StyledButton onClick={handleOpenModalCreateContact}>
              +
            </StyledButton>
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

          {render === "profile" && user && (
            <Card type="profile" key={user?.id} contact={user} />
          )}
        </CardList>
      </StyledContainer>
      {modal === "createContact" ? <ModalCreateContact /> : null}
      {modal === "editContact" ? <ModalEditContact /> : null}
      {modal === "editUser" ? <ModalEditUser /> : null}
    </>
  );
};
