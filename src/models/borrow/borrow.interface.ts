import { Types } from "mongoose";

export interface IBorrow {
  bookId: Types.ObjectId; // referencing Book
  quantity: number;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
