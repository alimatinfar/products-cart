import { combineReducers } from 'redux';
import { productsReducer } from './products';
import { cartReducer } from './cart';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;