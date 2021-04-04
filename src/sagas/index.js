import { call,  delay,  put, takeEvery, takeLatest } from 'redux-saga/effects';
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
        yield console.log(response.statusText);
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
        yield console.log(response.statusText);
    }
    yield put(actions.onTurnOffLoading());
} 

function* selectProduct(action) {
    const payload = action.payload;
    yield put(actions.onTurnOnLoading());

    const response = yield call(apiTask.selectProduct, payload);

    if (response.status === 200) {
        yield put(actions.onSelectSuccess(response.data));
        yield put(actions.onOpenForm());
    }else {
        yield console.log(response.statusText);
    }

    yield put(actions.onTurnOffLoading());
}

function* editProduct(action) {
    const payload = action.payload;
    yield put(actions.onTurnOnLoading());

    const response = yield call(apiTask.editProduct,payload);

    if (response.status===200) {
        yield put(actions.onEditSuccess(response.data));
    }else{
        yield console.log(response.statusText);
    }

    yield put(actions.onTurnOffLoading());
}

function* deleteProduct(action) {
    const payload = action.payload;

    yield put(actions.onTurnOnLoading());
    const response = yield call(apiTask.deleteProduct,payload);

    if (response.status===200) {
        yield put(actions.onDeleteSuccess(payload));
    }else{
        yield console.log(response.statusText);
    }

    yield put(actions.onTurnOffLoading());
}

function* updateStatus(action) {
    const payload = action.payload;

    yield put(actions.onTurnOnLoading());
    const response = yield call(apiTask.editProduct,payload);

    if (response.status ===200) {
        yield put(actions.onUpdateSuccess(response.data));
    }else{
        yield console.log(response.statusText)
    }

    yield put(actions.onTurnOffLoading());
}

function* filterProduct(action) {
    yield delay(600);
    yield put(actions.onTurnOnLoading());
    const payload = action.payload;
    const response = yield call(apiTask.filterProduct,payload);

    yield put(actions.onFIlterSuccess(response.data));
    yield put(actions.onTurnOffLoading());
}

function* rootSagas() {
   yield takeEvery(types.FETCH_PRODUCTS, getProducts);
   yield takeEvery(types.ADD_LISTEN, addProduct);
   yield takeEvery(types.SELECT_LISTEN, selectProduct);
   yield takeEvery(types.EDIT_LISTEN, editProduct);
   yield takeEvery(types.DELETE_LISTEN, deleteProduct);
   yield takeEvery(types.UPDATE_STATUS_LISTEN, updateStatus);
   yield takeLatest(types.FILTER_LISTEN, filterProduct);
}

export default rootSagas;