📝 API To-Do List

Esta é uma API REST para gerenciamento de tarefas (To-Do List), desenvolvida para estudo e prática de backend com integração a banco de dados.
O projeto também possui uma interface simples em HTML, CSS e JavaScript para consumir a API.

Funcionalidades

Criar nova tarefa

Listar todas as tarefas

Buscar tarefa por ID

Atualizar tarefa

Marcar tarefa como concluída

Deletar tarefa

Persistência de dados no banco

Tecnologias utilizadas
Backend

Node.js

Express

TypeScript

TypeORM

MariaDB

Frontend

HTML

CSS

JavaScript

Estrutura do Projeto
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
Rotas da API
GET /tasks

Lista todas as tarefas.

GET /tasks/:id

Busca uma tarefa pelo ID.

POST /tasks

Cria uma nova tarefa.

PUT /tasks/:id

Atualiza uma tarefa existente.

DELETE /tasks/:id

Remove uma tarefa.

Objetivo do Projeto

Praticar criação de API REST

Aplicar TypeScript no backend

Trabalhar com ORM (TypeORM)

Integrar banco de dados relacional

Conectar frontend com backend

Construir projeto para portfólio

Como executar o projeto
1. Clonar o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
2. Instalar dependências
npm install
3. Configurar o banco

Criar o banco no MariaDB e ajustar o arquivo de conexão (data-source.ts).

4. Rodar o servidor
npm run dev

Servidor padrão:

http://localhost:3000
