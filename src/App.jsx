import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './assets/components/AddTodo'
import List from './assets/components/List'

function App() {
  const [todos, setTodos] = useState([])
  const [id, setId] = useState(1)
  const onAdd = todo => {
    setId(id + 1)
    setTodos([...todos, { ...todo, id: id }])
  }

  const handleDelete = id => {
    const temp = todos.filter(todo => todo.id != id)
    setTodos([...temp])
  }

  return <>
    <AddTodo
      onAdd={onAdd}
    />
    <List
      todos={todos}
      onDelete={handleDelete}
    />
  </>

}

export default App
