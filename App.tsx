/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {fetchWeatherRequest} from './redux/actions/weather';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {useAppSelector, useAppDispatch} from './redux/hooks';

interface Props {
  loading: boolean;
  error: string | null;
  fetchWeatherRequest: (lat: number, lon: number) => void;
}

function App({loading, error}: Props): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const weather = useAppSelector(state => state.weather.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchWeatherRequest(46.47747, 30.73262));
  }, [dispatch]);

  console.log(weather)

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text>{weather?.city.name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
