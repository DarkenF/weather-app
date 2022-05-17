import {WindActionTypes} from "./actionTypes";

export interface WindData {
  index: number,
  date: string,
  ws1avg: number,
  wd1avg: number,
  ws1min2: number,
  ws1avg2: number,
  ws1max2: number,
  wd1min2: number,
  wd1avg2: number,
  wd1max2: number,
  ws1min10: number,
  ws1avg10: number,
  ws1max10: number,
  wd1min10: number,
  wd1avg10: number,
  wd1max10: number,
}

export interface SetDataWindAction {
  type: WindActionTypes.SET_WIND_DATA;
  payload: {
    data: WindData[];
  }
}

export interface GetWinDataAction {
	type: WindActionTypes.GET_WIND_DATA;
}

export interface SetCurrentWindMeasureAction {
	type: WindActionTypes.SET_CURRENT_WIND_MEASURE;
}

export type WindAction = SetDataWindAction | GetWinDataAction | SetCurrentWindMeasureAction;