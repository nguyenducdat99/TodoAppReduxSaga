import {combineReducers} from 'redux';
import toggleForm from './FormReducer';
import loading from './LoadingReducer';
import products from './ProductsReducer';

// return root reducer
export const rootReducer = combineReducers({
    toggleForm,
    loading,
    products
});
