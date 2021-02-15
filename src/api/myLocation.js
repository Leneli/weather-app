import * as Location from 'expo-location';
import { Alert } from 'react-native';
import weatherAPI from './weather';

const CITY_DEFAULT = 'Москва';

export default async function myLocationApi({ units }) {
  const { status } = await Location.requestPermissionsAsync();
  const params = { units };

  if (status !== 'granted') {
    Alert.alert('Ошибка', 'В разрешении на доступ к местоположению было отказано!');
    return { city: CITY_DEFAULT };
  }

  const myLocation = await Location.getLastKnownPositionAsync({});

  if (myLocation && myLocation.coords) {
    params.latitude = myLocation.coords.latitude;
    params.longitude = myLocation.coords.longitude;
  } else {
    params.location = CITY_DEFAULT;
  }

  const result = await weatherAPI(params);

  return result;
}