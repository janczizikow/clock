import React from 'react';

export interface Theme {
  isDark: boolean;
  background: string;
  foreground: string;
  text: string;
  muted: string;
  border: string;
  midDotBig: string;
  midDotBigBorder: string;
  midDotSmall: string;
  hours: string;
  minutes: string;
}

export const lightTheme = {
  isDark: false,
  background: '#fff',
  foreground: '#fff',
  text: '#101112',
  muted: '#a1b0ca',
  border: '#eceff5',
  midDotBig: '#fff',
  midDotBigBorder: '#eceff5',
  midDotSmall: '#eceff5',
  hours: '#e4e9f2',
  minutes: '#b3bfd7',
};

export const darkTheme = {
  isDark: true,
  background: '#0d0c0e',
  foreground: '#222225',
  text: '#fff',
  muted: '#7c7c7c',
  border: '#232323',
  midDotBig: '#3a3a3a',
  midDotBigBorder: '#3a3a3a',
  midDotSmall: '#232323',
  hours: '#404040',
  minutes: '#4e4e4e',
};

export interface IThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<IThemeContext>({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const {Provider: ThemeProvider, Consumer: ThemeConsumer} = ThemeContext;

export const useTheme = () => {
  const theme = React.useContext(ThemeContext);
  return theme;
};
