/**
 * FeedScreen component
 * @module src/feed/components/FeedScreen
 */
import React from 'react';
import { SafeAreaView } from 'react-native';

import { useStyle } from 'src/theme/utils/useTheme';
import AppearanceSettings from 'src/settings/components/AppearanceSettings';

import createStyle from './styles';

/**
 * FeedScreen component.
 * @function FeedScreen
 * @returns {Object} View.
 */
export default function SettingsScreen() {
  const styles = useStyle(createStyle);
  return (
    <SafeAreaView style={styles.container}>
      <AppearanceSettings />
    </SafeAreaView>
  );
}
