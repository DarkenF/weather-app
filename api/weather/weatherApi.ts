import axios from "axios";
import {Weather, WeatherForecast} from "./contracts";

const API_KEY = '166028b7350e169b17d589ccb9d75d64';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

export const getWeatherApi = async (longitude: number, latitude: number): Promise<Weather> => {
  return await axios.get<Weather>(`${BASE_URL}weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    .then(res => res.data)
}

export const getWeatherForecastApi = async (longitude: number, latitude: number): Promise<WeatherForecast> => {
  return await axios.get<WeatherForecast>(`${BASE_URL}forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    .then(res => res.data)
}