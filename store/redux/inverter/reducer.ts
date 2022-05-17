import {InverterAction, InverterData} from "./contracts";
import {InverterActionTypes} from "./actionTypes";
import { inverterData } from "../../db";

export interface InverterState {
  data: InverterData[]
}

const initialState: InverterState  = {
  data: inverterData,
}

export const InverterReducer = (state = initialState, action: InverterAction): InverterState => {
  switch (action.type) {
    case InverterActionTypes.SET_INVERTER_DATA:
      return {
        ...state,
        data: action.payload.data
      };
    default:
      return state;
  }
}