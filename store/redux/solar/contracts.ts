import {SolarActionTypes} from "./actionTypes";

export interface SolarData {
  index: number,
  date: string,
  ta: number,
  dp: number,
  wc: number,
  rh: number,
  pa: number,
  pr: number,
  pr1h: number,
  pr24h: number,
  sr1m: number,
  sr1d: number,
  sr45_1m: number,
  sr45_1d: number,
  sd1h: number,
  sd1d: number,
  sd45_1h: number,
  sd45_1d: number,
}

export interface CurrentMeasure {
	date: string
	temp: number;
	dewPoint: number;
	windCooling: number;
	relativeHumidity: number;
	pressure: number;
	precipitation: number;
}

export interface SetDataSolarAction {
  type: SolarActionTypes.SET_SOLAR_DATA;
  payload: {
    data: SolarData[];
  }
}

export interface SetCurrentSolarMeasureAction {
	type: SolarActionTypes.SET_CURRENT_SOLAR_MEASURE;
}

export interface GetSolarDataAction {
	type: SolarActionTypes.GET_SOLAR_DATA;
}

export interface GetChartMeasurementAction {
	type: SolarActionTypes.GET_CHART_MEASUREMENTS;
}

export type SolarAction = SetDataSolarAction | SetCurrentSolarMeasureAction | GetSolarDataAction | GetChartMeasurementAction;