import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from "@material-ui/core/Container";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";

import ElevationScroll from "./ElevationScroll";
import SelectContent from "./SelectContent";

const useStyles = makeStyles((theme) => ({
    root: {

    },
}));

export default function Main() {
    const classes = useStyles();
    return (
        <>
            <ElevationScroll>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6">豆瓣备份工具</Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
            <Container>
                <SelectContent />
            </Container>
        </>
    );
}
