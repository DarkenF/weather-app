import {InverterActionTypes} from "./actionTypes";

export interface InverterData {
  index: number,
  date: string,
  pv1InputPower: number,
  pv1Voltage: number,
  pv1Current: number,
  pv2InputPower: number,
  pv2Voltage: number,
  pv2Current: number,
  gridVoltage: number,
  gridCurrent: number,
  gridFrequency: number,
  outputPower: number,
  energyToday: number,
  energyTotal: number,
}

export interface SetDataInverterAction {
  type: InverterActionTypes.SET_INVERTER_DATA;
  payload: {
    data: InverterData[];
  }
}

export interface GetInverterDataAction {
  type: InverterActionTypes.GET_INVERTER_DATA;
}

export interface GetInverterChartsMeasureAction {
  type: InverterActionTypes.GET_INVERTER_CHARTS_MEASURE;
}

export type InverterAction = SetDataInverterAction | GetInverterDataAction | GetInverterChartsMeasureAction;