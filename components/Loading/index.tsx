import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const index = () => {
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default index;
