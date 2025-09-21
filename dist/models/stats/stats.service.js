"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowStats = void 0;
const book_model_1 = require("../book/book.model");
const borrow_model_1 = require("../borrow/borrow.model");
const BorrowsAggregate = () => __awaiter(void 0, void 0, void 0, function* () {
    const [borrowAgg] = yield borrow_model_1.Borrow.aggregate([
        {
            $group: {
                _id: null,
                totalBorrowedQuantity: { $sum: "$quantity" },
                totalBorrowRecords: { $sum: 1 },
            },
        },
    ]);
    const [booksAgg] = yield book_model_1.Book.aggregate([
        {
            $group: {
                _id: null,
                totalBooks: { $sum: 1 },
                totalCopies: { $sum: "$copies" },
            },
        },
    ]);
    const data = {
        totalBorrowedQuantity: (borrowAgg === null || borrowAgg === void 0 ? void 0 : borrowAgg.totalBorrowedQuantity) || 0,
        totalBorrowRecords: (borrowAgg === null || borrowAgg === void 0 ? void 0 : borrowAgg.totalBorrowRecords) || 0,
        totalBooks: (booksAgg === null || booksAgg === void 0 ? void 0 : booksAgg.totalBooks) || 0,
        totalCopies: (booksAgg === null || booksAgg === void 0 ? void 0 : booksAgg.totalCopies) || 0,
    };
    return data;
});
exports.BorrowStats = {
    BorrowsAggregate,
};
