import { useContext } from "react";
import { Header } from "../../components/Header";
import { Loader } from "../../components/Loader";
import { UserContext } from "../../providers/UserContext";
import { ContactContext } from "../../providers/ContactContext";
import Card from "../../components/Card";
import CardList from "../../components/CardList";
import { StyledContainer } from "../../styles/container";

export const Dashboard = () => {
  const { loading } = useContext(UserContext);
  const { contactsList } = useContext(ContactContext);

  return (
    <>
      {loading ? <Loader /> : null}
      <Header />
      <StyledContainer>
        <CardList>
          {contactsList &&
            contactsList?.map((contact) => (
              <Card key={contact.id} contact={contact} />
            ))}
        </CardList>
      </StyledContainer>
    </>
  );
};
