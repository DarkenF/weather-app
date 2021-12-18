interface WeatherDescription {
  id: number,
  main: string,
  description: string,
  icon: string
}

interface WeatherMain {
  temp: number,
  feels_like: number,
  temp_min: number,
  temp_max: number,
  pressure: number,
  humidity: number
}

interface Coordinate {
  lon: number,
  lat: number
}

interface Wind {
  speed: number,
  deg: number
}

interface SystemInfo {
  type: number,
  id: number,
  message: number,
  country: string,
  sunrise: number,
  sunset: number
}

interface Clouds {
  all: number
}

export interface Weather {
  coord: Coordinate,
  weather: WeatherDescription[],
  base: string,
  main: WeatherMain,
  wind: Wind,
  clouds: Clouds,
  dt: number,
  sys: SystemInfo,
  timezone: number,
  id: number,
  name: string,
  cod: number
}
