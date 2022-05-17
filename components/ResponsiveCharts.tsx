import {FC, useState} from "react";
import { Chart, VerticalAxis, HorizontalAxis, Line } from 'react-native-responsive-linechart'
import {Dimensions, Text, View} from "react-native";

interface Props {
	data: any[]
}
const data1 = [
	{ x: -2, y: 1 },
	{ x: -1, y: 0 },
	{ x: 8, y: 13 },
	{ x: 9, y: 11.5 },
	{ x: 10, y: 12 }
]

const data2 = [
	{ x: -2, y: 15 },
	{ x: -1, y: 10 },
	{ x: 0, y: 12 },
	{ x: 1, y: 7 },
	{ x: 8, y: 12 },
	{ x: 9, y: 13.5 },
	{ x: 10, y: 18 }
]

export const ResponsiveCharts:FC<Props> = () => {
	// const [checkedPoint, setCheckedPoint] = useState<number | null>(null);
	//
	// const onPointClick = ({value}: {value: number}) => {
	// 	const roundedValue = +value.toFixed(2)
	// 	setCheckedPoint(roundedValue)
	// }

	return (
		<View>
			<Chart
				style={{ height: 200, width: '100%', backgroundColor: '#eee' }}
				xDomain={{ min: -2, max: 10 }}
				yDomain={{ min: -2, max: 20 }}
				padding={{ left: 20, top: 10, bottom: 10, right: 10 }}
			>
				<VerticalAxis tickValues={[0, 4, 8, 12, 16, 20]} />
				<HorizontalAxis tickCount={3} />
				<Line data={data1} smoothing="none" theme={{ stroke: { color: 'red', width: 1 } }} />
				<Line data={data2} smoothing="cubic-spline" theme={{ stroke: { color: 'blue', width: 1 } }} />
			</Chart>
		</View>
	)
}