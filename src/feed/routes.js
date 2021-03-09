/**
 * FeedNavigator stack
 * @module src/navigator
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FeedScreen from 'src/feed/components/FeedScreen';

const Stack = createStackNavigator();

export default function FeedNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FeedScreen" component={FeedScreen} />
    </Stack.Navigator>
  );
}
