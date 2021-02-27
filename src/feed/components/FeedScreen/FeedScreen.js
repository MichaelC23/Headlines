/**
 * Feed screen view component
 * @module src/feed/components/FeedScreen
 */
import React from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';

import Entry from 'src/feed/components/Entry';

import styles from './styles';

/**
 * Feed screen view component.
 * @function FeedScreen
 * @param {Object} feed state.
 * @returns {Object} View.
 */
export default function FeedScreen({ feed: { entries } }) {
  function renderEntry({ item }) {
    if (item) {
      return <Entry data={item} />;
    }
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>headlines</Text>
      </View>
      <View style={styles.contentWrapper}>
        <FlatList
          data={entries}
          renderItem={renderEntry}
          onEndReachedThreshold={0}
          keyExtractor={(entry, index) => `item-${index}`}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
