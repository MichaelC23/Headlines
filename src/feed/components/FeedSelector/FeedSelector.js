/**
 * FeedSelector view component
 * @module src/feed/components/FeedSelector
 */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

/**
 * FeedSelector view component.
 * @function FeedSelector
 * @param {String} category the selected category.
 * @param {Array} defaultCategories a list of the default categories.
 * @param {Function} setCategory the category setter action.
 * @returns {Object} View.
 */
export default function FeedSelector({
  category,
  defaultCategories,
  setCategory,
}) {
  return (
    <View style={styles.container}>
      {defaultCategories.map((defaultCategory, key) => (
        <TouchableOpacity
          key={key}
          style={styles.tabWrapper}
          onPress={() => {
            setCategory(defaultCategory);
          }}>
          <Text
            style={[
              styles.tabText,
              category === defaultCategory ? styles.tabSelected : null,
            ]}>
            {defaultCategory}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
