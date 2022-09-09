import {ProductsTypes} from "../types/ProductsTypes";

export const getProductsRequest = () => ({
  type: ProductsTypes.GET_PRODUCTS_REQUEST
});

export const getProductsSuccess = (items:any) => ({
  type: ProductsTypes.GET_PRODUCTS_SUCCESS,
  payload: { items }
});

export const getProductsFailed = (error:any) => ({
  type: ProductsTypes.GET_PRODUCTS_FAILED,
  payload: { error }
});
