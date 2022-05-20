import {call, put, takeLatest} from "redux-saga/effects";
import {InverterActionTypes} from "../redux/inverter/actionTypes";
import {getWeatherInverterApi} from "../../api/weather/weatherApi";
import {getInverterChartsMeasure, setInverterMeasurement} from "../redux/inverter/actionCreators";
import {InverterData} from "../redux/inverter/contracts";
import {Alert} from "react-native";

function* InverterWorker() {
	try {
		const response: InverterData[] = yield call(getWeatherInverterApi)

		if (response) {
			yield put(setInverterMeasurement(response))
			yield put(getInverterChartsMeasure())
		}

	} catch (error) {
		Alert.alert('Ошибка получения данных!')
	}
}

export default function* watchInverter() {
  yield takeLatest(InverterActionTypes.GET_INVERTER_DATA, InverterWorker);
}
