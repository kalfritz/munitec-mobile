import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types';

export default function ChooseASchool({
  navigation,
}: StackScreenProps<RootStackParamList, 'ChooseASchool'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a School.</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ChooseAClass', {
            school: { id: 1, name: 'Confitec Legacy' },
          })
        }
        style={styles.link}
      >
        <Text style={styles.title}>Go to choose a class.</Text>
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
