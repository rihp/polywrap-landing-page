import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1C272D",
    },
    secondary: {
      main: "#60c093",
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#529dad'
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
    subtitle1: {
      fontSize: 22
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
      },
    },
    MuiInput: {
      root: {
        height: 40
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
    }
  }
});