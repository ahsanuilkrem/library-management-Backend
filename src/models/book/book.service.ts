import AppError from "../../errorHelpers/AppError";
import { IBook } from "./book.interfaces";
import { Book } from "./book.model";
import httpStatus from "http-status-codes"



const createBook = async (data: IBook) => {

  const existing = await Book.findOne({ isbn: data.isbn });
  if (existing) {
    throw new AppError(httpStatus.BAD_REQUEST, "Book Alrader Exist")

  }

  const newBook = await Book.create(data);
  return newBook;
}

const getAllBooks = async (query: Record<string, string>) => {

  const filter = query
  const sort = query.sort || "-createdAt"
  const limit = Number(query.limit) || 10

  const excludeField = ["sort", "limit"]

  for (const field of excludeField) {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete filter[field]
  }

  const allBooks = await Book.find(filter).sort(sort).limit(limit);
  const totalBook = await Book.countDocuments()
  return {
    data: allBooks,
    meta: {
      total: totalBook
    }
  }
}

const getBookById = async (id: string) => {
  const book = await Book.findById(id)
  return {
    data: book
  };
}

const updateBook = async (id: string, payload: Partial<IBook>) => {
  console.log()
  const existingBook = await Book.findById(id);

  if (!existingBook) {
    throw new Error("Book not found.");
  }

  return Book.findByIdAndUpdate(id, payload, { new: true });
}

const deleteBook = async (id: string) => {
  return await Book.findByIdAndDelete(id);
 
}

export const BookService = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook
};

