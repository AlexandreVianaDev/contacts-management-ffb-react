import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./styles/globalStyles";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "./components/Loader";
import { UserContext } from "./providers/UserContext";
import { useContext } from "react";

const App = () => {
  const { loading } = useContext(UserContext);
  return (
    <>
      <GlobalStyle />
      {loading ? <Loader /> : null}

      <AppRoutes />
      <ToastContainer
        autoClose={2000}
        position="top-right"
        closeOnClick
        pauseOnHover
      />
    </>
  );
};

export default App;
