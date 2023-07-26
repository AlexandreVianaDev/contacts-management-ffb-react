import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./styles/globalStyles";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <GlobalStyle />
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
