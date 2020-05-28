import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    cardContent: {
        padding: theme.spacing(3),
        '& > *:not(:first-child)': {
            marginTop: theme.spacing(3),
        },
    },
    title: {
        fontWeight: theme.typography.fontWeightLight,
    },
    chooseAccountButton: {
        marginLeft: theme.spacing(-1),
    },
}));

const accounts = [
    {
        name: 'user1',
        icon: AccountCircleOutlinedIcon,
        description: '100',
    },
    {
        name: 'user2',
        icon: AccountCircleOutlinedIcon,
        description: '100',
    },
    {
        name: 'user3',
        icon: AccountCircleOutlinedIcon,
        description: '100',
    },
]

export default function SelectAccount() {
    const classes = useStyles();
    return (
        <Box maxWidth={480} mx='auto'>
            <Card variant='outlined'>
                <Box className={classes.cardContent}>

                    <Typography align='center' variant='h4' className={classes.title}>
                        选择豆瓣帐号
                    </Typography>

                    <List>
                        {accounts.map(({ id, icon: ItemIcon, name, description }) => <>

                            <ListItem>
                                <ListItemIcon>
                                    <ItemIcon />
                                </ListItemIcon>
                                <ListItemText primary={name} secondary={description} />
                            </ListItem>
                            <Divider />
                        </>)}

                        <ListItem>
                            <ListItemIcon>
                                <PersonAddOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary='添加其他账号' />
                        </ListItem>
                    </List>

                </Box>
            </Card>
        </Box>
    );
}
