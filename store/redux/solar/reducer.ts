import {CurrentMeasure, SolarAction, SolarData} from "./contracts";
import {SolarActionTypes} from "./actionTypes";
import { solarData } from "../../db";

interface Measurements {
	temp: number[],
	pressure: number[],
	relativeHumidity: number[],
	precipitation: number[],
}

export interface SolarState {
  data: SolarData[]
	currentMeasurement?: CurrentMeasure;
	chartsMeasurement?: Measurements;
	loading: boolean;
}

const initialState: SolarState  = {
  data: solarData,
	loading: false,
}

export const SolarReducer = (state = initialState, action: SolarAction): SolarState => {
  switch (action.type) {
	  case SolarActionTypes.GET_SOLAR_DATA:
		  return {
			  ...state,
			  loading: true,
		  };
    case SolarActionTypes.SET_SOLAR_DATA:
      return {
        ...state,
        data: action.payload.data
      };
		case SolarActionTypes.GET_CHART_MEASUREMENTS:
			const nextMeasure: Measurements = {
				temp: [],
				pressure: [],
				relativeHumidity: [],
				precipitation: [],
			};
			state.data.forEach(measure => {
				nextMeasure.temp.push(measure.ta)
				nextMeasure.pressure.push(measure.pa)
				nextMeasure.relativeHumidity.push(measure.rh)
				nextMeasure.precipitation.push(measure.pr1h)
			})

      return {
        ...state,
	      chartsMeasurement: nextMeasure,
      };
	  case SolarActionTypes.SET_CURRENT_SOLAR_MEASURE:
			const {date, dp, ta, wc, rh, pa, pr1h} = state.data[state.data.length - 1];

		  return {
			  ...state,
			  currentMeasurement: {
				  date,
				  dewPoint: dp,
				  temp: ta,
				  windCooling: wc,
				  relativeHumidity: rh,
				  pressure: pa,
				  precipitation: pr1h,
			  },
				loading: false
		  };
    default:
      return state;
  }
}