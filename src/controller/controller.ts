import { TodoService } from "../service/service";
import { Request, Response } from "express";

export class TodoController {
    private service = new TodoService()

    async create(req: Request, res: Response) {
        const {titulo} = req.body

        const novaTarefa = await this.service.create(titulo)
        res.status(201).json(novaTarefa)
    }

    async list(req: Request, res: Response) {
        const todos = await this.service.list()
        res.status(200).json(todos)
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params

        try {
            await this.service.delete(Number(id))
            res.status(204).send()
        } catch (error) {
            res.status(404).json({ error: "Tarefa não encontrada" })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params
            const todoUp = await this.service.update(Number(id))

            res.status(200).json(todoUp)
            
        } catch (err: any) {
            return res.status(404).json({ error: err.message })
        }
    }
}