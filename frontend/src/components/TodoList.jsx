import { useEffect } from 'react';
import { useState } from 'react'
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        const res = await api.get('/todos');
        setTodos(res.data);
    };
    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            <h2>Todo List</h2>
            <AddTodo onAdd={setTodos} />
            {todos.map(todo => (
                <TodoItem
                key={todo.id}
                todo={todo}
                onUpdate={setTodos}
                onDelete={setTodos}
                />
            ))}
        </div>
        
    );
}

export default TodoList
