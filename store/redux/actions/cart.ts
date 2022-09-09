import {CartTypes} from "../types/CartTypes";

export const addToCart = (productId:number) => ({
  type: CartTypes.INCREMENT,
  payload: { productId }
});

export const removeFromCart = (productId:number) => ({
  type: CartTypes.DECREMENT,
  payload: { productId }
});
