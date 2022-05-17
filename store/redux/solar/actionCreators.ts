import {SolarActionTypes} from "./actionTypes";
import {
	GetChartMeasurementAction,
	GetSolarDataAction,
	SetCurrentSolarMeasureAction,
	SetDataSolarAction,
	SolarData
} from "./contracts";

export const getSolarMeasurement = (): GetSolarDataAction => ({
	type: SolarActionTypes.GET_SOLAR_DATA
})

export const setSolarMeasurement = (value: SolarData[]): SetDataSolarAction => ({
	type: SolarActionTypes.SET_SOLAR_DATA,
	payload: {
		data: value,
	},
})

export const setSolarCurrentMeasurement = (): SetCurrentSolarMeasureAction => ({
	type: SolarActionTypes.SET_CURRENT_SOLAR_MEASURE,
})

export const getSolarChartMeasurement = (): GetChartMeasurementAction => ({
	type: SolarActionTypes.GET_CHART_MEASUREMENTS,
})