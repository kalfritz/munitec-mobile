import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types';

export default function ChooseAClass({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, 'ChooseAClass'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Class</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ChooseASubject', {
            school: route.params.school,
            class: { id: 4, name: '2º B' },
          })
        }
        style={styles.link}
      >
        <Text style={styles.linkText}>Go to choose a subject!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
