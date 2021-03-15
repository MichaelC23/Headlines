/**
 * SettingsNavigator navigator
 * @module src/settings
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SettingsScreen from 'src/settings/components/SettingsScreen';

const Stack = createStackNavigator();

export default function SettingsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
