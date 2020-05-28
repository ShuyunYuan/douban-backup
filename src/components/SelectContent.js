import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from "@material-ui/core/Divider";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import BookIcon from '@material-ui/icons/Book';
import MovieIcon from '@material-ui/icons/Movie';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

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
        icon: BookIcon,
        name: '读书',
        description: '100',
    },
    {
        id: 'movie',
        icon: MovieIcon,
        name: '电影',
        description: '200',
    },
    {
        id: 'music',
        icon: MusicNoteIcon,
        name: '音乐',
        description: '300',
    },
]

export default function SelectContent(props) {
    const [checked, setChecked] = React.useState(Object.fromEntries(items.map(({ id }) => [id, true])));
    const isNoneChecked = Object.values(checked).every(checked => !checked);
    const selectAllChecked = Object.values(checked).every(checked => checked);

    const handleCheckedChange = event => {
        setChecked({ ...checked, [event.target.name]: event.target.checked });
    };

    const handleSelectAll = event => {
        setChecked(Object.fromEntries(items.map(({ id }) => [id, event.target.checked])))
    }

    const classes = useStyles();
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
                    <Button color='primary' disabled={isNoneChecked} variant='contained' className={classes.startButton}>
                        开始备份
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
