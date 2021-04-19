/**
 * FeedSearch component
 * @module src/feed/components/FeedSearch
 */
import React from 'react';
import { View, TextInput } from 'react-native';

import { useStyle } from 'src/theme/utils/useTheme';
import { SearchIcon } from 'src/common/icons/svg';

import createStyles from './styles';

/**
 * FeedSearch view component.
 * @function FeedSearch
 * @param {String} iconColor icon color.
 * @returns {Object} View.
 */
export default function CommonTextInput({ iconColor, setSearchString }) {
  const styles = useStyle(createStyles);
  const [text, onChangeText] = React.useState('');
  const onChange = value => {
    onChangeText(value);
    setSearchString(value);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputIcon}>
        <SearchIcon fill={iconColor} />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={text}
        placeholder={'search'}
      />
    </View>
  );
}
