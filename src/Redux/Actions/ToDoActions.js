
import { ADD_TASK } from '../constants/actionTypes'
 const addTask=(payload)=> {
    return{
        type:ADD_TASK,
        payload
    };
    
};
export default addTask
