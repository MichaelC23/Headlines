/**
 * Entry component
 * @module src/feed/components/Entry
 */
import React from 'react';
import { View, Text, Linking, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

/**
 * Entry view component.
 * @function Entry
 * @param {Object} data entry data.
 * @returns {Object} View.
 */
export default function Entry({ data: { author, title, link, imageSource } }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.authorWrapper}
        onPress={() => Linking.openURL(author.uri)}>
        <Text style={styles.authorTitle}>{author.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.contentWrappers}
        onPress={() => Linking.openURL(link)}>
        <Text style={styles.contentTitle}>{title}</Text>
        {imageSource ? (
          <Image style={styles.stretch} source={{ uri: imageSource }} />
        ) : null}
      </TouchableOpacity>
    </View>
  );
}
