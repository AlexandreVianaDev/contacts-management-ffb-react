import { ReactNode } from "react";
import { UserProvider } from "./UserContext";
import { ContactProvider } from "./ContactContext";

interface iChildren {
  children: ReactNode;
}

export const Providers = ({ children }: iChildren) => (
  <UserProvider>
    <ContactProvider>{children}</ContactProvider>
  </UserProvider>
);
