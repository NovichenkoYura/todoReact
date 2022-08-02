import React, {useState} from "react";
import { TodoList } from "../TodoList/TodoList";
import {v4 as uuidv4} from "uuid"

export const AddTodo = ({todo, setTodo}) => {
    const [value, setValue] = useState('')
    console.log(value)

    const saveTodo = () => {
        setTodo(
            [...todo, {
                id: uuidv4(),
                title: value,
                status:true
                
            } ]
        )
        setValue('')
    
}

    return (
        <div>
            <input placeholder="Type task" value={value} onChange={ (e)=>setValue(e.target.value)}/>
            <button onClick={saveTodo}>Save</button>
        </div>
    )
}
