import {View, Text, ScrollView, StyleSheet} from "react-native";
import {useSelector} from "react-redux";
import {AppState} from "../../store/redux/rootReducer";
import {BaseChart} from "../../components/BaseChart";

export const WindChartsPage = () => {
	const windMeasurements = useSelector((state: AppState) => state.wind.data)
	const windSpeedMeasure = windMeasurements.map(measure => Math.abs(measure.ws1avg))
	const dates = windMeasurements.map(measure => measure.date)

	return (
		<ScrollView style={styles.container}>
			{windSpeedMeasure && (
				<BaseChart data={windSpeedMeasure} labels={dates} title="Скорость ветра" suffix="м/с"/>
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