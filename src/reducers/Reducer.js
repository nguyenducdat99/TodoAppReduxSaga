import {combineReducers} from 'redux';
import toggleForm from './FormReducer';

// return root reducer
export const rootReducer = combineReducers({
    toggleForm
});
