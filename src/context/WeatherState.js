import React, { useState } from 'react';
import { WeatherContext } from './weatherContext';
import { ICON_WEATHER_SUN, TYPE_WEATHER_SUN } from '../constants/weatherTypes';
import { TEMPERATURE_UNITS } from '../constants/temperatureUnits';

export const WeatherState = ({ children }) => {
  const [unit, setUnit] = useState(TEMPERATURE_UNITS[0].value);

  const state = {
    unit,
    city: 'Москва',
    geoPosition: 'Волгоград',
    temperature: 12,
    weatherType: TYPE_WEATHER_SUN,
    weatherIcon: ICON_WEATHER_SUN,
    weatherDescription: 'Ясно',
    weatherDetails: [
      {
        title: 'Ветер',
        value: '5 м/с, северный',
      },
      {
        title: 'Давление',
        value: '752 мм рт. ст.',
      },
      {
        title: 'Влажность',
        value: '60%',
      },
      {
        title: 'Вероятность дождя',
        value: '10%',
      }
    ],
    onChangeUnit: value => value && setUnit(value),
    onChangeCity: () => {},
    onSetGeoPosition: () => {},
    onChangeTemperature: () => {},
    onChangeWeatherType: () => {},
    onChangeWeatherIcon: () => {},
    onChangeWeatherDesc: () => {},
    onChangeWeatherDetails: () => {},
  };

  return (
    <WeatherContext.Provider value={state}>
      { children }
    </WeatherContext.Provider>
  );
};
