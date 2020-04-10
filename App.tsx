import React, {useState, useMemo, useEffect} from 'react';
import {StatusBar, Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import KeepAwake from 'react-native-keep-awake';
import {
  ThemeProvider,
  lightTheme,
  darkTheme,
  Theme,
} from './src/components/Theme';
import {KeepAwakeProvider} from './src/components/KeepAwake';
import Home from './src/screens/Home';

const THEME_PREFERENCE_KEY = 'THEME_PREFERENCE_KEY';

const App = () => {
  const [theme, setTheme] = useState<Theme>(lightTheme);
  const [keepAwake, setKeepAwake] = useState<boolean>(false);
  const value = useMemo(
    () => ({
      theme,
      toggleTheme() {
        setTheme((t) => (t.isDark ? lightTheme : darkTheme));
      },
    }),
    [theme],
  );

  useEffect(() => {
    const restoreTheme = async () => {
      try {
        const themePreference = await AsyncStorage.getItem(
          THEME_PREFERENCE_KEY,
        );
        if (themePreference) {
          setTheme(themePreference === 'dark' ? darkTheme : lightTheme);
        }
      } catch (err) {
        // ignore
      }
    };
    restoreTheme();
  }, []);

  useEffect(() => {
    const persistTheme = async () => {
      try {
        await AsyncStorage.setItem(
          THEME_PREFERENCE_KEY,
          theme.isDark ? 'dark' : 'light',
        );
      } catch (err) {
        // ignore
      }
    };
    persistTheme();
  }, [theme]);

  useEffect(() => {
    const {isDark} = theme;
    StatusBar.setBarStyle(isDark ? 'light-content' : 'dark-content');
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(theme.background);
    }
  }, [theme]);

  useEffect(() => {
    if (keepAwake) {
      KeepAwake.activate();
    } else {
      KeepAwake.deactivate();
    }
  }, [keepAwake]);

  return (
    <KeepAwakeProvider value={{keepAwake, setKeepAwake}}>
      <ThemeProvider value={value}>
        <Home />
      </ThemeProvider>
    </KeepAwakeProvider>
  );
};

export default App;
