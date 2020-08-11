import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types';

export default function ChooseASubject({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, 'ChooseASubject'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Subject</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('StudentsDashboard', {
            school: route.params.school,
            class: route.params.class,
            subject: { id: 6, name: 'Inglês' },
          })
        }
        style={styles.link}
      >
        <Text style={styles.linkText}>Go to students dashboard</Text>
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
