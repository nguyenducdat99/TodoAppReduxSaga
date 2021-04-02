// import type for action
import * as types from '../constants/ActionTypes';

// declare initialState
const initialState = false;

function myReducer(state=initialState, action) {
    let type = action.type;

    switch (type) {
        case types.TOGGLE_FORM:
            return !state;
    
        case types.CLOSE_FORM:

            return false;
        case types.OPEN_FORM:

            return true;
        default:
            return state;
    }
}

export default myReducer;