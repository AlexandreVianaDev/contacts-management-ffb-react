import { z } from "zod";

const formCreateContactSchema = z.object({
  name: z.string().min(1, "Nome obrigatório"),
  email: z.string().min(1, "Email obrigatório").email("Email inválido"),
  phone: z.string().min(8, "Telefone é obrigatório"),
});

export default formCreateContactSchema;
