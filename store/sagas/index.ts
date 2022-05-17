import { all } from 'redux-saga/effects';

import inverterSaga from './inverter';
import watchSolar from "./solar";
import watchWind from "./wind";

export default function* rootSaga() {
  yield all([watchSolar(), watchWind()]);
}