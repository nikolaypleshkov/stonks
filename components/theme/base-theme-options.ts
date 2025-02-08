import { Theme } from "./Theme";

const baseThemeOptions: Theme = {
    fonts: {
      primary: 'Roboto, sans-serif',
      secondary: 'Arial, sans-serif',
    },
    fontSizes: {
      small: 12,
      medium: 16,
      large: 20,
      xLarge: 24,
    },
    colors: {
      primary: '#6200EE',
      primaryLight: '#BB86FC',
      primaryDark: '#3700B3',
      secondary: '#03DAC6',
      secondaryLight: '#66FFF9',
      secondaryDark: '#00A896',
      danger: '#B00020',
      warning: '#FFAB00',
      success: '#00C853',
      info: '#2196F3',
      text: '#333',
      secondaryText: '#666',
      buttonText: '#fff',
      buttonSecondaryText: '#000',
      textFieldBackground: '#fff',
      clear: 'transparent',
      border: '#ccc',
      background: '#f9f9f9',
    },
    spaces: {
      xSmall: 4,
      small: 8,
      medium: 16,
      large: 24,
      xLarge: 32,
    },
    breakpoints: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  };
  
  export default baseThemeOptions;