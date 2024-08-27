import React, { useState } from 'react'

export default function TodoItem({ onDelete, todo }) {

  const [button, setButton] = useState("completed")
  const changeButton = (button) => {
    if (button != "cancel") {
      setButton("cancel")
    } else {
      setButton("completed")
    }

  }

  return <tr>
    <td className={button != "completed" ? "completed" : null}>{todo.toDoList}</td>
    <td>
      <button onClick={() => changeButton(button)}>{button}</button>
      <button onClick={() => onDelete(todo.id)}>X</button>
    </td>
  </tr>


}
