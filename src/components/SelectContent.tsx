import {
    AppBar, Box, Button, Checkbox, Divider, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Toolbar
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BookOutlined, MovieOutlined, MusicNoteOutlined } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    bottomBar: {
        top: 'auto',
        bottom: 0
    },
    startButton: {
        marginRight: 48
    }
}));

const items = [
    {
        id: 'book',
        icon: BookOutlined,
        name: '读书',
        description: '100',
    },
    {
        id: 'movie',
        icon: MovieOutlined,
        name: '电影',
        description: '200',
    },
    {
        id: 'music',
        icon: MusicNoteOutlined,
        name: '音乐',
        description: '300',
    },
]

interface Props {
    className?: string;
}

export default function SelectContent(props: Props) {
    const [checked, setChecked] = React.useState(Object.fromEntries(items.map(({ id }) => [id, true])));
    const isNoneChecked = Object.values(checked).every(checked => !checked);
    const selectAllChecked = Object.values(checked).every(checked => checked);
    const classes = useStyles();
    const handleCheckedChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setChecked({ ...checked, [event.target.name]: event.target.checked });
    const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) =>
        setChecked(Object.fromEntries(items.map(({ id }) => [id, event.target.checked])))
    return (
        <Box display='flex' flexDirection='column' className={props.className}>
            <List>
                <ListItem>
                    <ListItemText primary='全选' />
                    <ListItemSecondaryAction>
                        <Checkbox checked={selectAllChecked} edge='end' onChange={handleSelectAll} />
                    </ListItemSecondaryAction>
                </ListItem>
                {items.map(({ id, icon: ItemIcon, name, description }) => <>
                    <Divider />
                    <ListItem>
                        <ListItemIcon>
                            <ItemIcon />
                        </ListItemIcon>
                        <ListItemText primary={name} secondary={description} />
                        <ListItemSecondaryAction>
                            <Checkbox checked={checked[id]} edge='end' name={id} onChange={handleCheckedChange} />
                        </ListItemSecondaryAction>
                    </ListItem>
                </>)}
            </List>
            <Toolbar />
            <AppBar color='default' className={classes.bottomBar}>
                <Toolbar>
                    <Box flexGrow='1' />
                    <Button
                        color='primary' disabled={isNoneChecked} variant='contained' className={classes.startButton}>
                        开始备份
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
