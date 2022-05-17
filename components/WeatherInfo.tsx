import React, {FC} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {Colors} from "../assets/styles";
import {IWeatherInfo} from "../utils/getWeatherDescription";
import {MaterialCommunityIcons} from "@expo/vector-icons";

interface Props {
	temp?: number;
	info: IWeatherInfo;
}

export const WeatherInfo: FC<Props> = ({temp, info}) => {
	return (
		<View style={styles.weatherInfo}>
			<Text style={styles.texSecondary}>{info.title}</Text>
			<MaterialCommunityIcons name={info.iconName} size={100} color={Colors.bgColor}/>
			<Text style={styles.textPrimary}>{temp}°</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	weatherInfo: {
		alignItems: 'center',
	},
	weatherDescription: {
		textTransform: 'capitalize',
	},
	weatherIcon: {
		width: 100,
		height: 100,
	},
	textPrimary: {
		fontSize: 40,
		color: Colors.PRIMARY_COLOR,
		marginTop: 10,
	},
	texSecondary: {
		fontSize: 20,
		color: Colors.SECONDARY_COLOR,
		fontWeight: '500',
		marginBottom: 10,
	},
})