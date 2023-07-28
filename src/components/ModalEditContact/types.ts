import { z } from "zod";
import formEditContactSchema from "./schema";

export type iEditContact = z.infer<typeof formEditContactSchema>;
