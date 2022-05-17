type IconNames = 'weather-pouring' | 'weather-snowy' | 'weather-sunny' | 'weather-cloudy' | 'weather-night-partly-cloudy' | 'weather-partly-cloudy'


export interface IWeatherInfo {
	iconName: IconNames,
	title: string,
	subtitle?: string
}

export const weatherOptions = {
	rain: {
		iconName: 'weather-pouring' as IconNames,
		title: 'Пасмурно',
	},
	snow: {
		iconName: 'weather-snowy' as IconNames,
		title: 'Снег',
	},
	clear: {
		iconName: 'weather-sunny' as IconNames,
		title: 'Солнечно',
		subtitle: 'Иди гулять, хватит сидеть дома!'
	},
	clouds: {
		iconName: 'weather-cloudy' as IconNames,
		title: 'Облачно',
		subtitle: 'Солнышка совсем не видать :('
	},
	night: {
		iconName: 'weather-night-partly-cloudy' as IconNames,
		title: 'Ночь',
	},
	partySun: {
		iconName: 'weather-partly-cloudy' as IconNames,
		title: 'Облачно с прояснениями',
	}
}

export const getWeatherDescription = (dateValue: string, precipitation: number, inputPower: number): IWeatherInfo => {
	const date = new Date(dateValue)
	const month = date.getMonth();
	const hours = date.getHours();
	const isWinter = month > 11 && month < 3;
	const isNight = hours < 6 && hours > 21;
	const isPrecipitation = precipitation > 0;

	if (isPrecipitation) {
		if (isWinter) {
			return weatherOptions.snow;
		} else {
			return weatherOptions.rain;
		}
	}

	if (isNight) {
		return weatherOptions.night;
	} else {
		if (inputPower > 600) {
			return weatherOptions.clear;
		}
		if (inputPower < 600 && inputPower > 300) {
			return weatherOptions.partySun;
		} else {
			return weatherOptions.clouds
		}
	}
}