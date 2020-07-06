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
          <Box flex={1} display='flex' flexDirection='row' justifyContent='center'>
            <Box flex={1} maxWidth={936}>
              <Switch>
                <Route path='/backup' component={Backup} />
              </Switch>
            </Box>
          </Box>
        </Box>
      </Box>
  );
}
