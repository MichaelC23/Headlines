/**
 * FeedScreen component
 * @module src/feed/components/FeedScreen
 */
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import EntryGroup from 'src/feed/components/EntryGroup';
import FeedSelector from 'src/feed/components/FeedSelector';

import styles from './styles';

/**
 * FeedScreen component.
 * @function FeedScreen
 * @returns {Object} View.
 */
export default function FeedScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>headlines</Text>
      </View>
      <FeedSelector />
      <EntryGroup />
    </SafeAreaView>
  );
}
