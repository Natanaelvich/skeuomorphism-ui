import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import RegisterPhone from './pages/RegisterPhone';
import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="RegisterPhone" component={RegisterPhone} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
