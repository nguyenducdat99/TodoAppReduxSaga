// import type for action
import * as types from '../constants/ActionTypes';

const setting = (a, b) => {
    if (b.id*1 > a.id*1) return 1;
    if (a.id*1 > b.id*1) return -1;
    return 0;
}

const findProduct = (state, id) => {
    let result = -1;

    state.forEach((element,index) => {
        if (element.id*1===id*1) result = index;
    });

    return result;
}

// declare initialState
const initialState = [];

function myReducer(state=initialState, action) {
    let type = action.type;
    let payload = action.payload;
    let index = -1;

    state.sort(setting);

    switch (type) {
        case types.FETCH_SUCCESS:
            state = [...payload.products]

            return [...state];

        case types.ADD_SUCCESS: 
            state = [payload].concat(state);

            return [...state];

        case types.EDIT_SUCCESS:
            index = findProduct(state, payload.id);
            if (index !== -1) state[index] = {
                ...state[index],
                name: payload.name,
                price: payload.price,
                status: payload.status
            }

            return [...state];

        case types.UPDATE_STATUS_SUCCESS:
            index = findProduct(state, payload.id);
            if (index !== -1) state[index] = {
                ...state[index],
                status: payload.status
            }

            return [...state];

        case types.DELETE_SUCCESS: 
            index = findProduct(state,payload);
            if (index !== -1) state.splice(index,1);

            return [...state];

        case types.FILTER_SUCCESS:
            state = [...payload.products];

            return state;
        default:
            return state;
    }
}


export default myReducer;