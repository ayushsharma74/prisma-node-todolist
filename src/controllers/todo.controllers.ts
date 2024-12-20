import { RequestHandler, Response, response } from "express"
import { prisma } from "../db/prismaClient"

export const getTodo:RequestHandler = (req,res) => {
    
    
    res.json({
        message: "Get All Todo"
    })
    
}

interface Todo {
    name: string,
    content: string
}

export const setTodo:RequestHandler = async (req,res) => {

    const {name, content} = req.body as Todo

    const newTodo = await prisma.todo.create({
        data: {
            name, 
            content,
            isDone: false
        }
    })
}

// export { getTodo }