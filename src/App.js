import React from 'react';
import { green } from '@material-ui/core/colors';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import SignInCard from './components/SignInCard';

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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: green[500],
    },
    card: {
        width: 400,
        margin: 24,
    },
});

function App() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <SignInCard className={classes.card}/>
            </div>
        </ThemeProvider>
    );
}

export default App;
