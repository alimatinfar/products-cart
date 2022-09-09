import { all } from 'redux-saga/effects';
import productSagas from './products';

export default function* rootSaga() {
  yield all([...productSagas]);
}