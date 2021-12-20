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
  deg: number,
  gust?: number,
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

export interface WeatherForecastItem {
  dt: number,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    sea_level: number,
    grnd_level: number,
    humidity: number,
    temp_kf: number
  },
  weather: WeatherDescription[],
  clouds: Clouds,
  wind: Wind,
  visibility: number,
  pop: number,
  sys: {
    pod: string
  },
  dt_txt: string
}

export interface WeatherForecast {
  cod: string,
  message: number,
  cnt: number,
  list: WeatherForecastItem[]
  city: {
    id: number,
    name: string,
    coord: Coordinate,
    country: string,
    timezone: number,
    sunrise: number,
    sunset: number
  }
}

