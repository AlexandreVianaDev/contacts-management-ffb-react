import { AxiosError } from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { iLoginFormValues } from "../components/FormLogin/types";
import { api } from "../services/api";
import { toast } from "react-toastify";
// import { z } from "zod";
import { iRegisterFormValues } from "../components/FormRegister/types";
import { iRequestError } from "../services/types";

interface iUserProvider {
  children: ReactNode;
}

export interface iUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
}

interface iUserContext {
  token: string | null;
  user: iUser | null;
  setUser: (props: iUser) => void;
  login: SubmitHandler<iLoginFormValues>;
  createUser: SubmitHandler<iRegisterFormValues>;
  handleLogout: () => void;
  updateUser: (data: iUser, id: number) => void;
  deleteUser: (id: number) => void;
  loading: boolean;
  setLoading: (props: boolean) => void;
  usersList: iUser[] | null;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserProvider) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [usersList, setUsersList] = useState<iUser[] | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const autoLogin = () => {
      const userToken = localStorage.getItem("@TOKEN");

      if (userToken) {
        const userAuthorization = async () => {
          try {
            setLoading(true);
            const response = await api.get<iUser>(`/login`, {
              headers: {
                Authorization: `Bearer ${userToken}`,
              },
            });
            setToken(userToken);
            setUser(response.data);
            getUsersList();
            // navigate("/dashboard");
          } catch (error) {
            const currentError = error as AxiosError;
          } finally {
            setLoading(false);
          }
        };
        userAuthorization();
      }
    };
    autoLogin();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    return navigate("/");
  };

  const getUsersList = async () => {
    const tokenLS = localStorage.getItem("@TOKEN");

    try {
      setLoading(true);
      const response = await api.get<iUser[]>(`/users`, {
        headers: {
          Authorization: `Bearer ${tokenLS}`,
        },
      });
      setUsersList(response.data);
    } catch (error) {
      const currentError = error as AxiosError<iRequestError>;
      toast.error("Erro ao tentar recuperar a lista de usuários");
    } finally {
      setLoading(false);
    }
  };

  const login: SubmitHandler<iLoginFormValues> = async (data) => {
    try {
      setLoading(true);
      console.log(data);
      const response = await api.post("/login", data);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.token);
      toast.success("Login feito com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Erro no login!");
    } finally {
      setLoading(false);
    }
  };

  const createUser: SubmitHandler<iRegisterFormValues> = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/users", data);
      toast.success("Cadastro feito com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error("Erro ao cadastrar");
    } finally {
      setLoading(false);
      // navigate("/");
    }
  };

  const updateUser: SubmitHandler<iUser> = async (data, id) => {
    try {
      setLoading(true);
      const response = await api.patch(`/users/${id}`, data, {
        headers: {
          Authorization: `Bearer: ${token}`,
        },
      });
      setUser(response.data);
      toast.success("Perfil atualizado feito com sucesso!");
    } catch (error) {
      toast.error("Erro ao atualizar o perfil!");
    } finally {
      setLoading(false);
      // navigate("/");
    }
  };

  const deleteUser = async (id: number | undefined) => {
    const teacherToken = localStorage.getItem("@TOKEN");

    try {
      setLoading(true);
      await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer: ${teacherToken}`,
        },
      });
      toast.success("Sua conta foi deletada com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao deletar conta!");
    } finally {
      setLoading(false);
      localStorage.clear();
      navigate("/");
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
        createUser,
        updateUser,
        deleteUser,
        handleLogout,
        token,
        loading,
        setLoading,
        usersList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
