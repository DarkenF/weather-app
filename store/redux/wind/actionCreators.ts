import {WindActionTypes} from "./actionTypes";
import {GetWinDataAction, SetCurrentWindMeasureAction, SetDataWindAction, WindData} from "./contracts";

export const getWindMeasurement = (): GetWinDataAction => ({
	type: WindActionTypes.GET_WIND_DATA
})

export const setWindMeasurement = (value: WindData[]): SetDataWindAction => ({
	type: WindActionTypes.SET_WIND_DATA,
	payload: {
		data: value,
	},
})

export const setWindCurrentMeasurement = (): SetCurrentWindMeasureAction => ({
	type: WindActionTypes.SET_CURRENT_WIND_MEASURE,
})