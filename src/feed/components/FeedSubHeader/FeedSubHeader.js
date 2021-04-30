/**
 * FeedSubHeader component
 * @module src/feed/components/FeedSubHeader
 */
import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';

import { useStyle } from 'src/theme/utils/useTheme';
import { ArrowLeftIcon, PlusIcon } from 'src/common/icons/svg';

import createStyles from './styles';

/**
 * FeedSubHeader view component.
 * @function FeedSubHeader
 * @param {Function} onNavigation navigation action.
 * @param {String} title the title.
 * @param {String} menuColor the menu color.
 * @param {String} barStyle status bar theme.
 * @returns {Object} View.
 */
export default function FeedSubHeader({
  iconColor,
  barStyle,
  setCategory,
  route,
  navigation,
}) {
  const styles = useStyle(createStyles);
  const { title } = route.params;
  const onGoBack = () => {
    setCategory();
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={barStyle} />
      <TouchableOpacity style={styles.iconWrapper} onPress={onGoBack}>
        <ArrowLeftIcon fill={iconColor} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title.toLowerCase()}</Text>
      <TouchableOpacity style={[styles.iconWrapper, styles.iconWrapperRight]}>
        <PlusIcon fill={iconColor} />
      </TouchableOpacity>
    </View>
  );
}
