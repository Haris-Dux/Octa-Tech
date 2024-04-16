import cors from "cors";
import express from 'express';
import { config } from "dotenv";
import cookieParser from 'cookie-parser';
import userRouter from './routes/userRoutes.js';
import queriesRouter from './routes/queriesRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import path from "path";
import { connectDB } from "./data/database.js";

export const app = express();

config({
    path: "./data/config.env"
})

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: '*' }));


app.use('/api/v1/auth', userRouter);
app.use('/api/v1/queries', queriesRouter);


//Define the root directory for serving static files
const root = path.resolve();
app.use(express.static(path.join(root, 'dist')));

app.get("*", (req, res) => {
  res.sendFile(path.join(root, 'dist/index.html'));
});

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is working on port: ${process.env.PORT} in ${process.env.NODE_ENV} Mode`);
})


app.use(errorHandler);
