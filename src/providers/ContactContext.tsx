import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
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
  contactsList: iContact[];
  createContact: (data: iContactWithoutId) => void;
  updateContact: (data: iContactWithoutId, contactId: number) => void;
  deleteContact: (contactId: number) => void;
  modal: string;
  setModal: (props: string) => void;
  setContactEdit: (props: iContact) => void;
  contactEdit: iContact | null;
}

export const ContactContext = createContext<iContactContext>(
  {} as iContactContext
);

export const ContactProvider = ({ children }: iContactProvider) => {
  const [contactsList, setContactsList] = useState<iContact[]>(
    [] as iContact[]
  );
  const [modal, setModal] = useState<string>("");
  const [contactEdit, setContactEdit] = useState<iContact | null>(null);

  const { user, setLoading } = useContext(UserContext);

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
            toast.error("Erro ao buscar lista de contatos!");
          } finally {
            setLoading(false);
          }
        };
        requestContactList();
      }
    };
    getContactList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const createContact = async (data: iContactWithoutId) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      setLoading(true);
      const response = await api.post<iContact>("/contacts", data, {
        headers: {
          Authorization: `Bearer: ${token}`,
        },
      });
      setContactsList([response.data, ...contactsList]);
      toast.success("Contato criado com sucesso!");
    } catch (error) {
      toast.error("Erro ao criar contato!");
    } finally {
      setLoading(false);
    }
  };

  const updateContact = async (data: iContactWithoutId, contactId: number) => {
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
      setContactsList([response.data, ...contactsFiltred]);
      toast.success("Contato atualizado com sucesso!");
    } catch (error) {
      toast.error("Erro ao atualizar contato!");
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (contactId: number) => {
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
