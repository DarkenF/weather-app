import {View, StyleSheet, SafeAreaView, RefreshControl} from "react-native";
import React, {useEffect} from "react";
import {WeatherDetails} from "../../components/WeatherDetails";
import {WeatherInfo} from "../../components/WeatherInfo";
import {useDispatch, useSelector} from "react-redux";
import { AppState } from "../../store/redux/rootReducer";
import {getSolarMeasurement} from "../../store/redux/solar/actionCreators";
import {Loading} from "../../components/Loading";
import { ScrollView } from "react-native";
import {getWindMeasurement} from "../../store/redux/wind/actionCreators";
import {getWeatherDescription} from "../../utils/getWeatherDescription";
import {getInverterMeasurement} from "../../store/redux/inverter/actionCreators";

export const HomeScreen = () =>  {
	const dispatch = useDispatch();
	const [refreshing, setRefreshing] = React.useState(false);

	const currentWeather = useSelector((state: AppState) => state.solar.currentMeasurement)
	const windMeasure = useSelector((state: AppState) => state.wind.currentMeasure)
	const loading = useSelector((state: AppState) => state.solar.loading)
	const inverterData = useSelector((state: AppState) => state.inverter.data)
	const currentSolarPower = inverterData.length ? inverterData[inverterData.length - 1].pv1InputPower : 700;

	const windSpeed = windMeasure?.ws1avg || 0;

	useEffect(() => {
		if (!currentWeather) {
			dispatch(getSolarMeasurement())
			dispatch(getWindMeasurement())
			dispatch(getInverterMeasurement())
		}
		if (!loading) {
			setRefreshing(false);
		}
	}, [currentWeather, loading])

	if (!currentWeather || (loading && !refreshing)) {
		return <Loading />
	}

	const weatherInfo = getWeatherDescription(currentWeather.date, currentWeather.precipitation, currentSolarPower )

	const onRefresh =() => {
		setRefreshing(true)
		dispatch(getSolarMeasurement())
		dispatch(getWindMeasurement())
	};

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				contentContainerStyle={styles.scrollView}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				}
			>
				<View style={styles.main}>
					<WeatherInfo temp={currentWeather.temp} info={weatherInfo} />
				</View>
				<WeatherDetails currentWeather={currentWeather} windSpeed={windSpeed} />
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	main: {
		justifyContent: 'center',
		flex: 1,
	},
	reloadIcon: {
		position: "absolute",
		top: 0,
		right: 10,
	},
	scrollView: {
		flex: 1,
	},
})