import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { tarefa } from '../models/tasks.model'

export const AppDataSource = new DataSource({
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'silvablo',
    database: 'todolist',
    synchronize: true,
    logging: false,
    entities: [tarefa],
    migrations: [],
    subscribers: [],
})