import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { WeatherState } from './src/context/WeatherState';
import { Body } from './src/components/Body';

async function loadingApplication () {
  await Font.loadAsync({
    'PTSans': require('./assets/fonts/PTSans-Regular.ttf'),
    'Lato': require('./assets/fonts/Lato-Regular.ttf'),
  });
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const handleFinish = () => setLoaded(true);
  const logError = err => console.log('Loading Application Error', err);

  if (!loaded) {
    return <AppLoading startAsync={loadingApplication} onFinish={handleFinish} onError={logError} />;
  }

  return (
    <>
      <StatusBar style="light" />
      <WeatherState>
        <Body />
      </WeatherState>
    </>
  );
}
