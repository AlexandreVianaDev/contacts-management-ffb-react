import { z } from "zod";
import { loginFormSchema } from "./schema";

export type iLoginFormValues = z.infer<typeof loginFormSchema>;
