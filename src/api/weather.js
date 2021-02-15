import { Alert } from 'react-native';
import { Http } from "./Http";
import { TEMPERATURE_UNITS } from "../constants/temperatureUnits";
import {
  ICON_WEATHER_CLOUD,
  ICON_WEATHER_PART_CLOUDY,
  ICON_WEATHER_RAIN,
  ICON_WEATHER_STORM,
  ICON_WEATHER_SUN,
  TYPE_WEATHER_NIGHT,
  TYPE_WEATHER_RAIN,
  TYPE_WEATHER_SUN
} from '../constants/weatherTypes';

const API_KEY = 'd1b419c80c0e9ce619786d49c7fbd971';
const LANG = 'ru';
const UNIT_DEFAULT = 'standard'
const UNIT_C = TEMPERATURE_UNITS[0].value;

export default async function weatherAPI({
  location,
  latitude,
  longitude,
  units = UNIT_DEFAULT,
  lang = LANG,
}) {
  const q = location ? `q=${location}` : latitude && longitude ? `lat=${latitude}&lon=${longitude}` : '';
  const URL =
    `http://api.openweathermap.org/data/2.5/weather?${q}&units=${units}&lang=${lang}&appid=${API_KEY}`;

  try {
    const data = await Http.get(URL);
    const { cod, message, name: city, main, weather = [], wind, precipitation, clouds } = data;

    if (cod >= 400) {
      Alert.alert('Ошибка', message);
      throw new Error(message);
    }

    const { temp, humidity, pressure } = main;
    const [descInfo = {}] = weather;
    const { description, icon } = descInfo;
    const { speed, deg } = wind;

    const weatherType = getWeatherType(icon);

    const weatherMain = {
      icon: getMainIcon(icon),
      temperature: Math.round(temp),
      description: description ? description[0].toUpperCase() + description.slice(1) : '',
    };

    const weatherDetails = [
      {
        key: 'wind',
        title: 'Ветер',
        value: `${speed} ${units === UNIT_C ? 'м/c' : 'миля/час'}, ${deg} deg`,
      },
      {
        key: 'pressure',
        title: 'Давление',
        value: `${pressure} ${units === UNIT_C ? 'мм рт. ст.' : 'hPa'}`,
      },
      {
        key: 'humidity',
        title: 'Влажность',
        value: `${humidity}%`,
      },
    ];

    if (precipitation && precipitation.value) {
      weatherDetails.push({
        key: 'precipitation',
        title: 'Вероятность дождя',
        value: `${precipitation.value}%`,
      });
    } else if (clouds && clouds.all) {
      weatherDetails.push({
        key: 'clouds',
        title: 'Облачность',
        value: `${clouds.all}%`,
      });
    }

    return { city, weatherType, weatherMain, weatherDetails };
  } catch (error) {
    return {
      success: false,
      errorMessage: error,
    };
  }
}

function getMainIcon(icon) {
  switch (icon) {
    case '01n':
      return ICON_WEATHER_SUN;

    case '09n':
    case '10n':
      return ICON_WEATHER_RAIN;

    case '11n':
      return ICON_WEATHER_STORM;

    case '02n':
      return ICON_WEATHER_PART_CLOUDY;
  
    default:
      return ICON_WEATHER_CLOUD;
  }
}

function getWeatherType(icon) {
  if (new Date().getHours() >= 21 || new Date().getHours() <= 5) return TYPE_WEATHER_NIGHT;

  switch (icon) {
    case '01n':
    case '02n':
      return TYPE_WEATHER_SUN;
  
    default:
      return TYPE_WEATHER_RAIN;
  }
}
