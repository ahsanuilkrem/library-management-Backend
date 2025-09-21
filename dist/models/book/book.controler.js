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
exports.BookController = void 0;
const book_service_1 = require("./book.service");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const catchAsyncts_1 = require("../../utils/catchAsyncts");
const sendRespone_1 = require("../../utils/sendRespone");
const createBook = (0, catchAsyncts_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.createBook(req.body);
    (0, sendRespone_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_codes_1.default.CREATED,
        message: "Book created successfully",
        data: result
    });
}));
const getAllBooks = (0, catchAsyncts_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const result = yield book_service_1.BookService.getAllBooks(query);
    (0, sendRespone_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "All Book Retrieved Successfully",
        data: result.data,
        meta: result.meta
    });
}));
const getBookById = (0, catchAsyncts_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield book_service_1.BookService.getBookById(id);
    (0, sendRespone_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "Book Retrieved Successfully",
        data: result.data,
    });
}));
const updateBook = (0, catchAsyncts_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.updateBook(req.params.id, req.body);
    (0, sendRespone_1.sendResponse)(res, {
        statusCode: http_status_codes_1.default.OK,
        success: true,
        message: 'Book updated successfully',
        data: result,
    });
}));
const deleteBook = (0, catchAsyncts_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield book_service_1.BookService.deleteBook(req.params.id);
    (0, sendRespone_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: 'Book deleted successfully',
        data: null,
    });
}));
exports.BookController = {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
};
