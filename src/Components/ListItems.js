
import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CheckTask from '../Redux/Actions/CheckTask';
import deleteTask from '../Redux/Actions/DeleteTask';
import EditItem from './EditItem';

function ListItems({all}) {
    const toDos = useSelector((state) => state.toDos);
    const dispatch = useDispatch()
    return (all?
        toDos.map(el=><ListGroup >
            <ListGroup.Item className="group">
            <p className={el.isDone?"done":null}>
                {el.text}
           </p>
            <div className="butt">
            <Button variant="warning" onClick={()=>dispatch(CheckTask(el.id))}>{el.isDone? "Done" :"To Do"}</Button>
            <EditItem item={el}/>
            <Button variant="danger" onClick={()=>dispatch(deleteTask(el.id))}>Delete</Button>
            
            </div>
                
            </ListGroup.Item>
        </ListGroup>):toDos.filter(el=>el.isDone===true).map(el=>
        <ListGroup >
        <ListGroup.Item className="group">
        <p className={el.isDone?"done":null}>
            {el.text}
       </p>
        <div className="butt">
        <Button variant="warning" onClick={()=>dispatch(CheckTask(el.id))}>{el.isDone? "Done" :"To Do"}</Button>
        <EditItem item={el}/>
        <Button variant="danger" onClick={()=>dispatch(deleteTask(el.id))}>Delete</Button>
        
        </div>
            
        </ListGroup.Item>
    </ListGroup>)
        )      
    
        }


export default ListItems
