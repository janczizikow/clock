import React, {useState, useCallback} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import * as RNLocalize from 'react-native-localize';
import Background from '../components/Background';
import Header, {APPBAR_HEIGHT} from '../components/Header';
import Time from '../components/Time';
import Settings from './Settings';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openSettings = useCallback(() => {
    setIsModalOpen(true);
  }, []);
  const closeSettings = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.root}>
        <Header openSettings={openSettings} />
        <Time
          uses24HourClock={RNLocalize.uses24HourClock()}
          style={styles.center}
        />
      </SafeAreaView>
      <Settings isOpen={isModalOpen} onClose={closeSettings} />
    </Background>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: APPBAR_HEIGHT,
  },
});

export default Home;
