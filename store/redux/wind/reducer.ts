import {WindAction, WindData} from "./contracts";
import {WindActionTypes} from "./actionTypes";
import { windData } from "../../db";

export interface WindState {
  data: WindData[]
	currentMeasure?: WindData;
}

const initialState: WindState  = {
  data: windData,
}

export const WindReducer = (state = initialState, action: WindAction): WindState => {
  switch (action.type) {
    case WindActionTypes.SET_WIND_DATA:
      return {
        ...state,
        data: action.payload.data
      };
	  case WindActionTypes.SET_CURRENT_WIND_MEASURE:
			const lastMeasure = state.data[state.data.length - 1]

		  return {
			  ...state,
			  currentMeasure: lastMeasure,
		  };
    default:
      return state;
  }
}