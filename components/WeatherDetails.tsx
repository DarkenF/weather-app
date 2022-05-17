import React, {FC} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome5, MaterialCommunityIcons, AntDesign, Entypo } from '@expo/vector-icons'
import {Colors} from "../assets/styles";
import {CurrentMeasure} from "../store/redux/solar/contracts";
import {ReloadIcon} from "./ReloadIcon";

interface Props {
	currentWeather: CurrentMeasure;
	windSpeed: number;
}

export const WeatherDetails:FC<Props> = ({currentWeather, windSpeed}) => {
	const { temp, pressure, relativeHumidity, windCooling, precipitation, date, dewPoint} = currentWeather;
	const feelsTemp = temp - windCooling;

	const windSpeedValue = `${Math.abs(windSpeed)} м/с`;

	return (
		<>
			<View style={styles.measureDateWrapper}>
				<Text style={styles.measureDate}>Последнее обновление: {date}</Text>
				<ReloadIcon />
			</View>
			<View style={styles.weatherDetails}>
				<View style={styles.weatherDetailsRow}>
					<View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: Colors.BORDER_COLOR }}>
						<View style={styles.weatherDetailsRow}>
							<FontAwesome5 name="temperature-low" size={25} color={Colors.PRIMARY_COLOR} />
							<View style={styles.weatherDetailsItems}>
								<Text>Ощущается как :</Text>
								<Text style={styles.textSecondary}>{feelsTemp} °</Text>
							</View>
						</View>
					</View>
					<View style={styles.weatherDetailsBox}>
						<View style={styles.weatherDetailsRow}>
							<MaterialCommunityIcons name="water-percent" size={40} color={Colors.PRIMARY_COLOR} />
							<View style={styles.weatherDetailsItems}>
								<Text>Влажность :</Text>
								<Text style={styles.textSecondary}>{relativeHumidity} %</Text>
							</View>
						</View>
					</View>
				</View>
				<View style={{ ...styles.weatherDetailsRow, borderTopWidth: 1, borderTopColor: Colors.BORDER_COLOR }}>
					<View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: Colors.BORDER_COLOR }}>
						<View style={styles.weatherDetailsRow}>
							<MaterialCommunityIcons name="weather-windy" size={30} color={Colors.PRIMARY_COLOR} />
							<View style={styles.weatherDetailsItems}>
								<Text>Скорость ветра :</Text>
								<Text style={styles.textSecondary}>{windSpeedValue}</Text>
							</View>
						</View>
					</View>
					<View style={styles.weatherDetailsBox}>
						<View style={styles.weatherDetailsRow}>
							<AntDesign name="dotchart" size={30} color={Colors.PRIMARY_COLOR} />
							<View style={styles.weatherDetailsItems}>
								<Text>Уровень осадков :</Text>
								<Text style={styles.textSecondary}>{precipitation} мм </Text>
							</View>
						</View>
					</View>
				</View>
				<View style={{ ...styles.weatherDetailsRow, borderTopWidth: 1, borderTopColor: Colors.BORDER_COLOR }}>
					<View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: Colors.BORDER_COLOR }}>
						<View style={styles.weatherDetailsRow}>
							<Entypo name="drop" size={30} color={Colors.PRIMARY_COLOR} />
							<View style={styles.weatherDetailsItems}>
								<Text>Точка росы :</Text>
								<Text style={styles.textSecondary}>{dewPoint} °</Text>
							</View>
						</View>
					</View>
					<View style={styles.weatherDetailsBox}>
						<View style={styles.weatherDetailsRow}>
							<MaterialCommunityIcons name="speedometer" size={30} color={Colors.PRIMARY_COLOR} />
							<View style={styles.weatherDetailsItems}>
								<Text>Давление :</Text>
								<Text style={styles.textSecondary}>{pressure} мм.рт.ст.</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	weatherDetails: {
		marginTop: 'auto',
		margin: 15,
		borderWidth: 1,
		borderColor: Colors.BORDER_COLOR,
		borderRadius: 10,
	},
	weatherDetailsRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	weatherDetailsBox: {
		flex: 1,
		padding: 20,
	},
	weatherDetailsItems: {
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
	},
	textSecondary: {
		fontSize: 15,
		color: Colors.SECONDARY_COLOR,
		fontWeight: '700',
		margin: 7,
	},
	measureDate: {
		fontSize: 15,
		color: Colors.SECONDARY_COLOR,
		fontWeight: '700',
	},
	measureDateWrapper: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginLeft: 15,
		marginBottom: 7,
		marginRight: 15,
	}
})