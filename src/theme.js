import { createTheme } from '@material-ui/core/styles'
import { purple } from '@material-ui/core/colors';

const theme = createTheme({
  typography: {
    fontFamily: ['Rasa', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

export default theme;