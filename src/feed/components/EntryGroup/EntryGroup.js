/**
 * EntryGroup component
 * @module src/feed/components/EntryGroup
 */
import React from 'react';
import { View, FlatList } from 'react-native';

import Entry from 'src/feed/components/Entry';

/**
 * EntryGroup component.
 * @function EntryGroup
 * @param {Array} entries a list of entries.
 * @param {Boolean} loading loading flag.
 * @param {Function} fetchFeed a fetching function.
 * @returns {Object} View.
 */
export default function EntryGroup({ entries, loading, fetchFeed }) {
  function renderEntry({ item }) {
    if (item) {
      return <Entry data={item} />;
    }
    return null;
  }
  return (
    <View>
      <FlatList
        data={loading ? [] : entries}
        renderItem={renderEntry}
        onEndReachedThreshold={0}
        keyExtractor={(entry, index) => `item-${index}`}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        onRefresh={() => fetchFeed()}
        refreshing={loading}
        initialNumToRender={5}
      />
    </View>
  );
}
