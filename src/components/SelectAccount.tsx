import { Box, Card, Divider, ListItemIcon, ListItemText, ListItem, List, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircleOutlined, PersonAddOutlined } from '@material-ui/icons';
import React from 'react';

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
        icon: AccountCircleOutlined,
        description: '100',
    },
    {
        name: 'user2',
        icon: AccountCircleOutlined,
        description: '100',
    },
    {
        name: 'user3',
        icon: AccountCircleOutlined,
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
                        {accounts.map(({ icon: ItemIcon, name, description }) => (
                            <>
                                <ListItem>
                                    <ListItemIcon>
                                        <ItemIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={name} secondary={description} />
                                </ListItem>
                                <Divider />
                            </>
                        ))}
                        <ListItem>
                            <ListItemIcon>
                                <PersonAddOutlined />
                            </ListItemIcon>
                            <ListItemText primary='添加其他账号' />
                        </ListItem>
                    </List>
                </Box>
            </Card>
        </Box>
    );
}
