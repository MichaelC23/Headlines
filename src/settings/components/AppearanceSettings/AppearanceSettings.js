/**
 * AppearanceSettings component
 * @module src/settings/components/AppearanceSettings
 */
import React from 'react';
import { View, Text, Switch } from 'react-native';

import { useThemedBackground, useThemeName } from 'src/theme/utils/useTheme';
import { defaultThemes, defaultThemeNames } from 'src/theme/constants';
import { COLOR } from 'src/common/styles';

import styles from './styles';

/**
 * AppearanceSettings component.
 * @function AppearanceSettings
 * @param {Object} textPrimary primary text style.
 * @param {Object} textSecondary secondary text style.
 * @param {String} themeName theme name.
 * @param {Function} toggleTheme toggles theme.
 * @returns {Object} View.
 */
export default function SettingsScreen({
  textPrimary,
  textSecondary,
  themeName,
  toggleTheme,
}) {
  return (
    <View style={[styles.container, useThemedBackground()]}>
      <View style={styles.titleWrapper}>
        <Text style={[styles.titleText, textPrimary]}>AppearanceSettings</Text>
      </View>
      <View style={styles.contentWrapper}>
        <Text
          style={[
            styles.contentText,
            textSecondary,
          ]}>{`${themeName} mode`}</Text>
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
    </View>
  );
}
