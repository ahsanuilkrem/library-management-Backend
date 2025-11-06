import { Request, Response } from "express";
import { BorrowService } from "./borrow.service";
import { catchAsync } from "../../utils/catchAsyncts";
import { sendResponse } from "../../utils/sendRespone";
import httpStatus from "http-status-codes"


const  createBorrow = catchAsync(async (req: Request, res: Response) => {
    console.log("🔥 Incoming borrow request body:", req.body);
   const result = await BorrowService.createBorrow(req.body);

   
   sendResponse(res, {
      success : true,
      statusCode : httpStatus.CREATED,
      message : "Book borrowed successfully",
      data : result
   })
   
  })

const  getAllBorrows = catchAsync(async (req: Request, res: Response) => {
     const result = await BorrowService.getAllBorrows();
    
      sendResponse(res, {
      success : true,
      statusCode : httpStatus.OK,
      message : "All borrow Retrieved successfully",
      data : result
   })
  })

const  getBorrowSummary = catchAsync(async (req: Request, res: Response) => {
  
  const summary = await BorrowService.getBorrowSummary();

  sendResponse(res, {
      success : true,
      statusCode : httpStatus.OK,
      message : "Borrowed books summary retrieved successfully",
      data : summary
   })

  })


  export const BorrowController = {
        createBorrow,
        getAllBorrows,
        getBorrowSummary
  }
