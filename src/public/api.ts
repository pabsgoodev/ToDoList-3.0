

const form = document.getElementById('todoForm');
const list = document.getElementById('todoList');
const input = document.getElementById('titulo') as HTMLInputElement;
const URL = 'http://localhost:3000/todos';

type Todo = {
    id: number;
    titulo: string;
    concluida: boolean;
}

async function fetchTodos() {
    const response = await fetch(URL);
    const todos: Todo[] = await response.json();
    if (!list) return;
    list.innerHTML = '';

    todos.forEach((todo) => {
        const li = document.createElement('li');

        const text = document.createElement('span');
        text.textContent = todo.titulo;

        if(todo.concluida) {
            text.style.textDecoration = 'line-through';
        }

        const CompletedBtn = document.createElement('button');
        CompletedBtn.textContent = 'Concluir';
        CompletedBtn.addEventListener('click', async () => {
            await fetch(`${URL}/${todo.id}`, {
                method: 'PUT',
            })
            fetchTodos()
        })

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Deletar';
        deleteBtn.addEventListener('click', async () => {
            await fetch(`${URL}/${todo.id}`, {
                method: 'DELETE',
            })
            fetchTodos()
        })
        li.appendChild(text);
        li.appendChild(CompletedBtn);
        li.appendChild(deleteBtn);
        list.appendChild(li);

    })
}

form?.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!input.value) return;

    await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ titulo: input.value })
    })

    input.value = '';
    fetchTodos();
})
