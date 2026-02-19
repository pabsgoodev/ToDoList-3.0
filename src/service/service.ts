import { AppDataSource } from "../database/db";
import { tarefa } from "../models/tasks.model";

export class TodoService {
    private repo = AppDataSource.getRepository(tarefa)

    //Criar nossa nova tarefa
    async create(titulo: string){
        const novaTarefa = this.repo.create({titulo: titulo, concluida: false})
        await this.repo.save(novaTarefa)
        return novaTarefa
    }

    //Listar todas as nossas tarefas
    async list(){
        return await this.repo.find()
    }

    //Atualizar nossa tarefa
    async update(id: number) {
        const todo = await this.repo.findOneBy({ id })
        
        if(!todo) {
            throw new Error("Tarefa não encontrada")
        }

        todo.concluida = !todo.concluida
        return await this.repo.save(todo)
    }

    //Deletar nossa tarefa
    async delete(id: number) {
        const todo = await this.repo.delete({ id })

        if(todo.affected === 0) {
            throw new Error("Tarefa não encontrada")
        }
    }
}