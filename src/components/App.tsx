import { CssBaseline } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';

import Main from './Main';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[600],
    },
    secondary: {
      main: green[600],
    },
    background: {
      default: '#ffffff',
    }
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: '#ffffff',
      },
    },
    MuiCard: {
      root: {
        borderRadius: 8,
      },
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderRight: 'none',
        '& .MuiListItem-button': {
          borderRadius: '0 24px 24px 0',
        },
        '& .MuiListItem-gutters': {
          '@media (min-width: 600px)': {
            paddingLeft: 24,
            paddingRight: 24,
          },
        },
      },
    },
  },
});

export default function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Main />
        </CssBaseline>
      </ThemeProvider>
  );
}
