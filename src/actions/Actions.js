import * as types from '../constants/ActionTypes';

// action handle form
export const onToggle = () => {
    return {
        type: types.TOGGLE_FORM
    }
}
export const oncloseForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}