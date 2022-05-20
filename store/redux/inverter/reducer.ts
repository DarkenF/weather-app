import {InverterAction, InverterData} from "./contracts";
import {InverterActionTypes} from "./actionTypes";

interface InverterMeasurements {
	date: string[],
	pv1InputPower: number[],
	pv1Voltage: number[],
	pv2InputPower: number[],
	pv2Voltage: number[],
	outputPower: number[],
	energyToday: number[],
	energyTotal: number[]
}

export interface InverterState {
  data: InverterData[];
	chartsMeasurement?: InverterMeasurements;
	loading: boolean;
}

const initialState: InverterState  = {
  data: [],
	loading: false,
}

export const InverterReducer = (state = initialState, action: InverterAction): InverterState => {
  switch (action.type) {
    case InverterActionTypes.SET_INVERTER_DATA:
      return {
        ...state,
        data: action.payload.data
      };
	  case InverterActionTypes.GET_INVERTER_DATA:
		  return {
			  ...state,
			  loading: true,
		  };
	  case InverterActionTypes.GET_INVERTER_CHARTS_MEASURE:
			const chartsData: InverterMeasurements = {
				date: [],
				pv1InputPower: [],
				pv1Voltage: [],
				pv2InputPower: [],
				pv2Voltage: [],
				outputPower: [],
				energyToday: [],
				energyTotal: []
			}
			state.data.forEach(item => {
				chartsData.date.push(item.date)
				chartsData.pv1InputPower.push(item.pv1InputPower)
				chartsData.pv1Voltage.push(item.pv1Voltage)
				chartsData.pv2InputPower.push(item.pv2InputPower)
				chartsData.pv2Voltage.push(item.pv2Voltage)
				chartsData.outputPower.push(item.outputPower)
				chartsData.energyToday.push(item.energyToday)
				chartsData.energyTotal.push(item.energyTotal)
			})

			return {
				...state,
				chartsMeasurement: chartsData,
				loading: false,
			}
	  default:
      return state;
  }
}