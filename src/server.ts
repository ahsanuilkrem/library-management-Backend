/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */

import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();

let server : Server;

const startServer = async () => {
    try {
         const port = process.env.PORT || 5000;

        await mongoose.connect(process.env.MONGO_URI as string)
         console.log("✅ Connected to MongoDB");
         
        server = app.listen(port, () => {
            console.log(`server is lisstening to prot  ${port}`);
        });
    } catch (error) {
        console.log(error)
    }
}

 startServer()
