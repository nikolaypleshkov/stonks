import baseThemeOptions from './base-theme-options';

const darkThemeOptions = {
  ...baseThemeOptions,
  colors: {
    ...baseThemeOptions.colors,
    background: '#121212',
    text: '#FFFFFF',
    secondaryText: '#666666',
    buttonText: '#FFFFFF',
    buttonSecondaryText: '#FFFFFF',
    textFieldBackground: '#333333',
    surface: '#1E1E1E',
    onPrimary: '#000000',
    onSecondary: '#FFFFFF',
    onBackground: '#FFFFFF',
    onSurface: '#FFFFFF',
  },
};

export default darkThemeOptions;