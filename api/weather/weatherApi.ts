import axios, {AxiosResponse} from "axios";
import {Weather} from "./contracts";
import {SolarData} from "../../store/redux/solar/contracts";
import {inverterData, solarData, windData} from "../../store/db";
import {WindData} from "../../store/redux/wind/contracts";
import {InverterData} from "../../store/redux/inverter/contracts";

const API_KEY = '166028b7350e169b17d589ccb9d75d64';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'
//
// export const getWeatherApi = async (longitude: number, latitude: number): Promise<Weather> => {
//   return await axios.get<Weather>(`${BASE_URL}weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
//     .then(res => res.data)
// }
//
// export const getWeatherForecastApi = async (longitude: number, latitude: number): Promise<WeatherForecast> => {
//   return await axios.get<WeatherForecast>(`${BASE_URL}forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
//     .then(res => res.data)
// }

export const getWeatherSolarApi = (): Promise<SolarData[]> => {
	// return axios.get<Weather>(`${BASE_URL}/api/solar`)
	return new Promise<SolarData[]>((resolve) => {
		setTimeout(() => {
			resolve(solarData)
		}, 1000)
	})
}

export const getWeatherWindApi = (): Promise<WindData[]> => {
	// return axios.get<Weather>(`${BASE_URL}/api/solar`)
	return new Promise<WindData[]>((resolve) => {
		setTimeout(() => {
			resolve(windData)
		}, 1000)
	})
}

export const getWeatherInverterApi = (): Promise<InverterData[]> => {
	// return axios.get<Weather>(`${BASE_URL}/api/solar`)
	return new Promise<InverterData[]>((resolve) => {
		setTimeout(() => {
			resolve(inverterData)
		}, 1000)
	})
}