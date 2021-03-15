/**
 * RootNavigator navigator
 * @module src/navigator
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FeedNavigator from 'src/feed/routes';
import SettingsNavigator from 'src/settings/routes';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="FeedNavigator" component={FeedNavigator} />
        <Stack.Screen name="SettingsNavigator" component={SettingsNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
