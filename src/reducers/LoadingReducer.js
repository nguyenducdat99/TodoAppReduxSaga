// import type for action
import * as types from '../constants/ActionTypes';

// declare initialState
const initialState = false;

function myReducer(state=initialState, action) {
    let type = action.type;

    switch (type) {
        case types.TURN_ON_LOADING:
            return true;
    
        case types.TURN_OFF_LOADING:

            return false;

        default:
            return state;
    }
}

export default myReducer;