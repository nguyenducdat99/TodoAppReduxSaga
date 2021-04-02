// import type for action
import * as types from '../constants/ActionTypes';

const setting = (a, b) => {
    if (b.id*1 > a.id*1) return 1;
    if (a.id*1 > b.id*1) return -1;
    return 0;
}

// declare initialState
const initialState = [];

function myReducer(state=initialState, action) {
    let type = action.type;
    let payload = action.payload;
    state.sort(setting);

    switch (type) {
        case types.FETCH_SUCCESS:
            state = [...payload.products]

            return [...state];
        case types.ADD_SUCCESS: 
            state = [payload].concat(state);

            return [...state]
        default:
            return state;
    }
}


export default myReducer;