
import { Router } from "express";
import { BorrowController } from "./borrow.controller";

const router = Router();

router.post("/create", BorrowController.createBorrow);
router.get("/", BorrowController.getAllBorrows);
router.get("/summary", BorrowController.getBorrowSummary);



export const borrowRoutes = router