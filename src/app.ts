import express, { Request, Response } from "express";
import cors from "cors";
import { router } from "./routes";
import { globalErrorHandler } from "./routes/middlewares/globalErrorHandler";
import notFound from "./routes/middlewares/notFound";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.get("/", (req:Request, res:Response) => {
  res.send("📚 Library API is running");
});

app.use(globalErrorHandler)

 app.use(notFound)

export default app;
