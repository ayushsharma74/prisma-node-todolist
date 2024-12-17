import express, { NextFunction, Request, Response } from "express"
import { getTodo } from "./controllers/todo.controllers"

const app = express()

app.use((err: Error, req: Request, res:Response, next: NextFunction) => {
    res.status(500).json({message: err.message});
  });

app.get("/", getTodo )

export {app}
