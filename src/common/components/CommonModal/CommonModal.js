/**
 * CommonModal component
 * @module src/common/components/CommonModal
 */
import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';

import { useStyle } from 'src/theme/utils/useTheme';

import createStyles from './styles';

/**
 * CommonModal view component.
 * @function CommonModal
 * @param {Function} onNavigation navigation action.
 * @returns {Object} View.
 */
export default function CommonModal({
  modalVisible,
  onModalVisible,
  children,
}) {
  const styles = useStyle(createStyles);
  return modalVisible ? (
    <Modal
      isVisible={modalVisible}
      swipeDirection="down"
      onSwipeComplete={() => onModalVisible(!modalVisible)}
      onBackdropPress={() => onModalVisible(!modalVisible)}
      style={styles.container}>
      <View
        style={styles.dividerWrapper}
        onPress={() => onModalVisible(!modalVisible)}>
        <View style={styles.divider} />
      </View>
      {children}
    </Modal>
  ) : null;
}
