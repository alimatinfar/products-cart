import { takeEvery, call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions/products';
import * as api from '../api/products';
import {ProductsTypes} from "../types/ProductsTypes";
import {AxiosResponse} from "axios";
import {ProductResponseType} from "../api/products";

function* getProducts() {
  try {
    const result: AxiosResponse<ProductResponseType[]> = yield call(api.getProducts);
    yield put(actions.getProductsSuccess(result.data));
  } catch (error) {
    console.error(error);
    yield put(actions.getProductsFailed(error));
  }
}

function* watchGetProductsRequest() {
  yield takeEvery(ProductsTypes.GET_PRODUCTS_REQUEST, getProducts);
}

const productSagas = [fork(watchGetProductsRequest)];

export default productSagas;
