// import type for action
import * as types from '../constants/ActionTypes';

// declare initialState
const initialState = false;

function myReducer(state=initialState, action) {
    let type = action.type;

    switch (type) {
        case types.DISPLAY_RECOVER:
            return true;
    
        case types.HIDE_RECOVER:

            return false;

        default:
            return state;
    }
}

export default myReducer;