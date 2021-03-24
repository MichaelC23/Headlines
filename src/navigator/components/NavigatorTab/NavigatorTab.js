/**
 * NavigatorTab component
 * @module src/navigator/components/NavigatorTab
 */
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import * as icons from 'src/common/icons/svg';

import styles from './styles';

/**
 * NavigatorTab view component.
 * @function NavigatorTab
 * @returns {Object} View.
 */
export default function NavigatorTab({ navigation, state, routes }) {
  function onPress(route, index) {
    navigation.reset({
      index,
      routes: [{ name: route.key }],
    });
  }

  function renderItem(route, index) {
    const Icon = icons[route.icon];
    const isActive = index === state.index;
    return (
      <TouchableOpacity
        style={styles.buttonWrapper}
        onPress={() => onPress({ ...route, index })}>
        <Icon fill={isActive ? '#ffffff' : '#888888'} />
      </TouchableOpacity>
    );
  }

  return <View style={styles.container}>{routes.map(renderItem)}</View>;
}
