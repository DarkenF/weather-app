import {View, Text, StyleSheet, ScrollView} from "react-native";
import {BaseChart} from "../../components/BaseChart";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../store/redux/rootReducer";
import {useEffect, useState} from "react";
import {getSolarChartMeasurement} from "../../store/redux/solar/actionCreators";


interface Measurements {
	temp: number[],
	pressure: number[],
	relativeHumidity: number[],
	precipitation: number[],
}

export const SolarChartsPage = () => {
	const dispatch = useDispatch();

	const solarMeasurements = useSelector((state: AppState) => state.solar.data)
	const chartsMeasurement = useSelector((state: AppState) => state.solar.chartsMeasurement)
	const dates = solarMeasurements.map(item => item.date)

	useEffect(() => {
		dispatch(getSolarChartMeasurement())
	}, [dispatch])

	return (
		<ScrollView style={styles.container}>
			{chartsMeasurement && (
				<>
					<BaseChart data={chartsMeasurement.temp} labels={dates} title="Температура" suffix="℃"/>
					<BaseChart data={chartsMeasurement.pressure} labels={dates} title="Атмосферное давление" suffix="Па"/>
					<BaseChart data={chartsMeasurement.relativeHumidity} labels={dates} title="Относительная влажность" suffix="%"/>
					<BaseChart data={chartsMeasurement.precipitation} labels={dates} title="Уровень осадков" suffix="мм"/>
				</>
			)}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flex: 1,
		padding: 15
	}
})