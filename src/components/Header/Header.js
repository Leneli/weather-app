import React, { useEffect, useState, useContext } from 'react';
import { View } from 'react-native';
import { HeaderView } from './HeaderView';
import { Location } from '../Location';
import { styles } from './styles';
import weatherAPI from '../../api/weather';
import myLocationApi from '../../api/myLocation';
import { WeatherContext } from '../../context/weatherContext';

const Header = () => {
  const {
    city,
    changeCity,
    unitTemperature,
    updateWeatherType,
    updateWeatherMain,
    updateWeatherDetails,
  } = useContext(WeatherContext);
  const [isSearch, setIsSearch] = useState(false);
  const [viewHeight, setViewHeight] = useState('auto');

  const showSearch = () => setIsSearch(true);
  const onLayout = e => setViewHeight(e.nativeEvent.layout.height);

  const handleSearch = async (location) => {
    setIsSearch(false);

    if (!location) return;

    try {
      const {
        weatherType,
        weatherMain,
        weatherDetails
      } = await weatherAPI({ location, units: unitTemperature });

      updateWeatherType(weatherType);
      updateWeatherMain(weatherMain);
      updateWeatherDetails(weatherDetails);
    } catch (error) {
      console.log('weather API error', error);
    }
  };

  const handleMyLocation = async () => {
    try {
      const myLocation = await myLocationApi({ units: unitTemperature });
      const { city: myCity, weatherType, weatherMain, weatherDetails } = myLocation;

      changeCity(myCity);
      updateWeatherType(weatherType);
      updateWeatherMain(weatherMain);
      updateWeatherDetails(weatherDetails);
    } catch (error) {
      //
    }
  };

  useEffect(() => {
    handleMyLocation();
  }, []);

  useEffect(() => {
    handleSearch(city);
  }, [unitTemperature]);

  return (
    <View style={[styles.wrapper]}>
      <View onLayout={onLayout} style={{ height: viewHeight }}>
        {!isSearch && <HeaderView onShowSearch={showSearch} onGeo={handleMyLocation} />}
      </View>
      <Location visible={isSearch} onSearch={handleSearch} />
    </View>
  );
};

export default Header;
