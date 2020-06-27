import { Box, Button, Card, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
    signInButton: {
        marginLeft: 'auto',
    },
}));

export default function SignIn() {
    const classes = useStyles();
    return (
        <Box maxWidth={480} mx='auto'>
            <Card variant='outlined'>
                <Box className={classes.cardContent}>
                    <Typography align='center' variant='h4' className={classes.title}>
                        登录豆瓣账号
                    </Typography>
                    <TextField id='username' fullWidth label='用户名' variant='outlined' />
                    <TextField
                        id='password' autoComplete='current-password' fullWidth label='密码' type='password'
                        variant='outlined' />
                    <Box display='flex'>
                        <Button color="primary" className={classes.chooseAccountButton}>
                            选择账号
                        </Button>
                        <Button color='primary' disableElevation variant='contained' className={classes.signInButton}>
                            登录
                        </Button>
                    </Box>
                </Box>
            </Card>
        </Box>
    );
}
