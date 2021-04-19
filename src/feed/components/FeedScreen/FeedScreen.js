/**
 * FeedScreen component
 * @module src/feed/components/FeedScreen
 */
import React from 'react';
import { SafeAreaView } from 'react-native';

import EntryGroup from 'src/feed/components/EntryGroup';
import FeedSelector from 'src/feed/components/FeedSelector';
import CommonHeader from 'src/common/components/CommonHeader';
import CommonModal from 'src/common/components/CommonModal';
import FeedSearch from 'src/feed/components/FeedSearch';
import SettingsScreen from 'src/settings/components/SettingsScreen';
import { useStyle } from 'src/theme/utils/useTheme';

import createStyles from './styles';

/**
 * FeedScreen component.
 * @function FeedScreen
 * @returns {Object} View.
 */
export default function FeedScreen() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const styles = useStyle(createStyles);
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader
        title={'headlines'}
        onNavigation={() => setModalVisible(!modalVisible)}
      />
      <CommonModal modalVisible={modalVisible} onModalVisible={setModalVisible}>
        <SettingsScreen />
      </CommonModal>
      <FeedSearch />
      <FeedSelector />
      <EntryGroup />
    </SafeAreaView>
  );
}
