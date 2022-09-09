import { combineReducers } from 'redux';
import { productsReducer } from './products';

const rootReducer = combineReducers({
  products: productsReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;