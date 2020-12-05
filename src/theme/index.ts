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
    h1: {
      fontSize: 60,
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
        border: 'solid 3px #529dad'
      }
    }
  }
});