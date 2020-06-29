import { Box, Toolbar } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Backup from './Backup';
import MainAppBar from './MainAppBar';
import MainDrawer from './MainDrawer';

export default function Main() {
    return (
        <Box flex={1} display='flex'>
            <MainAppBar />
            <MainDrawer />
            <Box flex={1} display='flex' flexDirection='column'>
                <Toolbar />
                <Box maxWidth={936} padding='0 48px'>
                    <Switch>
                        <Route path='/backup' component={Backup} />
                    </Switch>
                </Box>
            </Box>
        </Box>
    );
}
