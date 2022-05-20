import { all } from 'redux-saga/effects';

import watchSolar from "./solar";
import watchWind from "./wind";
import watchInverter from "./inverter";

export default function* rootSaga() {
  yield all([watchSolar(), watchWind(), watchInverter()]);
}