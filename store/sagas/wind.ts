import {call, put, takeLatest} from "redux-saga/effects";
import {WindActionTypes} from "../redux/wind/actionTypes";
import {getWeatherWindApi} from "../../api/weather/weatherApi";
import {WindData} from "../redux/wind/contracts";
import {setWindCurrentMeasurement, setWindMeasurement} from "../redux/wind/actionCreators";

function* WindWorker() {
	try {
		const response: WindData[] = yield call(getWeatherWindApi)

		if (response) {
			yield put(setWindMeasurement(response))
			yield put(setWindCurrentMeasurement())
		}
	} catch (error) {
		// TODO: Можно добавить модалку с ошибкой
	}
}

export default function* watchWind() {
	yield takeLatest(WindActionTypes.GET_WIND_DATA, WindWorker);
}
