import { useContext } from "react";
import { Header } from "../../components/Header";
import { Loader } from "../../components/Loader";
import { UserContext } from "../../providers/UserContext";
// import { ContactContext } from "../../providers/ContactContext";

export const Dashboard = () => {
  const { loading } = useContext(UserContext);
  // const {} = useContext(ContactContext);

  return (
    <>
      {loading ? <Loader /> : null}
      <Header />
      {/* <button onClick={}></button> */}
    </>
  );
};
