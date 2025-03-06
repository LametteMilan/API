import { z } from "zod";

export const listCreateSchema = z.object({
  title: z.string().nonempty(),
  position: z.number().int().optional()
});

//C'est moi