import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#1A73E8', // Blue
    secondary: '#FF5733', // Orange
    background: '#F9F9F9', // Light Gray
    text: '#333333', // Dark Gray
  },
  fonts: {
    heading: "'Roboto', sans-serif",
    body: "'Open Sans', sans-serif",
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
  },
};

export default theme;