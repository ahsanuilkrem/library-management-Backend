"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBorrowSchema = void 0;
const zod_1 = require("zod");
exports.createBorrowSchema = zod_1.z.object({
    bookId: zod_1.z.string(),
    quantity: zod_1.z.number().int().positive(),
    dueDate: zod_1.z.coerce.date(),
});
