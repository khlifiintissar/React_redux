import React from 'react'
import { EDIT_TASK } from '../constants/actionTypes'

function EditTask(payload) {
    return{
        type:EDIT_TASK,
        payload
    }
}

export default EditTask
