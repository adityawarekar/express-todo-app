import React, {useState} from 'react';
import { api } from '../api';

function AddTodo({ onAdd }) {
    const [desc, setDesc] = useState("");

    const handleAdd = async () => {
        if (!desc.trim()) return;
        const res = await api.post('/todos', {
            desc,
            completed: false
        });
        onAdd(res.data);
        setDesc("");
    };
    return (
        <div>
            <input value={desc} onChange={e => setDesc(e.target.value)} />
            <button onClick={handleAdd}>Add Todo</button>
        </div>
        
    );
}

export default AddTodo
