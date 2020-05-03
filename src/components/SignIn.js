import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Container from "@material-ui/core/Container";
import TextField from '@material-ui/core/TextField';
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
                        登录豆瓣账户
                    </Typography>
                    <TextField id='username' fullWidth label='用户名' variant='outlined' />
                    <TextField
                        id='password' autoComplete='current-password' fullWidth label='密码' type='password'
                        variant='outlined' />
                    <Box display='flex'>
                        <Button color="primary" className={classes.chooseAccountButton}>
                            选择帐户
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
