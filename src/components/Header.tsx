import React from 'react';
import {View, Platform, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import {useTheme} from './Theme';

export const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

interface Props {
  showThemeToggle?: boolean;
  back?: () => void;
  openSettings?: () => void;
}

const Header: React.FC<Props> = ({
  back,
  openSettings,
  showThemeToggle = true,
}) => {
  const {
    theme: {muted, isDark},
    toggleTheme,
  } = useTheme();
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={back ? back : openSettings}>
        <View style={styles.touchable}>
          <Icon
            name={back ? 'arrow-left' : 'settings'}
            size={24}
            color={muted}
          />
        </View>
      </TouchableOpacity>
      {showThemeToggle && (
        <TouchableOpacity onPress={toggleTheme}>
          <LinearGradient
            colors={['#FAA361', '#FF97B3']}
            useAngle
            angle={-4}
            angleCenter={{x: 0.5, y: 0.5}}
            style={[styles.touchable, styles.button]}>
            <View>
              <Icon name={isDark ? 'sun' : 'moon'} size={16} color="#fff" />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: APPBAR_HEIGHT,
    width: '100%',
    marginBottom: 8,
  },
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
    marginHorizontal: 16,
    borderRadius: 32 / 2,
  },
  button: {
    shadowColor: '#000',
    shadowOpacity: 0.57,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 8,
    elevation: 8,
  },
});

export default Header;
