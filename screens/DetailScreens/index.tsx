import {Text, View, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import React, {FC} from "react";
import {Colors} from "../../assets/styles";
import {Routes} from "../../navigation/contracts";
import {useNavigation} from "@react-navigation/native";

const Item:FC<{title: string, page: Routes}> = ({title, page}) => {
	const navigation = useNavigation();

	const onPressHandler = () => {
		navigation.navigate(page as any);
	}

	return (
		<TouchableOpacity onPress={onPressHandler}  style={styles.itemContainer}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	)
}

export const DetailsScreen = () => {
	const list = [
		{
			title: 'Инвертор солнечных панелей',
			page: Routes.INVERTER_CHARTS,
		},
		{
			title: 'Ветряная станция',
			page: Routes.WIND_CHARTS,
		},
		{
			title: 'Климатическая станция',
			page: Routes.SOLAR_CHARTS,
		}
	]


	return (
		<View style={styles.container}>
			<Text style={styles.title}>Выберите устройство сбора данных:</Text>
			<FlatList
				data={list}
				renderItem={({item}) => <Item title={item.title} page={item.page} />}
				showsVerticalScrollIndicator={false}
				keyExtractor={item => item.title}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20
	},
	title: {
		fontSize: 20,
		fontWeight: "500",
		marginBottom: 15,
	},
	text: {
		fontSize: 20,
		// color: Colors.SECONDARY_COLOR,
		fontWeight: '500',
		lineHeight: 25,
		marginBottom: 10,
	},
	itemContainer: {
		width: "100%",
		flex: 1,
		alignItems: 'center',
		paddingTop: 10,
		paddingLeft: 10,
		// backgroundColor: 'rgba(180,208,169,0.27)',
		// backgroundColor: '#b6f1e6',
		paddingRight: 10,
		paddingBottom: 10,
		borderWidth: 1,
		borderRadius: 10,
		marginBottom: 7,
		borderColor: Colors.PRIMARY_COLOR,
		justifyContent: "space-between",
	}
})
