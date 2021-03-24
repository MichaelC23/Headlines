/**
 * CommonHeader component
 * @module src/common/components/CommonHeader
 */
import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import styles from './styles';

/**
 * CommonHeader view component.
 * @function CommonHeader
 * @param {String} title the title.
 * @param {Object} textPrimary themed style.
 * @param {String} barStyle status bar theme.
 * @returns {Object} View.
 */
export default function CommonHeader({ title, textPrimary, barStyle }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={barStyle} />
      <Text style={[styles.headerTitle, textPrimary]}>{title}</Text>
    </View>
  );
}
