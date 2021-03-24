/**
 * RootNavigator navigator
 * @module src/navigator
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FeedNavigator from 'src/feed/routes';
import SettingsNavigator from 'src/settings/routes';
import NavigatorTab from 'src/navigator/components/NavigatorTab';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={({ navigation, state }) => (
          <NavigatorTab navigation={navigation} state={state} />
        )}>
        <Tab.Screen name="FeedNavigator" component={FeedNavigator} />
        <Tab.Screen name="SettingsNavigator" component={SettingsNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
