import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, View, Text, FlatList} from "react-native";
import {Weather as IWeather, WeatherForecast, WeatherForecastItem} from "../api/weather/contracts";
import {getWeatherForecastApi} from "../api/weather/weatherApi";
import {RouteProp} from "@react-navigation/native";
import {LinearGradient} from "expo-linear-gradient";
import {WeatherItem} from "./WeatherItem";
import {weatherOptions} from "../utils/getWeatherDescription";

interface Props {
  route:  RouteProp<{ params: { longitude: number, latitude: number, condition: string } }, 'params'>
}

interface listProps {
  [date: string]: WeatherForecastItem[]
}

export const WeatherList: FC<Props> = ({route}) => {
  const [weatherList, setWeatherList] = useState<WeatherForecast | null>(null);
  const [sortedWeatherList, setSortedWeatherList] = useState<listProps>({});
  const {longitude, latitude, condition } = route.params

  useEffect(() => {
    (async () => {
      if (longitude && latitude) {
        const data = await getWeatherForecastApi(longitude, latitude)

        setWeatherList(data)
        const sortedList = sortedWeather(data.list)
        setSortedWeatherList(sortedList)
      }
    })()
  }, [longitude, latitude])

  const sortedWeather = (weatherList: WeatherForecast['list']): listProps => {
    const sorted: listProps  = {};
    weatherList.forEach(item => {
      const date = item.dt_txt.split(' ')[0];
      if (!sorted[date]) {
        sorted[date] = [item]
      }
      sorted[date] = [...sorted[date], item]
    })

    return sorted;
  }


  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      { weatherList ?
        <FlatList
          data={Object.entries(sortedWeatherList)}
          renderItem={({item}) => <WeatherItem weather={item} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item[1][0].dt_txt}
        />
        :
        <View>
          <Text>Не удалось получить проноз на 5 дней</Text>
        </View>
      }
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 70,
    paddingHorizontal: 10
  },
});