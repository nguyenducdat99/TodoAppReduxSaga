// import type for action
import * as types from '../constants/ActionTypes';

// declare initialState
const initialState = {
    id: '',
    name: '',
    price: 0,
    status: true
};

function myReducer(state=initialState, action) {
    let type = action.type;
    let payload = action.payload;

    switch (type) {
        case types.SELECT_SUCCESS:
            state = {
                ...state,
                id: payload.id,
                name: payload.name,
                price: payload.price,
                status: payload.status
            }
    
            return {...state}
        default:
            return state;
    }
}

export default myReducer;