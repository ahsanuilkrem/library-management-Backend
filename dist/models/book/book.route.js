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
exports.bookRoutes = void 0;
const express_1 = require("express");
const book_controler_1 = require("./book.controler");
const book_validation_1 = require("./book.validation");
const validateRequest = (zodSchema) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.body = yield zodSchema.parseAsync(req.body);
        next();
    }
    catch (error) {
        next(error);
    }
});
const router = (0, express_1.Router)();
router.post("/create", validateRequest(book_validation_1.createBookSchema), book_controler_1.BookController.createBook);
router.get("/", book_controler_1.BookController.getAllBooks);
router.get("/:id", book_controler_1.BookController.getBookById);
router.patch("/:id", validateRequest(book_validation_1.updateBookSchema), book_controler_1.BookController.updateBook);
router.delete("/:id", book_controler_1.BookController.deleteBook);
exports.bookRoutes = router;
