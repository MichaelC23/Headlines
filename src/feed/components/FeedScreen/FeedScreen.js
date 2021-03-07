/**
 * FeedScreen component
 * @module src/feed/components/FeedScreen
 */
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import EntryGroup from 'src/feed/components/EntryGroup';
import FeedSelector from 'src/feed/components/FeedSelector';
import {
  useThemedBackground,
  useThemedPrimaryText,
} from 'src/theme/utils/useTheme';

import styles from './styles';

/**
 * FeedScreen component.
 * @function FeedScreen
 * @returns {Object} View.
 */
export default function FeedScreen() {
  return (
    <SafeAreaView style={[styles.container, useThemedBackground()]}>
      <View style={styles.headerWrapper}>
        <Text style={[styles.headerTitle, useThemedPrimaryText()]}>
          headlines
        </Text>
      </View>
      <FeedSelector />
      <EntryGroup />
    </SafeAreaView>
  );
}
