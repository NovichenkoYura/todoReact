import React, {useState} from "react";

export const TodoList = ({ todo, setTodo }) => {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
  
   

    const deleteTodo = (id) => {
        
        let newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
    }

    const statusTodo = (id) => {
        let newTodo = [...todo].filter(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    const editTodo = (id, title) => {
        setEdit(id)
        setValue(title)
               
    }

    const saveTodo = () => {
        
    }
   
    return (
        <div>{todo.map(item => (
            <div key={item.id}>
                {
                    edit === item.id ?
                        <div>
                            <input value={value} onChange={(e)=>setValue(e.target.value)}
                            />                            
                        </div> :
                        <div>{item.title}</div>                       

                }

                                {
                    edit === item.id ?
                        <div>
                            
                            <button onClick={ saveTodo}>Save</button>
                        </div> :
                        <div>
                            <button onClick={() => deleteTodo(item.id)}>Delete</button>
                            <button onClick={() => editTodo(item.id, item.title)}>Edit</button>
                            <button onClick={() => statusTodo(item.id)}>Close</button>
                        </div>                       

                }
                

                
            </div>
        )) }
        </div>
    )
}