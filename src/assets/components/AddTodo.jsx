import { useState } from "react"


export default function AddTodo({ onAdd }) {

    const [todo, setTodo] = useState({ toDoList: "" })
    const [error, setError] = useState("")

    const handleSubmit = event => {
        event.preventDefault()
        if (!todo.toDoList.trim()) {
            return setError("plz fill all the fields")
        }

        onAdd(todo)
        setError("")
        setTodo({ toDoList: "" })
    }

    return <div className="top-left-form">
        <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <div>
                <input
                    type="text"
                    placeholder='enter what to do'
                    value={todo.toDoList}
                    onChange={e => setTodo({ ...todo, toDoList: e.target.value })}
                />
            </div>
            <div>
                <button>add</button>
            </div>
        </form>
    </div>
}
