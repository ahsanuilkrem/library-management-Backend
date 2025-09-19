import { Borrow } from "./borrow.model";
import { IBorrow } from "./borrow.interface";
import { Book } from "../book/book.model";


const   createBorrow = async (data: IBorrow) => {
    const book = await Book.findById(data.bookId);

    if (!book) throw new Error("Book not found");
    if (!book.available || book.copies < data.quantity) {
      throw new Error("Not enough copies available");
    }

    book.copies -= data.quantity;
    if (book.copies === 0) {
      book.available = false;
    }
    await book.save();

    const borrow = await Borrow.create(data);
    return borrow;
  }

 const getAllBorrows = async () => {
    return Borrow.find().populate("book");
  }

const  getBorrowSummary = async () => {
    return Borrow.aggregate([
      {
        $group: {
          _id: "$book",
          totalQuantity: { $sum: "$quantity" },
        },
      },
      {
        $lookup: {
          from: "books",
          localField: "_id",
          foreignField: "_id",
          as: "bookDetails",
        },
      },
      {
        $unwind: "$bookDetails",
      },
      {
        $project: {
          _id: 0,
          bookTitle: "$bookDetails.title",
          isbn: "$bookDetails.isbn",
          totalQuantity: 1,
        },
      },
    ]);
  }


export const BorrowService = {
        createBorrow,
        getAllBorrows,
        getBorrowSummary
}