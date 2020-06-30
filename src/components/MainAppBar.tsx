import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ElevateOnScroll from './ElevateOnScroll';

const useStyles = makeStyles((theme) => ({
  appBarRoot: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default function MainAppBar() {
  const classes = useStyles();
  return (
      <ElevateOnScroll>
        <AppBar color='default' classes={{ root: classes.appBarRoot }}>
          <Toolbar>
            <Typography component='h1' variant='h6'>
              豆瓣备份工具
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevateOnScroll>
  );
}
