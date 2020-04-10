import React from 'react';
import {
  SafeAreaView,
  View,
  Switch,
  Platform,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';
import Text from '../components/Text';
import Background from '../components/Background';
import Header from '../components/Header';
import {useKeepAwake} from '../components/KeepAwake';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const width =
  Platform.OS === 'ios'
    ? Dimensions.get('window').width
    : require('react-native-extra-dimensions-android').get('REAL_WINDOW_WIDTH');
const height =
  Platform.OS === 'ios'
    ? Dimensions.get('window').height
    : require('react-native-extra-dimensions-android').get(
        'REAL_WINDOW_HEIGHT',
      );

const Settings: React.FC<Props> = ({isOpen, onClose}) => {
  const {keepAwake, setKeepAwake} = useKeepAwake();

  return (
    <Modal
      backdropOpacity={0}
      coverScreen
      useNativeDriver
      hasBackdrop={false}
      isVisible={isOpen}
      deviceWidth={width}
      deviceHeight={height}
      onDismiss={onClose}
      onBackButtonPress={onClose}
      style={styles.root}>
      <Background>
        <SafeAreaView style={styles.content}>
          <Header back={onClose} showThemeToggle={false} />
          <View style={styles.item}>
            <Text style={styles.text}>Keep awake</Text>
            <Switch value={keepAwake} onValueChange={setKeepAwake} />
          </View>
        </SafeAreaView>
      </Background>
    </Modal>
  );
};

const styles = StyleSheet.create({
  root: {margin: 0},
  content: {flex: 1},
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  text: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    letterSpacing: 0.5,
  },
});

export default Settings;
