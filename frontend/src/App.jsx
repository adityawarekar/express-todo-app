import { useState } from 'react'

import './App.css'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='App'>
    <TodoList />
   </div>
  );
}

export default App;
