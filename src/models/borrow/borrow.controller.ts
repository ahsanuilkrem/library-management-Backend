import { Request, Response } from "express";
import { BorrowService } from "./borrow.service";


const  createBorrow = async (req: Request, res: Response) => {
    try {
      const result = await BorrowService.createBorrow(req.body);
      res.status(201).json({ success: true, data: result });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

const  getAllBorrows = async (_req: Request, res: Response) => {
    try {
      const result = await BorrowService.getAllBorrows();
      res.json({ success: true, data: result });
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to get borrows" });
    }
  }

const  getBorrowSummary = async (_req: Request, res: Response) => {
    try {
      const summary = await BorrowService.getBorrowSummary();
      res.json({ success: true, data: summary });
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to get summary" });
    }
  }


  export const BorrowController = {
        createBorrow,
        getAllBorrows,
        getBorrowSummary
  }
