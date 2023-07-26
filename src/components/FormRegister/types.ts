import { registerFormSchema } from "./schema";
import { z } from "zod";

export type iRegisterFormValues = z.infer<typeof registerFormSchema>;
