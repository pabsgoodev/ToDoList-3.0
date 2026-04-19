```md
# 📝 To-Do API — Full Stack

API REST para gerenciamento de tarefas, com integração a banco de dados e uma interface simples para consumo dos endpoints.

## Objetivo

Praticar desenvolvimento backend com TypeScript, integração com banco relacional e consumo de API via frontend básico.

## Funcionalidades

- Criar tarefa
- Listar todas as tarefas
- Buscar tarefa por ID
- Atualizar tarefa
- Marcar como concluída
- Deletar tarefa
- Persistência em banco de dados

## Tecnologias utilizadas

### Backend
- Node.js
- Express
- TypeScript
- TypeORM
- MariaDB

### Frontend
- HTML
- CSS
- JavaScript

## Estrutura do projeto

```

src/
├── controllers/
├── entities/
├── routes/
├── database/
└── server.ts

public/
├── index.html
├── style.css
└── script.js

````

## Rotas da API

### GET /tasks
Lista todas as tarefas

### GET /tasks/:id
Busca tarefa por ID

### POST /tasks
Cria nova tarefa

### PUT /tasks/:id
Atualiza tarefa

### DELETE /tasks/:id
Remove tarefa

## Banco de dados

- Utiliza MariaDB via TypeORM
- Configuração feita no arquivo de conexão (`data-source.ts`)

## Como rodar o projeto

### 1. Clonar repositório
```bash
git clone https://github.com/pabsgoodev/ToDoList-3.0.git
cd 
````

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env`:

```env
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
```

### 4. Rodar o servidor

```bash
npm run dev
```

Servidor:

```
http://localhost:3000
```

## Observações

* Projeto voltado para estudo e portfólio
* Estrutura simples e direta
* Fácil expansão para novos módulos

## Status do projeto

* Tipo: Full Stack
* Uso: Portfólio / Estudo
* Estado: Funcional

```
```
