/**
 * FeedScreen component
 * @module src/feed/components/FeedScreen
 */
import React from 'react';
import { SafeAreaView } from 'react-native';

import EntryGroup from 'src/feed/components/EntryGroup';
import FeedSelector from 'src/feed/components/FeedSelector';
import FeedHeader from 'src/feed/components/FeedHeader';
import { useThemedBackground } from 'src/theme/utils/useTheme';

import styles from './styles';

/**
 * FeedScreen component.
 * @function FeedScreen
 * @returns {Object} View.
 */
export default function FeedScreen() {
  return (
    <SafeAreaView style={[styles.container, useThemedBackground()]}>
      <FeedHeader />
      <FeedSelector />
      <EntryGroup />
    </SafeAreaView>
  );
}
