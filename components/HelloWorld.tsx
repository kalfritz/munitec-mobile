import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HelloWorld() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Hello world</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
