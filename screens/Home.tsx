import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  SectionList,
  Text,
  View,
  StatusBar,
} from 'react-native';

//gradient
import LinearGradient from 'react-native-linear-gradient';

//redux action
import {fetchWeatherRequest} from '../redux/actions/weather';

//redux hooks
import {useAppSelector, useAppDispatch} from '../redux/hooks';

//components
import DateItem from '../components/DateItem/Index';
import Loading from '../components/Loading';

//types
import {Weather, WeatherResponse} from '../types/weather';

//styles
import styles from '../styles/HomePageStyles';

interface Props {
  data: WeatherResponse;
  loading: boolean;
  error: string | null;
  navigation: any;
}

//sectionlist divider
const ItemDivider = () => {
  return <View style={styles.itemDivider} />;
};

const Home = ({loading, error, navigation}: Props) => {
  //redux state
  const weather = useAppSelector(state => state.weather.data);

  //5 days sorted
  const [filteredDays, setFilteredDays] = useState<Weather[]>();

  let currentDate = new Date().toJSON().slice(0, 10);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchWeatherRequest(46.47747, 30.73262));
  }, [dispatch]);

  useEffect(() => {
    //set filtered data (5 days)
    const days = weather?.list.filter(
      (item: any) =>
        item.dt_txt.includes('18:00:00') &&
        item.dt_txt.includes(currentDate && '18:00:00'),
    );
    setFilteredDays(days);
  }, [weather, currentDate]);

  //when loading
  if (loading) {
    return <Loading />;
  }

  //when error
  if (error) {
    return <Text>{error}</Text>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isDay, setIsDay] = useState<boolean>();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    //get current hour to set bg color
    let date = new Date();
    let currentHour = date.getHours();
    if (currentHour > 8 && currentHour < 19) {
      setIsDay(true);
    } else {
      setIsDay(false);
    }
  }, []);

  //section list
  const renderItem = ({item}: Weather) => {
    return (
      <View style={styles.renderedItemContainer}>
        <View style={styles.renderedItemInfoContainer}>
          <Text style={styles.renderedItemInfoText}>
            {new Intl.DateTimeFormat('en-us', {
              weekday: 'long',
            }).format(new Date(item!.dt! * 1000))}
          </Text>
        </View>
        <View>
          <Text style={styles.renderedItemInfoText}>
            Temp: {Math.round(item!.main!.temp)}°
          </Text>
        </View>
      </View>
    );
  };

  //for section list
  const sections = filteredDays
    ? [
        {
          title: 'Weather',
          //@ts-ignore
          data: filteredDays?.map((data: Weather) => ({
            key: data!.dt!.toString(),
            ...data,
          })),
        },
      ]
    : [];

  return (
    <LinearGradient
      colors={
        isDay ? ['#2193b0', '#6dd5ed'] : ['#0F2027', '#203A43', '#2C5364']
      }
      style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeAreaStyle}>
        <View style={styles.titleContainer}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{marginTop: 50}}>
            <Text style={styles.title}>Weather in {weather?.city.name}</Text>
            <FlatList
              data={filteredDays}
              horizontal={true}
              scrollEnabled={false}
              renderItem={item => (
                <DateItem
                  date={item.item.dt}
                  key={item.item.dt}
                  navigation={navigation}
                  item={item.item}
                />
              )}
            />
          </View>
        </View>
        <SectionList
          sections={sections}
          scrollEnabled={false}
          keyExtractor={item => item!.key}
          renderItem={renderItem}
          style={styles.sectionList}
          ItemSeparatorComponent={ItemDivider}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;
