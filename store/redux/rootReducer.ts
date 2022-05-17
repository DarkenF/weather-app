import { combineReducers } from 'redux';
import {InverterReducer, InverterState} from "./inverter/reducer";
import {WindReducer, WindState} from "./wind/reducer";
import {SolarReducer, SolarState} from "./solar/reducer";

export interface AppState {
  inverter: InverterState
  wind: WindState
  solar: SolarState
}

export const rootReducer = combineReducers({
  inverter: InverterReducer,
  wind: WindReducer,
  solar: SolarReducer,
})
