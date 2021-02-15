import React, { useContext } from 'react';
import { View } from 'react-native';
import { WeatherContext } from '../../context/weatherContext';
import { Header } from '../Header';
import { MainInfo } from '../MainInfo';
import { WeatherInfo } from '../WeatherInfo';
import { Preloader } from '../Preloader';
import { styles } from './styles';
import getBackgroundColor from './helpers/getBackgroundColor';

const Body = () => {
  const { city, weatherType } = useContext(WeatherContext);
  const backgroundColor = getBackgroundColor(weatherType);

  return (
    <View style={[styles.wrapper, { backgroundColor }]}>
      <Header />
      {!city ? (
        <Preloader />
      ) : (
        <>
          <MainInfo />
          <WeatherInfo />
        </>
      )}
    </View>
  );
};

export default Body;
