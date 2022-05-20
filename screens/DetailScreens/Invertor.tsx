import {StyleSheet, ScrollView, SafeAreaView, RefreshControl, View} from "react-native";
import {BaseChart} from "../../components/BaseChart";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getInverterMeasurement} from "../../store/redux/inverter/actionCreators";
import {RootState} from "../../store";
import {Loading} from "../../components/Loading";

export const InverterChartsPage = () => {
	const dispatch = useDispatch()

	const [refreshing, setRefreshing] = React.useState(false);

	const chartsMeasurement = useSelector((state: RootState) => state.inverter.chartsMeasurement)
	const loading = useSelector((state: RootState) => state.inverter.loading)

	useEffect(() => {
		dispatch(getInverterMeasurement())
	}, [])

	useEffect(() => {
		if (!loading) {
			setRefreshing(false)
		}
	}, [loading])

	const onRefresh = () => {
		setRefreshing(true);
		dispatch(getInverterMeasurement())
	}

	if (loading && !refreshing) {
		return <Loading />
	}

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				contentContainerStyle={styles.scrollContainer}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				}
			>
				{chartsMeasurement && (
					<>
						<BaseChart data={chartsMeasurement.pv1InputPower} labels={chartsMeasurement.date} title="Входная мощность (Инвертор 1)" suffix="Вт"/>
						<BaseChart data={chartsMeasurement.pv1Voltage} labels={chartsMeasurement.date} title="Напряжение (Инвертор 1)" suffix="В"/>
						<BaseChart data={chartsMeasurement.pv2InputPower} labels={chartsMeasurement.date} title="Входная мощность (Инвертор 2)" suffix="Вт"/>
						<BaseChart data={chartsMeasurement.pv2Voltage} labels={chartsMeasurement.date} title="Напряжение (Инвертор 2)" suffix="В"/>
						<BaseChart data={chartsMeasurement.outputPower} labels={chartsMeasurement.date} title="Выходная мощность" suffix="Вт"/>
						<BaseChart data={chartsMeasurement.energyToday} labels={chartsMeasurement.date} title="Энергия за день" suffix="кВт"/>
						<BaseChart data={chartsMeasurement.energyTotal} labels={chartsMeasurement.date} title="Общая полученная энергия" suffix="кВт"/>
					</>
				)}
			</ScrollView>
		</SafeAreaView>

	)
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flex: 1,

	},
	scrollContainer: {
		padding: 15
	}
})