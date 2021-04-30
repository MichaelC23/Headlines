/**
 * FeedSearch component
 * @module src/feed/components/FeedSearch
 */
import React from 'react';
import { View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useStyle } from 'src/theme/utils/useTheme';
import { SearchIcon } from 'src/common/icons/svg';

import createStyles from './styles';

/**
 * FeedSearch view component.
 * @function FeedSearch
 * @param {String} iconColor icon color.
 * @param {Function} setSearchValue dispatches search action.
 * @returns {Object} View.
 */
export default function CommonTextInput({ iconColor, setSearchValue }) {
  const styles = useStyle(createStyles);
  const [text, setText] = React.useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.inputIcon}>
        <SearchIcon fill={iconColor} />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        onBlur={() => {
          setSearchValue(text);
          navigation.navigate('FeedSubScreen', { title: text });
        }}
        value={text}
        placeholder={'search'}
      />
    </View>
  );
}
