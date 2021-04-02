import { createStore } from 'redux';
import { rootReducer } from '../reducers/Reducer';

// return store
export const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);