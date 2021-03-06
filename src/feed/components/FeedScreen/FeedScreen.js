/**
 * FeedScreen component
 * @module src/feed/components/FeedScreen
 */
import React from 'react';
import { SafeAreaView } from 'react-native';

import EntryGroup from 'src/feed/components/EntryGroup';
import FeedSelector from 'src/feed/components/FeedSelector';
import CommonHeader from 'src/common/components/CommonHeader';
import { useThemedBackground } from 'src/theme/utils/useTheme';

import styles from './styles';

/**
 * FeedScreen component.
 * @function FeedScreen
 * @returns {Object} View.
 */
export default function FeedScreen({ navigation }) {
  return (
    <SafeAreaView style={[styles.container, useThemedBackground()]}>
      <CommonHeader
        title={'headlines'}
        onNavigation={() => navigation.navigate('SettingsNavigator')}
      />
      <FeedSelector />
      <EntryGroup />
    </SafeAreaView>
  );
}
