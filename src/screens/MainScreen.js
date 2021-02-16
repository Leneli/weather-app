import React, { useContext } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { WeatherContext } from '../context/weatherContext';
import { Header } from '../components/Header';
import { Temperature } from '../components/Temperature';
import { WeatherInfo } from '../components/WeatherInfo';
import { Preloader } from '../components/Preloader';
import { scale } from '../helpers/scalingUtils';
import getBackgroundColor from '../helpers/getBackgroundColor';

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
  },

  wrapper: {
    flex: 1,
    paddingTop: scale(60),
    paddingBottom: scale(16),
    paddingHorizontal: scale(16),
  },
});

const MainScreen = () => {
  const { city, weatherType } = useContext(WeatherContext);
  const backgroundColor = getBackgroundColor(weatherType);

  // TODO: update is swipe bottom

  return (
    <ScrollView
      style={{ backgroundColor }}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={[styles.wrapper]}>
        <Header />
        {!city ? (
          <Preloader />
        ) : (
          <>
            <Temperature />
            <WeatherInfo />
          </>
        )}
      </View>

      {/* TODO: Modal with locations */}
    </ScrollView>
  );
};

export default MainScreen;
