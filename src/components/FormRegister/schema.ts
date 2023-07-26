import z from "zod";

export const registerFormSchema = z
  .object({
    name: z.string().min(1, "Nome obrigatório"),
    email: z.string().min(1, "Email obrigatório").email("Email inválido"),
    phone: z.string().min(8, "Telefone é obrigatório"),
    password: z
      .string()
      .min(8, "Senha obrigatória, deve conter 8 dígitos ou mais")
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Deve ter no mínimo 8 caracteres com letras, números e um símbolo"
      ),
    confirmPassword: z.string().min(1, "Confirme sua senha"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas precisam corresponder",
    path: ["confirmPassword"],
  });
