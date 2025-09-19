import { NextFunction, Request, Response, Router } from "express";
import { BookController } from "./book.controler";
import { ZodObject, ZodRawShape } from "zod";
import { createBookSchema, updateBookSchema } from "./book.validation";

type AnyZodObject = ZodObject<ZodRawShape>;

const validateRequest = (zodSchema: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {
   try {
     req.body = await zodSchema.parseAsync(req.body)
      next()
   } catch (error) {
     next(error)
   }
}

const router = Router()

router.post("/create", validateRequest(createBookSchema), BookController.createBook);
router.get("/", BookController.getAllBooks);
router.get("/:id", BookController.getBookById);
router.patch("/:id", validateRequest(updateBookSchema), BookController.updateBook);
router.delete("/:id", BookController.deleteBook);


export const bookRoutes = router










