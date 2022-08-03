import React, {useState} from "react";
import { TodoList } from "../TodoList/TodoList";
import {v4 as uuidv4} from "uuid"
import { Row, Col, Button, Form } from "react-bootstrap";
import s from './AddTodo.module.css'

export const AddTodo = ({todo, setTodo}) => {
    const [value, setValue] = useState('')
    console.log(value)

    const saveTodo = () => {
        if (value) {
            setTodo(
            [...todo, {
                id: uuidv4(),
                title: value,
                status:true
                
            } ]
        )
        setValue('')
            
        }
        
    
}

    return (
        <Row>
            <Col className={s.addTodoForm}>
            <Form.Control placeholder="Type task" value={value} onChange={ (e)=>setValue(e.target.value)}/>
            <Button onClick={saveTodo} className={s.btn}>Save</Button>
            </Col>
        </Row>
        
    )
}
