import {
	LineChart,
} from "react-native-chart-kit";
import {Dimensions, View, Text, StyleSheet} from "react-native";
import {FC, useState} from "react";
import {Colors} from "../assets/styles";

interface Props {
	labels: string[];
	data: number[];
	title: string;
	suffix: string;
}

export const BaseChart:FC<Props> = ({data, labels, title, suffix }) => {
	const [checkedPoint, setCheckedPoint] = useState<string>('');
	const [checkedPointIndex, setCheckedPointIndex] = useState<number>(0);

	const onPointClick = ({value, index}: {value: number, index: number}) => {
		const roundedValue = value.toFixed(2)
		setCheckedPointIndex(index)
		setCheckedPoint(roundedValue)
	}

	return (
		<View>
			<View>
				<Text style={styles.title}>{title}</Text>
			</View>
			<View style={styles.textContainer}>
				{
					checkedPoint ? (
						<>
							<Text style={styles.text}>Выбранное значение:</Text>
							<Text style={styles.textSecondary}>{checkedPoint} {suffix}</Text>
							<Text style={styles.text}>Дата:</Text>
							<Text style={styles.textSecondary}> {labels[checkedPointIndex]}</Text>
						</>
					) : null
				}
			</View>
			<View>
				<LineChart
					data={{
						labels,
						datasets: [
							{
								data,
							}
						]
					}}
					width={Dimensions.get("window").width - 30} // from react-native
					height={220}
					yAxisSuffix={suffix}
					withVerticalLabels={false}
					yAxisInterval={1} // optional, defaults to 1
					chartConfig={{
						backgroundColor: "#fff",
						backgroundGradientFrom: "#fff",
						backgroundGradientTo: "#fff",
						decimalPlaces: 0, // optional, defaults to 2dp
						color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
						labelColor: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
						style: {
							borderRadius: 16
						},
					}}
					getDotColor={(dataPoint, dataPointIndex) => {
						if (dataPoint.toFixed(2) === checkedPoint && dataPointIndex === checkedPointIndex) {
							return Colors.PRIMARY_COLOR
						}
						return `rgba(134, 65, 244)`
					}}
					bezier
					style={{
						marginVertical: 8,
						borderRadius: 16
					}}
					onDataPointClick={onPointClick}
				/>
				<View style={styles.intervalText}>
					<Text style={styles.text}>Интервал: </Text>
					<Text style={styles.textSecondary}>{labels[0]} - {labels[labels.length - 1]}</Text>
				</View>
			</View>
			<View style={styles.lineBreak} />
		</View>
	)
}

const styles = StyleSheet.create({
	textSecondary: {
		fontSize: 15,
		color: Colors.SECONDARY_COLOR,
		fontWeight: '700',
		margin: 7,
	},
	textContainer: {
		display: "flex",
	},
	intervalText: {
		position: "absolute",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		bottom: 15,
		left: 10,
	},
	text: {
		fontSize: 15,
	},
	chartContainer: {
		position: "relative"
	},
	title: {
		fontSize: 24,
		fontWeight: '700',
		color: Colors.PRIMARY_COLOR,
		textAlign: "center",
		marginBottom: 5
	},
	lineBreak: {
		height: 2,
		backgroundColor: '#fff',
		marginLeft: -20,
		width: '140%',
		marginBottom: 10,
	}
})