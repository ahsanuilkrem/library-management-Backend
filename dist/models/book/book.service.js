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
exports.BookService = void 0;
const AppError_1 = __importDefault(require("../../errorHelpers/AppError"));
const book_model_1 = require("./book.model");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const createBook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const existing = yield book_model_1.Book.findOne({ isbn: data.isbn });
    if (existing) {
        throw new AppError_1.default(http_status_codes_1.default.BAD_REQUEST, "Book Alrader Exist");
    }
    const newBook = yield book_model_1.Book.create(data);
    return newBook;
});
const getAllBooks = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = query;
    const sort = query.sort || "-createdAt";
    const limit = Number(query.limit) || 10;
    const excludeField = ["sort", "limit"];
    for (const field of excludeField) {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete filter[field];
    }
    const allBooks = yield book_model_1.Book.find(filter).sort(sort).limit(limit);
    const totalBook = yield book_model_1.Book.countDocuments();
    return {
        data: allBooks,
        meta: {
            total: totalBook
        }
    };
});
const getBookById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_model_1.Book.findById(id);
    return {
        data: book
    };
});
const updateBook = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log();
    const existingBook = yield book_model_1.Book.findById(id);
    if (!existingBook) {
        throw new Error("Book not found.");
    }
    return book_model_1.Book.findByIdAndUpdate(id, payload, { new: true });
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield book_model_1.Book.findByIdAndDelete(id);
});
exports.BookService = {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
};
