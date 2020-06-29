import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, fade } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from '../state/Store';
import Main from './Main';

const primaryColor = green[600];
const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: primaryColor,
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
        '& .MuiListItem-root.Mui-selected': {
          backgroundColor: fade(primaryColor, 0.12),
          color: primaryColor,
        },
        '& .MuiListItem-root.Mui-selected:hover': {
          backgroundColor: fade(primaryColor, 0.12),
        },
        '& .MuiListItem-button': {
          borderRadius: '0 24px 24px 0',
        },
        '& .MuiListItem-dense': {
          paddingTop: 8,
          paddingBottom: 8,
        },
        '& .MuiListItem-gutters': {
          '@media (min-width: 600px)': {
            paddingLeft: 24,
            paddingRight: 24,
          },
        },
        '& .MuiListItem-root .MuiListItemIcon-root': {
          minWidth: 40,
        },
        '& .MuiListItem-root.Mui-selected .MuiListItemIcon-root': {
          color: primaryColor,
        },
        '& .MuiListItem-root .MuiListItemText-dense .MuiTypography-body2': {
          fontWeight: 500,
        },
      },
    },
  },
});

export default function App() {
  return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={theme}>
            <CssBaseline>
              <Main />
            </CssBaseline>
          </ThemeProvider>
        </ConnectedRouter>
      </Provider>
  );
}
