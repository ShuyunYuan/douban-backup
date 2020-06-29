import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CloudUploadOutlined, GetAppOutlined, PlaylistAddCheckOutlined, SettingsOutlined } from '@material-ui/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';

const drawerItems = [
  {
    icon: <GetAppOutlined />,
    text: '开始备份',
    to: '/backup',
  },
  {
    icon: <PlaylistAddCheckOutlined />,
    text: '任务列表',
    to: '/tasks',
  },
  {
    icon: <CloudUploadOutlined />,
    text: '开始恢复',
    to: '/restore',
  },
  {
    icon: <SettingsOutlined />,
    text: '设置',
    to: '/settings',
  },
];

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  drawerRoot: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

export default function MainDrawer() {
  const classes = useStyles();
  return (
      <Drawer variant='permanent' classes={{ root: classes.drawerRoot, paper: classes.drawerPaper }}>
        <Toolbar />
        <List>
          {drawerItems.map(item => (
              <ListItem key={item.to} button component={NavLink} dense activeClassName='Mui-selected' to={item.to}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
          ))}
        </List>
      </Drawer>
  );
}
