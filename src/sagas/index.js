import { call,  put, takeEvery } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes'
import * as apiTask from '../commons/apiTask';
import * as actions from '../actions/Actions';

/*
b1: lắng nghe type action
b2: mở component loading
b3: gọi api
b4: trả về data tương ứng 
b5: đóng component loading

*/


function* getProducts() {

    yield put(actions.onTurnOnLoading());

    const response = yield call(apiTask.getProduct);

    if (response.status===200) {
        yield put(actions.onFetchSuccess(response.data));
    } else {
        console.log(response.statusText);
    }
    
    yield put(actions.onTurnOffLoading());
}

function* addProduct(action) {
    const payload = action.payload;
    yield put(actions.onTurnOnLoading());
    const response = yield call(apiTask.addProduct,
        {
            name: payload.name,
            price: payload.price*1,
            status: payload.status
        }
    )

    if (response.status===201) {
        yield put(actions.onAddSuccess(response.data));
    }else{
        console.log(response.statusText);
    }
    yield put(actions.onTurnOffLoading());
} 

function* deleteProduct(action) {
    const payload = action.payload;
    yield put(actions.onTurnOnLoading());
    const response = yield call(apiTask.deleteProduct,payload)

    if (response.status===200) {
        yield put(actions.onDeleteSuccess(payload));
    }else{
        console.log(response.statusText);
    }

    yield put(actions.onTurnOffLoading());
}

function* rootSagas() {
   yield takeEvery(types.FETCH_PRODUCTS, getProducts);
   yield takeEvery(types.ADD_LISTEN, addProduct);
   yield takeEvery(types.DELETE_LISTEN, deleteProduct);
}

export default rootSagas;