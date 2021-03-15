/**
 * FeedScreen component
 * @module src/feed/components/FeedScreen
 */
import React from 'react';
import { SafeAreaView } from 'react-native';
import { useThemedBackground } from 'src/theme/utils/useTheme';
import CommonHeader from 'src/common/components/CommonHeader';

import styles from './styles';
import AppearanceSettings from 'src/settings/components/AppearanceSettings';

/**
 * FeedScreen component.
 * @function FeedScreen
 * @returns {Object} View.
 */
export default function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView style={[styles.container, useThemedBackground()]}>
      <CommonHeader
        title={'settings'}
        onNavigation={() => navigation.goBack()}
      />
      <AppearanceSettings />
    </SafeAreaView>
  );
}
