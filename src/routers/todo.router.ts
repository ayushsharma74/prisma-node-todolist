import { Router } from "express";
import { getTodo , setTodo } from "../controllers/todo.controllers";

const todoRouter = Router();

todoRouter.get("/get-todo", getTodo)
todoRouter.post("/create-todo", setTodo)