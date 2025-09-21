"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookSchema = exports.createBookSchema = exports.GenreEnum = void 0;
const zod_1 = require("zod");
exports.GenreEnum = zod_1.z.enum([
    "FICTION",
    "NON_FICTION",
    "SCIENCE",
    "HISTORY",
    "BIOGRAPHY",
    "FANTASY",
]);
exports.createBookSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title is required"),
    author: zod_1.z.string().min(1, "Author is required"),
    genre: exports.GenreEnum,
    isbn: zod_1.z.string().min(1, "ISBN is required"),
    description: zod_1.z.string().optional(),
    copies: zod_1.z
        .number()
        .int("Copies must be an integer")
        .nonnegative("Copies must be zero or more"),
    available: zod_1.z.boolean().optional().default(true),
});
exports.updateBookSchema = zod_1.z.object({
    title: zod_1.z.string().min(1).optional(),
    author: zod_1.z.string().min(1).optional(),
    genre: exports.GenreEnum.optional(),
    isbn: zod_1.z.string().min(1).optional(),
    description: zod_1.z.string().optional(),
    copies: zod_1.z.number().int().nonnegative().optional(),
    available: zod_1.z.boolean().optional(),
});
