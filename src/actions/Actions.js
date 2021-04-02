import * as types from '../constants/ActionTypes';

// action handle form
export const onToggle = () => {
    return {
        type: types.TOGGLE_FORM
    }
}
export const onOpenForm = () => {
    return {
        type: types.OPEN_FORM
    }
}
export const oncloseForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}

// action handle loading
export const onTurnOnLoading = () => {
    return {
        type: types.TURN_ON_LOADING
    }
}
export const onTurnOffLoading = () => {
    return {
        type: types.TURN_OFF_LOADING
    }
}

// action for product
export const onFetchProduct = () => {
    return {
        type: types.FETCH_PRODUCTS,
    }
}
export const onFetchSuccess = data => {
    return {
        type: types.FETCH_SUCCESS,
        payload: {
            products: [...data]
        }
    }
}

export const onAddProduct = product => {
    return {
        type: types.ADD_LISTEN,
        payload: {
            ...product
        }
    }
}

export const onAddSuccess = product => {
    return {
        type: types.ADD_SUCCESS,
        payload: {
            ...product
        }
    }
}

export const onSelectListen = id => {
    return {
        type: types.SELECT_LISTEN,
        payload: id
    }
}

export const onSelectSuccess = product => {
    return {
        type: types.SELECT_SUCCESS,
        payload: {
            ...product
        }
    }
}

export const onEditListen = product => {
    return {
        type: types.EDIT_LISTEN,
        payload: {
            ...product
        }
    }
}

export const onEditSuccess = product => {
    return {
        type: types.EDIT_SUCCESS,
        payload: {
            ...product
        }
    }
}

export const onDeleteProduct = id => {
    return {
        type: types.DELETE_LISTEN,
        payload: id
    }
}

export const onDeleteSuccess = id => {
    return {
        type: types.DELETE_SUCCESS,
        payload: id
    }
}