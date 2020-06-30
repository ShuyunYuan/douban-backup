import { Box, Button, Card, CircularProgress, TextField, Typography } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';

import { RootState } from '../state/Store';
import { signIn, SignInArgs } from '../state/Slices';

interface StateProps {
  hasAccounts: boolean;
  isSigningIn: boolean;
}

interface DispatchProps {
  onSignIn: (args: SignInArgs) => void;
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
  const passwordRef = useRef<HTMLInputElement>(null);
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError('');
  };
  const handleSignInClick = () => {
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
    props.onSignIn({ username, password });
  };
  return (
      <Box maxWidth={480} mx='auto'>
        <Card variant='outlined'>
          <Box px={3} pt={4}>
            <Typography align='center' component='h2' variant='h5'>
              登录豆瓣账号
            </Typography>
          </Box>
          <Box position='relative'>
            <Box visibility={props.isSigningIn ? 'hidden' : 'visible'} pt={4}>
              <Box px={3}>
                <TextField
                    id='username' error={!!usernameError} fullWidth helperText={usernameError} inputRef={usernameRef}
                    label='用户名' value={username} variant='outlined' onChange={handleUsernameChange} />
              </Box>
              <Box px={3} pt={2}>
                <TextField
                    id='password' autoComplete='current-password' error={!!passwordError} fullWidth
                    helperText={passwordError} inputRef={passwordRef} label='密码' value={password} type='password'
                    variant='outlined' onChange={handlePasswordChange} />
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
                  <Button color='primary' disableElevation variant='contained' onClick={handleSignInClick}>
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
    hasAccounts: !!state.accounts.length,
    isSigningIn: state.signIn.pending,
  };
}

const mapDispatch: DispatchProps = {
  onSignIn: signIn,
}

export default connect(mapState, mapDispatch)(AddAccount);
