import { AxiosError } from "axios";
import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from "react";
import { SubmitHandler } from "react-hook-form";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { iLoginFormValues } from "../components/FormLogin/types";
import { UserContext } from "./UserContext";

interface iContactProvider {
  children: ReactNode;
}

export interface iContact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface iContactWithoutId {
  name: string;
  email: string;
  phone: string;
}

interface iContactContext {
  contactsList: iContact[] | null | undefined;
  createContact: (props: iContactWithoutId) => void;
  updateContact: (data: iContactWithoutId, contactId: number) => void;
  deleteContact: (id: number) => void;
  modalIsOpen: boolean;
  setModalIsOpen: (props: boolean) => void;
  modal: string;
  setModal: (props: string) => void;
  setContactEdit: (props: number) => void;
  contactEdit: iContact;
}

export const ContactContext = createContext<iContactContext>(
  {} as iContactContext
);

export const ContactProvider = ({ children }: iContactProvider) => {
  const [contactsList, setContactsList] = useState<
    iContact[] | null | undefined
  >(null);

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modal, setModal] = useState<string>("");
  const [contactEdit, setContactEdit] = useState<iContact | null>(null);

  const { token, setLoading } = useContext(UserContext);

  useEffect(() => {
    const getContactList = () => {
      const userToken = localStorage.getItem("@TOKEN");

      if (userToken) {
        const requestContactList = async () => {
          try {
            setLoading(true);
            const response = await api.get<iContact[]>(`/contacts`, {
              headers: {
                Authorization: `Bearer ${userToken}`,
              },
            });
            setContactsList(response.data);
          } catch (error) {
            const currentError = error as AxiosError;
            toast.error("Erro ao buscar lista de contatos!");
          } finally {
            setLoading(false);
          }
        };
        requestContactList();
      }
    };
    getContactList();
  }, []);

  const createContact: SubmitHandler<iLoginFormValues> = async (data) => {
    try {
      setLoading(true);
      const response = await api.post<iContact | null>("/contacts", data, {
        headers: {
          Authorization: `Bearer: ${token}`,
        },
      });
      setContactsList([...contactsList, response.data]);
      toast.success("Contato criado com sucesso!");
    } catch (error) {
      toast.error("Erro ao criar contato!");
    } finally {
      setLoading(false);
    }
  };

  const updateContact: SubmitHandler<iLoginFormValues> = async (
    data,
    contactId
  ) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      setLoading(true);
      const response = await api.patch(`/contacts/${contactId}`, data, {
        headers: {
          Authorization: `Bearer: ${token}`,
        },
      });
      const contactsFiltred = contactsList?.filter(
        (contact) => contact.id !== contactId
      );
      setContactsList([...contactsFiltred, response.data]);
      toast.success("Contato atualizado com sucesso!");
    } catch (error) {
      toast.error("Erro ao atualizar contato!");
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (contactId: number | undefined) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      setLoading(true);
      await api.delete(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer: ${token}`,
        },
      });
      const contactsFiltred = contactsList?.filter(
        (contact) => contact.id !== contactId
      );
      setContactsList(contactsFiltred);
      toast.success("Contato deletado com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao deletar contato!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        contactsList,
        createContact,
        updateContact,
        deleteContact,
        modalIsOpen,
        setModalIsOpen,
        modal,
        setModal,
        contactEdit,
        setContactEdit,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
