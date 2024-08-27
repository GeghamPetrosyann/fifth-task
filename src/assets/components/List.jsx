import React from 'react'
import TodoItem from './TodoItem'

export default function List(props) {
    return <>
        <table>
            <thead>
                <tr>
                    <th>To Do List</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.todos.map(elm => <TodoItem
                        todo={elm}
                        key={elm.id}
                        onDelete={props.onDelete}
                    />)
                }
            </tbody>
        </table>
    </>
}
