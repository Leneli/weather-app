import React, { useState } from 'react';
import { WeatherContext } from './weatherContext';
import { TYPE_WEATHER_SUN } from '../constants/weatherTypes';
import { TEMPERATURE_UNITS } from '../constants/temperatureUnits';

export const WeatherState = ({ children }) => {
  const [city, setCity] = useState(''); // FIXME:
  const [weatherType, setWeatherType] = useState(TYPE_WEATHER_SUN); // тип для бэкграунда
  const [unitTemperature, setUnitTemperature] = useState(TEMPERATURE_UNITS[0].value);
  const [weatherMain, setWeatherMain] = useState({});
  const [weatherDetails, setWeatherDetails] = useState([]);

  const changeCity = value => value && setCity(value);
  const updateWeatherType = value => value && setWeatherType(value);
  const updateWeatherMain = value => value && setWeatherMain(value);
  const updateWeatherDetails = value => value && setWeatherDetails(value);
  const switchTemperatureUnit = value => setUnitTemperature(value);

  return (
    <WeatherContext.Provider
      value={{
        weatherType,
        updateWeatherType,
        city,
        changeCity,
        unitTemperature,
        switchTemperatureUnit,
        weatherMain,
        updateWeatherMain,
        weatherDetails,
        updateWeatherDetails,
      }}
    >
      { children }
    </WeatherContext.Provider>
  );
};
