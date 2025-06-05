import React from 'react';
import { api } from '../api';

function TodoItem({ todo, onUpdate, onDelete}) {
    const toggleCompleted = async() => {
        const res = await api.put(`/todos/${todo.id}`, {
            ...todo,
            completed: !todo.completed
        });
        onUpdate(res.data);
    };

    const deleteTodo = async () => {
        const res = await api.delete(`/todos/${todo.id}`);
        onDelete(res.data);
    };
    return (
        <div>
            <input type="checkbox" checked={todo.completed} onChange={toggleCompleted} />
            {todo.desc}
            <button onClick={deleteTodo}>Delete</button>
        </div>
        
    );
}

export default TodoItem;
