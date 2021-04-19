/**
 * AppearanceSettings component
 * @module src/settings/components/AppearanceSettings
 */
import React from 'react';
import { View, Text, Switch } from 'react-native';

import { useStyle, useThemeName } from 'src/theme/utils/useTheme';
import { defaultThemeNames } from 'src/theme/constants';
import { COLOR } from 'src/common/styles';

import createStyles from './styles';

/**
 * AppearanceSettings component.
 * @function AppearanceSettings
 * @param {String} themeName theme name.
 * @param {String} switchTrackColor switch track color,
 * @param {String} switchThumpColor switch thump  color,
 * @param {Function} toggleTheme toggles theme.
 * @returns {Object} View.
 */
export default function SettingsScreen({
  themeName,
  switchTrackColor,
  switchThumpColor,
  toggleTheme,
}) {
  const styles = useStyle(createStyles);
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>AppearanceSettings</Text>
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.contentText}>{`${themeName} mode`}</Text>
        <View style={styles.switchWrapper}>
          <Switch
            trackColor={switchTrackColor}
            thumbColor={switchThumpColor}
            ios_backgroundColor={COLOR.iosSwitchBackground}
            onValueChange={toggleTheme}
            value={useThemeName(defaultThemeNames.dark)}
          />
        </View>
      </View>
    </View>
  );
}
