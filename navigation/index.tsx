import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';

import LinkingConfiguration from './LinkingConfiguration';
import ChooseASchool from '../screens/ChooseASchool';
import ChooseAClass from '../screens/ChooseAClass';
import ChooseASubject from '../screens/ChooseASubject';
import StudentsDashboard from '../screens/StudentsDashboard';

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: 'blueviolet',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}
      initialRouteName="ChooseASchool"
    >
      <Stack.Screen
        name="ChooseASchool"
        component={ChooseASchool}
        options={{ title: 'Município de Confitec' }}
      />
      <Stack.Screen
        name="ChooseAClass"
        component={ChooseAClass}
        options={({ route }: any) => ({ title: route.params.school.name })}
      />
      <Stack.Screen
        name="ChooseASubject"
        component={ChooseASubject}
        options={({ route }: any) => ({
          title: `${route.params.school.name} - ${route.params.class.name}`,
        })}
      />
      <Stack.Screen
        name="StudentsDashboard"
        component={StudentsDashboard}
        options={({ route }: any) => ({
          title: `${route.params.school.name} - ${route.params.class.name}`,
        })}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
}
