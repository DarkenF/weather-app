import React, {FC} from 'react';
import {StatusBar, StyleSheet, Text, View} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from "expo-linear-gradient";
import {RouteProp} from '@react-navigation/native';
import {useSelector} from "react-redux";
import {RootState} from "../store";
import {weatherOptions} from "../utils/getWeatherDescription";

interface Props {
  route:  RouteProp<{ params: {  temp: number,   condition: string, country: string, } }, 'params'>
}

export const Weather: FC<Props> = ({route}) => {
  const {temp, condition, country } = route.params
  const temperature = Math.round(temp)
  const data = useSelector((state: RootState) => state.inverter.data)

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

