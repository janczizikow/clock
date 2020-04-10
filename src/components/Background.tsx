import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from './Theme';

const Background: React.FC = (props) => {
  const {
    theme: {isDark, background},
  } = useTheme();

  return isDark ? (
    <LinearGradient
      locations={[0, 0.41, 0.55, 1]}
      colors={['#0D0C0E', '#161317', '#161317', '#0C0D0E']}
      useAngle
      angle={-180}
      angleCenter={{x: 0.5, y: 0.5}}
      style={styles.root}
      {...props}
    />
  ) : (
    <View style={[styles.root, {backgroundColor: background}]} {...props} />
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default Background;
