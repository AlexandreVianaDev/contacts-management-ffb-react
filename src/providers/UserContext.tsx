import { AxiosError } from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { iLoginFormValues } from "../components/FormLogin/types";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { iRegisterFormValues } from "../components/FormRegister/types";

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

export interface iUserWithoutId {
  name: string;
  email: string;
  phone: string;
}

export interface iUserEditData {
  name: string;
  email: string;
  phone: string;
}

interface iUserContext {
  token: string | null;
  user: iUser | null;
  setUser: (props: iUser) => void;
  login: SubmitHandler<iLoginFormValues>;
  createUser: SubmitHandler<iRegisterFormValues>;
  handleLogout: () => void;
  updateUser: (data: iUserWithoutId, id: number) => void;
  deleteUser: (id: number) => void;
  loading: boolean;
  setLoading: (props: boolean) => void;
  usersList: iUser[] | null;
  getUsersList: () => void;
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
          } catch (error) {
            const currentError = error as AxiosError;
            console.log(currentError);
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
      toast.error("Erro ao tentar recuperar a lista de usuários");
    } finally {
      setLoading(false);
    }
  };

  const login: SubmitHandler<iLoginFormValues> = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/login", data);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.token);
      toast.success("Login feito com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Usuário ou senha incorretos!");
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (data: iUserWithoutId) => {
    try {
      setLoading(true);
      await api.post("/users", data);
      toast.success("Cadastro feito com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error("Erro ao cadastrar");
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (data: iUserEditData, id: number) => {
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
      toast.error("E-mail já existe");
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id: number) => {
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
        getUsersList,
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
