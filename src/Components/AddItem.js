import React, { useState } from 'react'
import { Card, FormControl, InputGroup,Button,Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import addTask from '../Redux/Actions/ToDoActions'


function AddItem({handleAll}) {
    const [all, setAll] = useState(true)
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const addItem=(e)=>{
        e.preventDefault();
        if(text!=""){
        dispatch(addTask({id:Math.random(), text: text, isDone: false}));
        setText("");}
        else
        {alert("Add to do....!!!")}
    }
    return (
       <Card className="hhh">
        <Card.Body>
            <h1 className={"text-white"}>To-Do-App !</h1>
            <Form onSubmit={addItem}>
                <Form.Group>
                    <InputGroup className="mb-3">
                        <FormControl
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={(e)=> setText(e.target.value)}
                        value={text}
                        />
                        <InputGroup.Append>
                        <Button variant="warning" onClick={addItem}>Add</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
            </Form>
            <Button onClick={()=>{setAll(!all);handleAll(all);}} variant="info" className="mr-3">
                {all?"All":"Done"}
            </Button>
        </Card.Body>
       </Card>
    )
}

export default AddItem
