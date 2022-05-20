import {InverterActionTypes} from "./actionTypes";
import {GetInverterChartsMeasureAction, GetInverterDataAction, InverterData, SetDataInverterAction} from "./contracts";

export const getInverterMeasurement = (): GetInverterDataAction => ({
	type: InverterActionTypes.GET_INVERTER_DATA
})

export const getInverterChartsMeasure = (): GetInverterChartsMeasureAction => ({
	type: InverterActionTypes.GET_INVERTER_CHARTS_MEASURE
})

export const setInverterMeasurement = (value: InverterData[]): SetDataInverterAction => ({
	type: InverterActionTypes.SET_INVERTER_DATA,
	payload: {
		data: value
	},
})