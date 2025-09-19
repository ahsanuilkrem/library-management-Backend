import { z } from "zod";


export const GenreEnum = z.enum([
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
]);


export const createBookSchema = z.object ({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  genre: GenreEnum,
  isbn: z.string().min(1, "ISBN is required"),
  description: z.string().optional(),
  copies: z
    .number()
    .int("Copies must be an integer")
    .nonnegative("Copies must be zero or more"),
  available: z.boolean().optional().default(true),

});





export const updateBookSchema = z.object({
  title: z.string().min(1).optional(),
  author: z.string().min(1).optional(),
  genre: GenreEnum.optional(),
  isbn: z.string().min(1).optional(),
  description: z.string().optional(),
  copies: z.number().int().nonnegative().optional(),
  available: z.boolean().optional(),
});
