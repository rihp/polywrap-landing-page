import { createMuiTheme } from '@material-ui/core/styles';
import { hexToCSSFilter, HexToCssConfiguration } from 'hex-to-css-filter/dist/es2015';
 
const config: HexToCssConfiguration = {
  acceptanceLossPercentage: 1,
  maxChecks: 10,
};

const getFilter = (hexColor: string) => hexToCSSFilter(hexColor, config).filter


// **
// * Polywrap Color Pallete
// *
// * Primary Green Gradient:    74DD9F - 27C69F - 120 Degrees
// * Secondary Blue Gradient :  1B5FED - 1B87ED - 179 Degrees
// * Terciary Yellow Gradient : FFC272 - FFE272 - 0 Degrees
// * Wrap Gradient :            878787 - FFFFFF - 127 Degrees - 0.35 Transparency 
// * Black Background :         231F20
// * White Background :         FFFFFF
// ** 
export const filters = {
  textSecondary: getFilter('#FFFFFF'),
  secondary: getFilter('#FFC272')
}

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#231F20",
    },
    secondary: {
      main: "#1B5FED",
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#FFC272'
    }
  },
  typography: {
    fontFamily: `'Montserrat', sans-serif`,
    h1: {
      fontSize: 45,
      letterSpacing: -1
    },
    h2: {
      fontSize: 40,
      letterSpacing: -1
    },
    h3: {
      fontSize: 40,
      lineHeight: 1.5,
      letterSpacing: '-1px'
    },
    subtitle1: {
      fontSize: 22,
      lineHeight: 1.75
    },
    body1: {
      fontSize: 14
    }
  },
  overrides: {
    MuiTextField: {
      root: {
        border: 'solid 1px #529dad',
        borderRadius: 4, 
        backgroundColor: '#242F35',
        '& .MuiInput-underline:before': {
          borderBottomColor: 'none',
        },
        '& .MuiInput-underline:hover:before': {
          borderBottomColor: 'none',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'none',
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
          borderBottom: '0'
        }
      },
    },
    MuiInput: {
      root: {
        height: 40,
        "& $notchedOutline": {
          borderWidth: 0
        },
        "&:hover $notchedOutline": {
          borderWidth: 0
        },
        "&$focused $notchedOutline": {
          borderWidth: 0
        }
      },
    },
    MuiLink: {
      root: {
        '&:hover': {
          color: '#60c093'
        }
      }
    },
    MuiAppBar: {
      root: {
        backgroundColor: '#1B262C',
        boxShadow: 'none'
      }
    },
    MuiButton: {
      outlinedSecondary: {
        border: 'solid 1px #529dad',
        '&:hover': {
          border: 'solid 1px #529dad',
          backgroundColor: '#60c093',
          color: '#ffffff'
        }
      }
    }
  }
});