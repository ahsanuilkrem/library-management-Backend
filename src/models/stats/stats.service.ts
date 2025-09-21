import { Book } from "../book/book.model";
import { Borrow } from "../borrow/borrow.model";

 const BorrowsAggregate = async () => {
     const [borrowAgg] = await Borrow.aggregate([
          {
            $group: {
              _id: null,
              totalBorrowedQuantity: { $sum: "$quantity" },
              totalBorrowRecords: { $sum: 1 },
            },
          },
        ]);

         const [booksAgg] = await Book.aggregate([
              {
                $group: {
                  _id: null,
                  totalBooks: { $sum: 1 },
                  totalCopies: { $sum: "$copies" },
                },
              },
            ]);

    const data = {
      totalBorrowedQuantity: borrowAgg?.totalBorrowedQuantity || 0,
      totalBorrowRecords: borrowAgg?.totalBorrowRecords || 0,
      totalBooks: booksAgg?.totalBooks || 0,
      totalCopies: booksAgg?.totalCopies || 0,
    };
      return data;
  }


  export const BorrowStats = {
        
        BorrowsAggregate,
       
}