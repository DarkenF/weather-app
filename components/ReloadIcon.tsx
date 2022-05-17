import React from 'react'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import {useDispatch} from "react-redux";
import {getSolarMeasurement} from "../store/redux/solar/actionCreators";
import {Colors} from "../assets/styles";

export const ReloadIcon = () => {
	const dispatch = useDispatch();
	const reloadIconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh'

	const updateWeather = () => {
		dispatch(getSolarMeasurement());
	}

	return (
		<Ionicons onPress={updateWeather} name={reloadIconName} size={24} color={Colors.PRIMARY_COLOR} />
	)
}
