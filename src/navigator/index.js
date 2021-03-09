/**
 * RootNavigator component
 * @module src/navigator
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FeedNavigator from 'src/feed/routes';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="FeedScreen" component={FeedNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
