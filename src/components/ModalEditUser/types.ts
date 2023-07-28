import { z } from "zod";
import formEditUserSchema from "./schema";

export type iEditUser = z.infer<typeof formEditUserSchema>;
