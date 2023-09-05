import { createTheme } from '@mui/material/styles';
import { esES } from '@mui/material/locale';

const customTheme = {
  palette: {
    primary: {
      main: '#004494',
    },
    secondary: {
      main: '#FFED00',
    },
    background: {
      default: '#F8F8F8',
      secondary: '#FAFDFD',
      iconHover: '#ADCAEE',
      itemHover: 'rgba(25, 118, 210, 0.12)',
    },
    success: {
      main: '#65AF4B',
    },
    info: {
      main: '#0674F4',
    },
    error: {
      main: '#FF5A5A',
      dark: '#A52A03',
    },
    warning: {
      main: '#DAA657',
    },
    disabled: {
      main: '#C0C0C0',
    },
    backgroundColor: {
      main: '#FFFFFF',
    },
    custom: {
      deactivatedBlue: '#ADCAEE',
      dropdown: '#EDF5FF',
      darkGray: '#5B5B5B',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif', 'Montserrat', 'sans-serif'].join(','),
    button: {
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '19px',
      fontFamily: 'Roboto',
    },
    titleTop: {
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: '21px',
      fontFamily: 'Roboto',
    },
    titleXl: {
      fontWeight: 700,
      fontSize: '30px',
      lineHeight: '35px',
      fontFamily: 'Roboto',
    },
    paragraph: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '20px',
      fontFamily: 'Monserrat',
    },
    titleTwo: {
      fontWeight: 600,
      fontSize: '23px',
      lineHeight: '27px',
      fontFamily: 'Roboto',
      letterSpacing: '-0.3px',
    },
    textfieldOff: {
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '19px',
      fontFamily: 'Roboto',
      letterSpacing: '0.5px',
    },
    textfieldOn: {
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '19px',
      fontFamily: 'Roboto',
      letterSpacing: '0.2px',
    },
    labelBig: {
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '17px',
      letterSpacing: '-0.3px',
      fontFamily: 'Monserrat',
    },
    labelSmall: {
      fontWeight: 500,
      fontSize: '10px',
      lineHeight: '12px',
      letterSpacing: '-0.3px',
      fontFamily: 'Monserrat',
    },
    input: {
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '-0.3px',
      fontFamily: 'Monserrat',
    },
    inputLight: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '-0.3px',
      fontFamily: 'Monserrat',
    },
    list: {
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '22px',
      letterSpacing: '-0.3px',
      fontFamily: 'Monserrat',
    },
  },
} as const;

type CustomTheme = {
  [Key in keyof typeof customTheme]: (typeof customTheme)[Key];
};

declare module '@mui/material/styles' {
  type Theme = CustomTheme;
  type ThemeOptions = CustomTheme;
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    button: true;
    titleTop: true;
    titleXl: true;
    paragraph: true;
    titleTwo: true;
    textfieldOff: true;
    textfieldOn: true;
    labelBig: true;
    labelSmall: true;
    input: true;
    inputLight: true;
    list: true;
  }
}

export default createTheme(customTheme, esES);
