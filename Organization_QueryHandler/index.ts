import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import "./src/config/mongoose";
import organizationRouts from "./src/modules/app/organization.route";

// Boot express
const app: Application = express();
const port = process.env.PORT || 3001;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Application routing
app.get("/", (req: Request, res: Response) => {
  res.status(200).send({ data: "Yor are connected to organization GET API" });
});

app.use(organizationRouts);

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));

// Handle unhandled promise rejections and exceptions
process.on("unhandledRejection", (err: any) => {
  console.log(err);
});

process.on("uncaughtException", (err: any) => {
  console.log(err.message);
});

export default app;
