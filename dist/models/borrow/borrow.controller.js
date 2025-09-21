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
exports.BorrowController = void 0;
const borrow_service_1 = require("./borrow.service");
const catchAsyncts_1 = require("../../utils/catchAsyncts");
const sendRespone_1 = require("../../utils/sendRespone");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const createBorrow = (0, catchAsyncts_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrow_service_1.BorrowService.createBorrow(req.body);
    (0, sendRespone_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_codes_1.default.CREATED,
        message: "Book borrowed successfully",
        data: result
    });
}));
const getAllBorrows = (0, catchAsyncts_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrow_service_1.BorrowService.getAllBorrows();
    (0, sendRespone_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "All borrow Retrieved successfully",
        data: result
    });
}));
const getBorrowSummary = (0, catchAsyncts_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const summary = yield borrow_service_1.BorrowService.getBorrowSummary();
    (0, sendRespone_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "Borrowed books summary retrieved successfully",
        data: summary
    });
}));
exports.BorrowController = {
    createBorrow,
    getAllBorrows,
    getBorrowSummary
};
