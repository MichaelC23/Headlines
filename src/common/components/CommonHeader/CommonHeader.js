/**
 * CommonHeader component
 * @module src/common/components/CommonHeader
 */
import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';

import { MenuIcon } from 'src/common/icons/svg';

import styles from './styles';

/**
 * CommonHeader view component.
 * @function CommonHeader
 * @param {Function} onNavigation navigation action.
 * @param {String} title the title.
 * @param {String} menuColor the menu color.
 * @param {Object} textPrimary themed style.
 * @param {String} barStyle status bar theme.
 * @returns {Object} View.
 */
export default function CommonHeader({
  onNavigation,
  title,
  menuColor,
  textPrimary,
  barStyle,
}) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={barStyle} />
      <Text style={[styles.headerTitle, textPrimary]}>{title}</Text>
      <TouchableOpacity
        onPress={() => onNavigation()}
        style={styles.menuWrapper}>
        <MenuIcon fill={menuColor} />
      </TouchableOpacity>
    </View>
  );
}
