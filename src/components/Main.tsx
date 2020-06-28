import {
    AppBar, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CloudUploadOutlined, GetAppOutlined, PlaylistAddCheckOutlined, SettingsOutlined } from '@material-ui/icons';
import React from 'react';

import ElevateOnScroll from './ElevateOnScroll';
import SelectAccount from './SelectAccount';
import AddAccount from './AddAccount';

const drawerItems = [
    {
        icon: <GetAppOutlined />,
        text: '开始备份',
    },
    {
        icon: <PlaylistAddCheckOutlined />,
        text: '任务列表',
    },
    {
        icon: <CloudUploadOutlined />,
        text: '开始恢复',
    },
    {
        icon: <SettingsOutlined />,
        text: '设置',
    },
];

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerRoot: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
}));

export default function Main() {
    const classes = useStyles();
    return (
        <Box flex={1} display='flex'>
            <ElevateOnScroll>
                <AppBar color='default' className={classes.appBar}>
                    <Toolbar>
                        <Typography component='h1' variant='h6'>
                            豆瓣备份工具
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ElevateOnScroll>
            <Drawer variant='permanent' classes={{ root: classes.drawerRoot, paper: classes.drawerPaper }}>
                <Toolbar />
                <List>
                    {drawerItems.map(({ icon, text }, index) => (
                        <ListItem key={text} button selected={index === 0}>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box flex={1} display='flex' flexDirection='column'>
                <Toolbar />
                <Box maxWidth={936} padding='0 48px'>
                    {/*<SelectContent />*/}
                    {/*<SelectAccount />*/}
                    <AddAccount />
                </Box>
            </Box>
        </Box>
    );
}
