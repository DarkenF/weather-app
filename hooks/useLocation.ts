import {useEffect, useState} from "react";
import * as Location from "expo-location";
import {Alert} from "react-native";
import {LocationObject} from "expo-location";

export interface ILocation {
  longitude?: number;
  latitude?: number;
  loading: boolean
}

export const useLocation = (): ILocation => {
  const [location, setLocation] = useState<LocationObject>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect( () => {
    (async () => {
      try {
        setLoading(true)
        const permission = await Location.requestForegroundPermissionsAsync()

        if (permission.status !== 'granted') {
          Alert.alert('Для работы прложения требуется доступ к метсоположению!')
        }
        const locationResponse = await Location.getCurrentPositionAsync({});
        setLoading(false)
        setLocation(locationResponse)
      } catch (e) {
        setLoading(false)
        Alert.alert('Ошибка в определении местоположения!')
      }
    })();
  }, [])


  return {
    longitude: location?.coords.longitude,
    latitude: location?.coords.latitude,
    loading,
  }

};