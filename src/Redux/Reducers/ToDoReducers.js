import { ADD_TASK, CHECK_TASK, DELETE_TASK, EDIT_TASK } from "../constants/actionTypes"

const initialState={
    toDos:[]
}
 const ToDoReducers = (state=initialState,action)=>{
    switch (action.type){
        case ADD_TASK :
            return{
                ...state,
                toDos:[...state.toDos,action.payload]

            }
        case DELETE_TASK :
            return{
                ...state,
                toDos:state.toDos.filter(el=>el.id!=action.payload)
            }
        case EDIT_TASK :
            return{
                ...state,
                toDos: state.toDos.map(el=>el.id==action.payload.id? {...el,text:action.payload.text}:el)
            }
        case CHECK_TASK :
            return{
                ...state,
                toDos:state.toDos.map(el=>el.id==action.payload?{...el,isDone:!el.isDone}:el)
            }
        default:return state   
    }
}
export default ToDoReducers