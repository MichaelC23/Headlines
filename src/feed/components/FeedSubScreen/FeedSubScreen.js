/**
 * FeedSubScreen view component
 * @module src/feed/components/FeedSubScreen
 */
import React from 'react';
import { View } from 'react-native';

import { useStyle } from 'src/theme/utils/useTheme';
import FeedSubHeader from 'src/feed/components/FeedSubHeader';
import EntryGroup from 'src/feed/components/EntryGroup';

import createStyles from './styles';

/**
 * FeedSubScreen view component.
 * @function FeedSubScreen
 * @param {String} category the selected category.
 * @param {Array} defaultCategories a list of the default categories.
 * @param {Function} setCategory the category setter action.
 * @returns {Object} View.
 */
export default function FeedSubScreen({
  category,
  defaultCategories,
  setCategory,
  route,
  navigation,
}) {
  const styles = useStyle(createStyles);
  return (
    <View style={styles.container}>
      <FeedSubHeader route={route} navigation={navigation} />
      <EntryGroup />
    </View>
  );
}
