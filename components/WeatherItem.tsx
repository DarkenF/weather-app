import React, {FC} from 'react';
import {View, StyleSheet, Text} from "react-native";
import {WeatherForecastItem} from "../api/weather/contracts";

interface Props {
  weather: [string, WeatherForecastItem[]]
}

export const WeatherItem: FC<Props> = ({weather}) => {
  const weatherOfTheDay = weather[1];

  const averageWeatherValue = (todayWeathers: WeatherForecastItem[], value: 'temp' | 'pressure'| 'humidity') => {
    const temps = todayWeathers.map(item => item.main[value])
    const avg = temps.reduce((a, b) => a + b, 0) / temps.length;

    return Math.round(avg);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Дата: {weather[0]} </Text>
      <Text style={styles.text}>Средняя температруа: {averageWeatherValue(weatherOfTheDay, 'temp')}°C</Text>
      <Text style={styles.text}>Атмосферное давление: {averageWeatherValue(weatherOfTheDay, 'pressure')} кПа </Text>
      <Text style={styles.text}>Влажность: {averageWeatherValue(weatherOfTheDay, 'humidity')} % </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#eee',
    marginTop: 5,
    justifyContent: "space-between",
  },
  text: {
    color: "black",
    fontSize: 20,
    lineHeight: 21,
  },
})
