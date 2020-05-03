import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box'
import Container from "@material-ui/core/Container";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import PlaylistAddCheckOutlinedIcon from '@material-ui/icons/PlaylistAddCheckOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

import ElevationScroll from "./ElevationScroll";
import SelectContent from "./SelectContent";
import SignIn from "./SignIn";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
}));

export default function Main() {
    const classes = useStyles();
    return (
        <Box display='flex'>
            <ElevationScroll>
                <AppBar color='default' className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            豆瓣备份工具
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{ paper: classes.drawerPaper }}>
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        {[
                            ['开始备份', <GetAppOutlinedIcon />],
                            ['任务列表', <PlaylistAddCheckOutlinedIcon />],
                            ['开始恢复', <CloudUploadOutlinedIcon />],
                            ['设置', <SettingsOutlinedIcon />]
                        ].map(([text, icon], index) => (
                            <ListItem button key={text} selected={index === 0}>
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
            <Box flexGrow={1} flexShrink={1} display='flex' flexDirection='column'>
                <Toolbar />
                <Box maxWidth={936} padding='0 48px'>
                    {/*<SelectContent />*/}
                    <SignIn />
                </Box>
            </Box>
        </Box>
    );
}
