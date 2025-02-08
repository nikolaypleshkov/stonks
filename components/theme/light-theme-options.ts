import baseThemeOptions from './base-theme-options';

const lightThemeOptions = {
  ...baseThemeOptions,
  colors: {
    ...baseThemeOptions.colors,
    background: '#FFFFFF',
    surface: '#F5F5F5',
    onPrimary: '#FFFFFF',
    onSecondary: '#000000',
    onBackground: '#000000',
    onSurface: '#000000',
  },
};

export default lightThemeOptions;