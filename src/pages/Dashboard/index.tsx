import { useContext } from "react";
import { Header } from "../../components/Header";
import { Loader } from "../../components/Loader";
import { UserContext } from "../../providers/UserContext";

export const Dashboard = () => {
  const { loading } = useContext(UserContext);

  return (
    <>
      {loading ? <Loader /> : null}
      <Header />
    </>
  );
};
