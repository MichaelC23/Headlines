/**
 * FeedHeader component
 * @module src/feed/components/FeedHeader
 */
import React from 'react';
import { View, Text, Switch, StatusBar } from 'react-native';

import { useThemeName } from 'src/theme/utils/useTheme';
import { defaultThemes, defaultThemeNames } from 'src/theme/constants';
import { COLOR } from 'src/common/styles';

import styles from './styles';

/**
 * FeedHeader view component.
 * @function FeedHeader
 * @param {String} textPrimary the selected category.
 * @param {Function} toggleTheme toggles the theme.
 * @param {String} barStyle status bar theme.
 * @returns {Object} View.
 */
export default function FeedHeader({ textPrimary, toggleTheme, barStyle }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={barStyle} />
      <Text style={[styles.headerTitle, textPrimary]}>headlines</Text>
      <View style={styles.switchWrapper}>
        <Switch
          trackColor={{
            false: defaultThemes.light.palette.textPrimary,
            true: defaultThemes.dark.palette.textPrimary,
          }}
          thumbColor={
            useThemeName(defaultThemeNames.dark)
              ? defaultThemes.light.palette.textPrimary
              : defaultThemes.dark.palette.textPrimary
          }
          ios_backgroundColor={COLOR.iosSwitchBackground}
          onValueChange={toggleTheme}
          value={useThemeName(defaultThemeNames.dark)}
        />
      </View>
    </View>
  );
}
