import { takeLatest } from "redux-saga/effects";
import {InverterActionTypes} from "../redux/inverter/actionTypes";

function* InverterWorker() {
  try {

  } catch (error) {

  }
}

// eslint-disable-next-line import/no-default-export,@typescript-eslint/explicit-module-boundary-types
export default function* watchInverter() {
  yield takeLatest(InverterActionTypes.GET_INVERTER_DATA, InverterWorker);
}
