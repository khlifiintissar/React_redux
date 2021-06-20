import { DELETE_TASK } from "../constants/actionTypes";

 const deleteTask=(payload)=>{
    return{
        type:DELETE_TASK,
        payload
    };
};
export default deleteTask