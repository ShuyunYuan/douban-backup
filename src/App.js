import React from 'react';
import { green } from '@material-ui/core/colors';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import SelectContent from "./components/SelectContent";
import Main from "./components/Main";

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
                backgroundColor: 'white',
            },
        },
        MuiDrawer: {
            paperAnchorDockedLeft: {
                borderRight: 'none',
            },
        },
    },
});

const useStyles = makeStyles({
    root: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor: green[500],
    },
    navbar: {

    },
    content: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
    },
    page: {
        width: 400,
    }
});

function App() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Main />
            </CssBaseline>
        </ThemeProvider>
    );
}

export default App;
