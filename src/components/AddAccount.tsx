import { Box, Button, Card, CircularProgress, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';

import { User } from '../api';
import { RootState } from '../state/Store';
import { Account, addAccount, resetSignIn, setBackupUsername, signIn, SignInArgs } from '../state/Slices';

interface StateProps {
  hasAccounts: boolean;
  isSigningIn: boolean;
  signInError: string;
  signInUser: User | null;
}

interface DispatchProps {
  signIn: (args: SignInArgs) => void;
  resetSignIn: () => void;
  addAccount: (account: Account) => void;
  setBackupUsername: (username: string) => void;
}

type Props = StateProps & DispatchProps;

function AddAccount(props: Props) {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const usernameRef = useRef<HTMLInputElement>(null);
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    setUsernameError('');
  };
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const signInOrPasswordError = props.signInError || passwordError;
  const passwordRef = useRef<HTMLInputElement>(null);
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError('');
  };
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let focusRef: React.RefObject<HTMLInputElement> | null = null;
    if (!username) {
      setUsernameError('请输入用户名')
      focusRef = usernameRef;
    }
    if (!password) {
      setPasswordError('请输入密码')
      if (!focusRef) {
        focusRef = passwordRef;
      }
    }
    if (!username || !password) {
      focusRef!!.current!!.focus();
      return;
    }
    props.signIn({ username, password });
  };
  useEffect(() => {
    if (props.signInUser) {
      props.resetSignIn();
      props.addAccount({ username, password, user: props.signInUser });
      props.setBackupUsername(username);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.signInUser]);
  if (props.signInUser) {
    return <Redirect to='select-content' />
  }
  return (
      <Box maxWidth={480}>
        <Card variant='outlined'>
          <Box paddingX={3} paddingTop={4}>
            <Typography align='center' component='h2' variant='h5'>
              登录豆瓣账号
            </Typography>
          </Box>
          <Box position='relative'>
            <Box
                component='form' visibility={props.isSigningIn ? 'hidden' : 'visible'} paddingTop={4}
                onSubmit={handleFormSubmit}>
              <Box paddingX={3}>
                <TextField
                    id='username' autoFocus error={!!usernameError} fullWidth helperText={usernameError}
                    inputRef={usernameRef} label='用户名' value={username} variant='outlined'
                    onChange={handleUsernameChange} />
              </Box>
              <Box paddingX={3} paddingTop={2}>
                <TextField
                    id='password' autoComplete='current-password' error={!!signInOrPasswordError} fullWidth
                    helperText={signInOrPasswordError} inputRef={passwordRef} label='密码' value={password}
                    type='password' variant='outlined' onChange={handlePasswordChange} />
              </Box>
              <Box display='flex' paddingX={3} paddingY={2}>
                {props.hasAccounts && (
                    <Box marginLeft={-1}>
                      <Button color='primary' component={NavLink} to='select-account'>
                        选择已有账号
                      </Button>
                    </Box>
                )}
                <Box marginLeft='auto'>
                  <Button color='primary' type='submit' variant='contained'>
                    登录
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
                position='absolute' left={0} right={0} top={0} bottom={0}
                display={props.isSigningIn ? 'flex' : 'none'} alignItems='center' justifyContent='center'>
              <CircularProgress thickness={4} />
            </Box>
          </Box>
        </Card>
      </Box>
  );
}

function mapState(state: RootState): StateProps {
  return {
    hasAccounts: !!Object.keys(state.accounts).length,
    isSigningIn: state.signIn.isPending,
    signInError: state.signIn.error,
    signInUser: state.signIn.user,
  };
}

const mapDispatch: DispatchProps = {
  signIn,
  resetSignIn,
  addAccount,
  setBackupUsername,
}

export default connect(mapState, mapDispatch)(AddAccount);
