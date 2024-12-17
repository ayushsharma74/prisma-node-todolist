import { RequestHandler, Response, response } from "express"
import { prisma } from "../db/prismaClient"

export const getTodo:RequestHandler = (req,res) => {
    prisma.todo.create({
        data: {
            name: "test",
            content: "test",
            isDone: false
        }
    })
    res.json({
        message: "Get All Todo"
    })
    
}

// export { getTodo }