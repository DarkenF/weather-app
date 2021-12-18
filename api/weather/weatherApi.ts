import axios from "axios";
import {Weather} from "./contracts";

const API_KEY = '166028b7350e169b17d589ccb9d75d64';

export const getWeatherApi = async (longitude: number, latitude: number): Promise<Weather> => {
  return await axios.get<Weather>(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    .then(res => res.data)
}