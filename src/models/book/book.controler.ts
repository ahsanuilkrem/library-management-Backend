/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { BookService } from "./book.service";
import httpStatus from "http-status-codes"
import { catchAsync } from "../../utils/catchAsyncts";
import { sendResponse } from "../../utils/sendRespone";



  const createBook = catchAsync(async (req: Request, res : Response, next : NextFunction) => {
    
  const result = await BookService.createBook(req.body);  

   sendResponse(res, {
      success : true,
      statusCode : httpStatus.CREATED,
      message : "Book created successfully",
      data : result
   })

})


const getAllBooks = catchAsync( async (req: Request, res: Response, next: NextFunction ) => {

    const query = req.query

    const result = await BookService.getAllBooks(query as Record<string, string>);
   
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "All Book Retrieved Successfully",
      data: result.data,
      meta : result.meta
    })
 
  })

const getBookById = catchAsync( async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await BookService.getBookById(id);

   sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Book Retrieved Successfully",
      data: result.data,
     
    })


  })

const updateBook = catchAsync(async (req: Request, res: Response) => {

  const result =  await BookService.updateBook(req.params.id, req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Book updated successfully',
        data: result ,
    });
   
  })

const deleteBook = catchAsync(async (req: Request, res: Response) => {

     await BookService.deleteBook(req.params.id);

     sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Book deleted successfully',
        data: null,
    });

  })


export const BookController = {
        createBook,
        getAllBooks,
        getBookById,
        updateBook,
        deleteBook
};
