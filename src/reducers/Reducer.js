import {combineReducers} from 'redux';
import toggleForm from './FormReducer';
import loading from './LoadingReducer';
import products from './ProductsReducer';
import productSelect from './ProductSelectReducer';

// return root reducer
export const rootReducer = combineReducers({
    toggleForm,
    loading,
    products,
    productSelect
});
