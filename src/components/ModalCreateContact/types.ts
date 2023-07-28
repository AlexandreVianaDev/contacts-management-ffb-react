import { z } from "zod";
import formCreateContactSchema from "./schema";

export type iCreateContact = z.infer<typeof formCreateContactSchema>;
