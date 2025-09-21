
import { z } from "zod";

export const createBorrowSchema = z.object({
  bookId: z.string(),
  quantity: z.number().int().positive(),
  dueDate: z.coerce.date(), 
});