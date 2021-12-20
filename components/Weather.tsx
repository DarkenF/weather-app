import React, {FC} from 'react';
import {View, Text, StyleSheet, StatusBar, SafeAreaView} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {LinearGradient} from "expo-linear-gradient";
import { RouteProp } from '@react-navigation/native';

interface Props {
  route:  RouteProp<{ params: {  temp: number,   condition: string, country: string, } }, 'params'>
}

interface IWeather {
 [name: string]: IWeatherInfo
}

interface IWeatherInfo {
  iconName: any,
  gradient: string[],
  title: string,
  subtitle: string
}

export const weatherOptions: IWeather = {
  Thunderstorm: {
    iconName: 'weather-lightning',
    gradient: ['#141E30', '#243B55'],
    title: 'Сиди дома',
    subtitle: 'Ты видишь что на улице?'
  },
  Drizzle: {
    iconName: 'weather-rainy',
    gradient: ['#3a7bd5', '#3a6073'],
    title: 'Возьми зонтик',
    subtitle: 'Возможно скоро дождь усилится '
  },
  Rain: {
    iconName: 'weather-pouring',
    gradient: ['#000046','#1CB5E0'],
    title: 'На улице дождь',
    subtitle: 'А значит скоро будет радуга!'
  },
  Snow: {
    iconName: 'snowflake',
    gradient: ['#aed0ff', '#95d9dd'],
    title: 'На улице снежок!',
    subtitle: 'Одевайтесь потеплее, лепите снеговиков'
  },
  Dust: {
    iconName: 'weather-windy-variant',
    gradient: ['#B79891', '#94716B'],
    title: 'Пыльно',
    subtitle: 'Лучше закройте окна'
  },
  Smoke: {
    iconName: 'weather-windy',
    gradient: ['#56CCF2', '#2F80ED'],
    title: 'На улице смог :(',
    subtitle: 'Не советую выходить без необходимости'
  },
  Haze: {
    iconName: 'weather-hazy',
    gradient: ['#3E5151', '#DECBA4'],
    title: 'На улице снежок!',
    subtitle: 'Одевайтесь потеплее, лепите снеговиков'
  },
  Mist: {
    iconName: 'weather-fog',
    gradient: ['#606c88', '#3f4c6b'],
    title: 'Ни черта не видно в тумане',
    subtitle: 'Зато как в Сайлент-Хилле :)'
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#56CCF2', '#2F80ED'],
    title: 'Погода супер :)',
    subtitle: 'Иди гулять, хватит сидеть дома!'
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#757F9A', '#D7DDE8'],
    title: 'Облачно',
    subtitle: 'Солнышка совсем не видать :('
  },
}

export const Weather: FC<Props> = ({route}) => {
  const {temp, condition, country } = route.params
  const temperature = Math.round(temp)

  return(
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content"/>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white"/>
        <Text style={styles.temp}>Температура: {temperature}°C</Text>
      </View>
      <View style={{...styles.halfContainer, ...styles.textContainer}} >
        <Text style={styles.countryText}>{country}</Text>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: 'white',
    fontSize: 36,
  },
  temp: {
    fontSize: 42,
    color: 'white',
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: 'left'
  },
  countryText: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: 'center'
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
    textAlign: 'left'
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
});

