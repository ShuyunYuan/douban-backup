import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    cardContent: {
        '& > *:not(:first-child)': {
            marginTop: 16,
        }
    },
    title: {
        margin: '16px 0',
        fontWeight: theme.typography.fontWeightLight,
    },
    button: {
        marginTop: '32px !important',
    }
}));

export default function SignInCard(props) {
    const classes = useStyles();
    return (
        <Card className={props.className}>
            <CardContent className={classes.cardContent}>
                <Typography align='center' color='primary' variant='h3' className={classes.title}>
                    Douban Backup
                </Typography>
                <TextField id='username' fullWidth label='Username' variant='outlined' />
                <TextField id='password' autoComplete='current-password' fullWidth label='Password' type='password'
                           variant='outlined' />
                <Button color='primary' fullWidth variant='contained' className={classes.button}>
                    Sign in to Douban
                </Button>
            </CardContent>
        </Card>
    );
}
