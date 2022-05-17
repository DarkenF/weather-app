import React, {FC} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {Routes} from "./contracts";
import {HomeScreen} from "../screens/HomeScreen";
import {DetailsScreen} from "../screens/DetailScreens";
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from "../components/DrawerContent";
import {Colors} from "../assets/styles";
import {InverterChartsPage} from "../screens/DetailScreens/Invertor";
import {SolarChartsPage} from "../screens/DetailScreens/Solar";
import { WindChartsPage } from '../screens/DetailScreens/Wind';

interface Props {
}
const Drawer = createDrawerNavigator();

export const Navigation: FC<Props> = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
	      initialRouteName={Routes.HOME}
	      screenOptions={{
		      headerTintColor: Colors.PRIMARY_COLOR,
		      headerTitleStyle: {
						color: Colors.black,
		      },
		      drawerActiveTintColor: Colors.PRIMARY_COLOR,
					drawerActiveBackgroundColor: '#ffeeee',
        }}
	      drawerContent={props => <DrawerContent {...props}/>}
      >
	      <Drawer.Screen name={Routes.HOME} component={HomeScreen} options={{
					title: "Погода",
	      }}/>
	      <Drawer.Screen name={Routes.DETAIL} component={DetailsScreen} options={{
		      title: "Подробные измерения"
	      }}/>
	      <Drawer.Screen name={Routes.SOLAR_CHARTS} component={SolarChartsPage} options={{
		      title: "Климатическая станция",
		      drawerItemStyle: {
						display: "none"
		      }
	      }}/>
	      <Drawer.Screen name={Routes.WIND_CHARTS} component={WindChartsPage} options={{
		      title: "Ветряная станция",
		      drawerItemStyle: {
			      display: "none"
		      }
	      }}/>
	      <Drawer.Screen name={Routes.INVERTER_CHARTS} component={InverterChartsPage} options={{
		      title: "Инвертор солнечных панелей",
		      drawerItemStyle: {
			      display: "none"
		      }
	      }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

