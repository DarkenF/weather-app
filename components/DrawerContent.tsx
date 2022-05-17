import React from "react"
import {Image, StyleSheet, Text, View} from "react-native";
import {DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import {Colors} from "../assets/styles";

export const DrawerContent = (props: DrawerContentComponentProps) => {
	return(
			<View style={styles.drawerItemContainer}>
				<View style={styles.header}>
					<Image
						style={styles.logo}
						source={require('../assets/icons/logo.png')}
					/>
				</View>
				<DrawerContentScrollView contentContainerStyle={{
					paddingTop: 0,
				}}>
					<DrawerItemList {...props} />
				</DrawerContentScrollView>
				<View style={styles.bottom}>
					<Text style={styles.bottomText}>Разработано:</Text>
					<View style={styles.bottomLogoContainer}>
						<Image
							style={styles.instituteLogo}
							source={require('../assets/icons/ivti.png')}
						/>
						<Image
							style={styles.instituteLogo}
							source={require('../assets/icons/igvie.png')}
						/>
					</View>
				</View>
			</View>
	)
}

const styles = StyleSheet.create({
	drawerItemContainer: {
		flex: 1,
		backgroundColor: Colors.default,
		justifyContent: 'flex-start'
	},
	logo: {
		marginTop: 40,
		width: "100%",
		height: 100,
		resizeMode: 'contain'
	},
	header: {
		padding: 10,
		display: "flex",
		justifyContent: "center",
	},
	bottom: {
		paddingBottom: 20
	},
	bottomText: {
		fontSize: 16,
		fontWeight: "bold",
		paddingBottom: 10,
		paddingLeft: 10
	},
	instituteLogo: {
		width: "40%",
		height: 50,
		resizeMode: 'contain'
	},
	bottomLogoContainer: {
		display: "flex",
		justifyContent: "space-around",
		flexDirection: "row",
	}
})
