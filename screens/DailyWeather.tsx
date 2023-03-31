import {
  View,
  Text,
  FlatList,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React from 'react';

//redux hooks
import {useAppSelector} from '../redux/hooks';

//gradient
import LinearGradient from 'react-native-linear-gradient';

//types
import {Weather, WeatherResponse} from '../types/weather';

//styles
import styles from '../styles/DailyWeatherStyles';

//gradient & img depends on weather option
const DailyWeather = ({route}: any) => {
  const weatherOptions = {
    Rain: {
      imgPath: require('../assets/img/free-icon-rain-10005666.png'),
      gradient: ['#4B79A1', '#283E51'],
    },
    Clouds: {
      imgPath: require('../assets/img/free-icon-cloudy-1163634.png'),
      gradient: ['#bdc3c7', '#2c3e50'],
    },
    Snow: {
      imgPath: require('../assets/img/free-icon-snowflake-3236908.png'),
      gradient: ['#F0F2F0', '#000C40'],
    },
    Mist: {
      imgPath: require('../assets/img/mist.png'),
      gradient: ['#6190E8', '#A7BFE8'],
    },
    Thunderstorm: {
      imgPath: require('../assets/img/thunderstorm.png'),
      gradient: ['#000428', '#004e92'],
    },
    Fog: {
      imgPath: require('../assets/img/free-icon-fog-463978.png'),
      gradient: ['#F2F2F2', '#DBDBDB'],
    },
    Haze: {
      imgPath: require('../assets/img/haze.png'),
      gradient: ['#6190E8', '#A7BFE8'],
    },
    Clear: {
      imgPath: require('../assets/img/free-icon-sun-rays-3385807.png'),
      gradient: ['#2980B9', '#6DD5FA', '#FFFFFF'],
    },
    Drizzle: {
      imgPath: require('../assets/img/rainy.png'),
      gradient: ['#4CA1AF', '#C4E0E5'],
    },
  };
  //react-navigation params
  const {item} = route.params;

  //get date
  const today = item.dt_txt.split(' ');

  //redux state
  const weather = useAppSelector<WeatherResponse>(state => state.weather.data);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const day = weather.list!.filter((item: Weather) =>
    //get current day to show the weather
    item!.dt_txt!.includes(today[0]),
  );

  //weather conditions : rain, clouds, etc.
  const conditions: Weather['weather'] = item.weather[0].main;

  return (
    <LinearGradient
      //@ts-ignore
      colors={weatherOptions[conditions]?.gradient}
      style={styles.linearGradient}>
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar barStyle="light-content" />
        <View style={styles.currentInfoContainer}>
          <View style={styles.currentInfoDateContainer}>
            <Text
              //day, [0] - is the first index in array to show actual date
              style={styles.currentInfoText}>
              {new Date(day[0]?.dt! * 1000).toLocaleString('en-GB', {
                day: 'numeric',
              })}
            </Text>
            <Text
              //month [0] - is the first index in array to show actual date
              style={styles.currentInfoText}>
              {' '}
              of{' '}
              {new Date(day[0]?.dt! * 1000).toLocaleString('en-GB', {
                month: 'long',
              })}
            </Text>
          </View>
          <Image
            //@ts-ignore
            source={weatherOptions[conditions]?.imgPath}
          />
          <Text style={styles.currentInfoText}>
            {Math.round(day[0]?.main!.temp)} °C
          </Text>
        </View>
        <FlatList
          data={day}
          style={styles.listContainer}
          showsVerticalScrollIndicator={false}
          renderItem={i => (
            <View style={styles.listItem}>
              <Text
                //split[1] deleted year
                style={styles.listItemText}>
                At {i.item.dt_txt!.split(' ')[1]} will be{' '}
                {Math.floor(i.item.main!.temp)}°
              </Text>
              <Image
                //@ts-ignore
                source={weatherOptions[conditions]?.imgPath}
              />
            </View>
          )}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};
export default DailyWeather;
