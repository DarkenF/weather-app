import React, {FC} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {Weather} from "../components/Weather";
import {WeatherList} from "../components/WeatherList";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

interface Props {
  temp: number;
  condition: string;
  country: string;
  longitude?: number;
  latitude?: number;
}

export const Navigation: FC<Props> = ({temp, condition, country, longitude, latitude}) => {
  return (
    <NavigationContainer>
      <BottomTabNavigator temp={temp} condition={condition} country={country} longitude={longitude} latitude={latitude}/>
    </NavigationContainer>
  )
}

const BottomTab = createBottomTabNavigator<any>();

const BottomTabNavigator: FC<any> = ({temp, condition, country, longitude, latitude}) => {

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: {
          display: "none"
        },
        tabBarLabelStyle: {
          fontSize: 15,
          alignItems: "center"
        },
        tabBarStyle: {
            backgroundColor: 'transparent',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
        },
      }}
      initialRouteName="TabOne"
    >
      <BottomTab.Screen
        name="TabOne"
        component={Weather}
        initialParams={{temp, condition, country}}
        options={() => ({
          title: 'Сегодня',
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={WeatherList}
        initialParams={{longitude, latitude, condition}}
        options={{
          title: 'Прогноз на 5 дней',
        }}
      />
    </BottomTab.Navigator>
  );
}
