/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import FeedScreen from 'src/feed/components/FeedScreen';
import store from 'src/store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <FeedScreen />
    </Provider>
  );
};

export default App;
