import { takeLatest, call, put } from "redux-saga/effects";
import {SolarActionTypes} from "../redux/solar/actionTypes";
import {getWeatherSolarApi} from "../../api/weather/weatherApi";
import {SolarData} from "../redux/solar/contracts";
import {setSolarCurrentMeasurement, setSolarMeasurement} from "../redux/solar/actionCreators";

function* SolarWorker() {
	try {
		const response: SolarData[] = yield call(getWeatherSolarApi)

		if (response) {
			yield put(setSolarMeasurement(response))
			yield put(setSolarCurrentMeasurement())
		}

	} catch (error) {
		// TODO: Можно добавить модалку с ошибкой
	}
}

export default function* watchSolar() {
	yield takeLatest(SolarActionTypes.GET_SOLAR_DATA, SolarWorker);
}
