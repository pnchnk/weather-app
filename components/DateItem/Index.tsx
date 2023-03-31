import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

//styles
import styles from './styles';

const Index = ({date, navigation, item}: any) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        navigation?.navigate('Daily', {
          item,
        })
      }>
      <Text style={styles.month}>
        {new Date(date * 1000).toLocaleString('en-GB', {month: 'short'})}
      </Text>
      <Text>
        {new Date(date * 1000).toLocaleString('en-GB', {day: 'numeric'})}
      </Text>
    </TouchableOpacity>
  );
};

export default Index;
