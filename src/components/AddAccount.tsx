import { Box, Button, Card, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../state/Store';

interface StateProps {
    hasAccounts: boolean;
}

type Props = StateProps;

function AddAccount(props: Props) {
    return (
        <Box maxWidth={480} mx='auto'>
            <Card variant='outlined'>
                <Box px={3} py={4}>
                    <Typography align='center' component='h2' variant='h5'>
                        登录豆瓣账号
                    </Typography>
                </Box>
                <Box px={3}>
                    <TextField id='username' fullWidth label='用户名' variant='outlined' />
                </Box>
                <Box px={3} pt={2}>
                    <TextField
                        id='password' autoComplete='current-password' fullWidth label='密码' type='password'
                        variant='outlined' />
                </Box>
                <Box display='flex' px={3} py={2}>
                    {props.hasAccounts && (
                        <Box ml={-1}>
                            <Button color='primary'>
                                选择已有账号
                            </Button>
                        </Box>
                    )}
                    <Box ml='auto'>
                        <Button color='primary' disableElevation variant='contained'>
                            登录
                        </Button>
                    </Box>
                </Box>
            </Card>
        </Box>
    );
}

function mapState(state: RootState): StateProps {
    return {
        hasAccounts: !!state.accounts.length,
    };
}

export default connect(mapState)(AddAccount);
