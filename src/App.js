import React from 'react';
import { green } from '@material-ui/core/colors';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import SelectContent from "./components/SelectContent";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: green[500],
        },
        secondary: {
            main: green[500],
        },
        contrastThreshold: 0,
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
        <CssBaseline>
            <ThemeProvider theme={theme}>
                <Main />
            </ThemeProvider>
        </CssBaseline>
    );
}

export default App;
