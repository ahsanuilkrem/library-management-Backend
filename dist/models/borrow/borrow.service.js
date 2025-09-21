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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowService = void 0;
const borrow_model_1 = require("./borrow.model");
const book_model_1 = require("../book/book.model");
const AppError_1 = __importDefault(require("../../errorHelpers/AppError"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const createBorrow = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_model_1.Book.findById(data.bookId);
    if (!book) {
        throw new AppError_1.default(http_status_codes_1.default.BAD_REQUEST, "Book not found");
    }
    if (!book.available || book.copies < data.quantity) {
        throw new Error("Not enough copies available");
    }
    book.copies -= data.quantity;
    if (book.copies === 0) {
        book.available = false;
    }
    yield book.save();
    const borrow = yield borrow_model_1.Borrow.create(data);
    return borrow;
});
const getAllBorrows = () => __awaiter(void 0, void 0, void 0, function* () {
    return borrow_model_1.Borrow.find().populate("bookId");
});
const getBorrowSummary = () => __awaiter(void 0, void 0, void 0, function* () {
    return borrow_model_1.Borrow.aggregate([
        {
            $group: {
                _id: "$bookId",
                totalQuantity: { $sum: "$quantity" },
                dueDates: { $push: "$dueDate" },
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
                book: {
                    title: "$bookDetails.title",
                    isbn: "$bookDetails.isbn",
                },
                totalQuantity: 1,
                dueDates: 1,
            },
        },
    ]);
});
exports.BorrowService = {
    createBorrow,
    getAllBorrows,
    getBorrowSummary
};
