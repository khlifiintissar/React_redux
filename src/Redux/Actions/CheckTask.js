import { CHECK_TASK } from '../constants/actionTypes'

function CheckTask(payload) {
    return {
        type:CHECK_TASK,
        payload,

    }
}

export default CheckTask
