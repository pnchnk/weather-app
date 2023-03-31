import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'light-blue',
  },
  textContainer: {
    display: 'flex',
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

export default index;
