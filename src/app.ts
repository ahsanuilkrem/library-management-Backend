import express, { Request, Response } from "express";
import cors from "cors";
import { router } from "./routes";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";


const app = express();


app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
app.use("/api", router);

app.get("/", (req:Request, res:Response) => {
  res.send("📚 Library API is running");
});

app.use(globalErrorHandler)

 app.use(notFound)

export default app;
