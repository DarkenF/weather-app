import {Loading} from "./components/Loading";
import {useEffect, useState} from "react";
import {useLocation} from "./hooks/useLocation";
import {Weather as IWeather} from "./api/weather/contracts";
import {getWeatherApi} from "./api/weather/weatherApi";
import {Weather} from "./components/Weather";

export default function App() {
  const [weather, setWeather] = useState<IWeather | null>(null);
  const { longitude, latitude, loading } = useLocation()

  useEffect(() => {
    (async () => {
      if (longitude && latitude) {
        const weather: IWeather= await getWeatherApi(longitude, latitude)

        setWeather(weather)
      }
    })()
  }, [longitude, latitude])

  if (loading || !weather) {
    return <Loading/>
  }

  return weather ? <Weather temp={weather.main.temp} condition={weather.weather[0].main} country={weather.name}/> : null;
}

