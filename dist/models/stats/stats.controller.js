"use strict";
// import express, { Request, Response } from "express";
// import { Borrow } from "../models/borrow/borrow.model";
// import { Book } from "../models/book/book.model";
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
exports.statsController = void 0;
const catchAsyncts_1 = require("../../utils/catchAsyncts");
const sendRespone_1 = require("../../utils/sendRespone");
const stats_service_1 = require("./stats.service");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
// export const statsRoutes = express.Router();
// // analytics summary
// statsRoutes.get("/", async (req: Request, res: Response, next) => {
//   try {
//     const [borrowAgg] = await Borrow.aggregate([
//       {
//         $group: {
//           _id: null,
//           totalBorrowedQuantity: { $sum: "$quantity" },
//           totalBorrowRecords: { $sum: 1 },
//         },
//       },
//     ]);
//     const [booksAgg] = await Book.aggregate([
//       {
//         $group: {
//           _id: null,
//           totalBooks: { $sum: 1 },
//           totalCopies: { $sum: "$copies" },
//         },
//       },
//     ]);
//     const data = {
//       totalBorrowedQuantity: borrowAgg?.totalBorrowedQuantity || 0,
//       totalBorrowRecords: borrowAgg?.totalBorrowRecords || 0,
//       totalBooks: booksAgg?.totalBooks || 0,
//       totalCopies: booksAgg?.totalCopies || 0,
//     };
//     res.status(200).json({
//       success: true,
//       message: "Analytics summary",
//       data,
//     });
//   } catch (err) {
//     next(err);
//   }
// });
const BorrowsAggregate = (0, catchAsyncts_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const summary = yield stats_service_1.BorrowStats.BorrowsAggregate();
    (0, sendRespone_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "Analytics summary",
        data: summary
    });
}));
exports.statsController = {
    BorrowsAggregate
};
